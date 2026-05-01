import { useState, useEffect, useCallback, useMemo } from "react";
import { ALL_QUESTIONS, filterQuestions } from "./data/questions/index";
import { TAGS, TAG_MAP, CATEGORY_LABELS, tagsByCategory } from "./data/tags";

// ── CONSTANTS ────────────────────────────────────────────────────────────────
const TIMER_MAX   = 15;
const LETTERS     = ["A", "B", "C", "D"];
const MAX_LIVES   = 3;
const LS_SCORES   = "quizcm_scores_v3";
const LS_PROFILES = "quizcm_profiles";
const LS_ACTIVE   = "quizcm_active";
const LS_REVIEW   = "quizcm_review_bank";
const MIN_Q       = 3; // minimum questions to start a quiz

const AVATARS = ["🦊","🐸","🦋","🐼","🦄","🐙","🐯","🐧","🦁","🐻","🐨","🦖"];
const AVATAR_COLORS = [
  "#6366f1","#4ECDC4","#FFD93D","#6BCB77","#f472b6","#fb923c",
  "#38bdf8","#34d399","#f87171","#a78bfa","#60a5fa","#ef4444"
];

const LEARNING_PATHS = [
  { id: "cycle3", name: "Consolider CM", tags: ["cm1", "cm2"], desc: "bases avant collège" },
  { id: "sixfive", name: "6e-5e", tags: ["college"], desc: "repères collège" },
  { id: "cycle4", name: "4e-3e", tags: ["cycle4"], desc: "raisonnement guidé" },
  { id: "fractions", name: "Fractions", tags: ["fractions"], desc: "calculs et sens" },
  { id: "sciences", name: "Sciences visuelles", tags: ["svt"], desc: "schémas et notions" },
];

// ── STORAGE ───────────────────────────────────────────────────────────────────
const load  = (k, fb) => { try { return JSON.parse(localStorage.getItem(k)) ?? fb; } catch { return fb; } };
const store = (k, v)  => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

function loadScores(pid) { return load(LS_SCORES, {})[pid] || {}; }
function saveScore(pid, tagKey, mode, score, total) {
  const all = load(LS_SCORES, {});
  if (!all[pid]) all[pid] = {};
  const k = `${tagKey}__${mode}`;
  const prev = all[pid][k] || { best: 0, plays: 0 };
  all[pid][k] = { best: Math.max(prev.best, score), plays: prev.plays + 1, total };
  store(LS_SCORES, all);
}

// ── DECK BUILDERS ─────────────────────────────────────────────────────────────
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

function buildNormalDeck(qs)   { return shuffle(qs); }
function buildRevisionDeck(qs) { return shuffle(qs); }
function buildSmartRevisionDeck(missed, bank, currentPool) {
  const seen = new Set();
  const combined = [...missed, ...bank]
    .filter(Boolean)
    .filter(q => {
      const key = q.id || q.q;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  const relatedTags = new Set(combined.flatMap(q => q.tags || []).filter(t =>
    !["cp","ce1","ce2","cm1","cm2","college","cycle4","lycee","debutant","inter"].includes(t)
  ));
  const related = currentPool
    .filter(q => !seen.has(q.id || q.q))
    .filter(q => (q.tags || []).some(t => relatedTags.has(t)))
    .slice(0, Math.max(3, combined.length));
  return shuffle([...combined, ...related]).slice(0, Math.max(3, combined.length + Math.min(6, related.length)));
}
function buildSurvivalDeck(qs) {
  const base = [1, 2, 3, 4, 5].flatMap(level =>
    shuffle(qs.filter(q => q.difficulty === level))
  );
  return [...base, ...shuffle(base)]; // double up for longer sessions
}
function getSurvivalTimer(qi) {
  if (qi < 4)  return 15;
  if (qi < 8)  return 12;
  if (qi < 12) return 10;
  return 8;
}

function difficultyName(d) {
  return ({
    1: "CP-CE2",
    2: "CM1-CM2",
    3: "6e-5e",
    4: "4e-3e",
    5: "Lycée",
  })[d] || "Niveau";
}

// ── HELPERS ───────────────────────────────────────────────────────────────────
const pct = (s, t) => t > 0 ? s / t : 0;
function getStars(s, t) {
  const p = pct(s, t);
  return p === 1 ? ["⭐","⭐","⭐"] : p >= 0.6 ? ["⭐","⭐","☆"] : ["⭐","☆","☆"];
}
function resultEmoji(s, t) {
  const p = pct(s, t);
  return p === 1 ? "🏆" : p >= 0.8 ? "🎉" : p >= 0.6 ? "😊" : p >= 0.4 ? "😅" : "💪";
}
function resultTitle(s, t) {
  const p = pct(s, t);
  return p === 1 ? "Parfait !" : p >= 0.8 ? "Excellent !" : p >= 0.6 ? "Bien joué !" : p >= 0.4 ? "Pas mal !" : "Continue !";
}
function tagKey(tags) { return [...tags].sort().join(","); }

// ── SUB-COMPONENTS ────────────────────────────────────────────────────────────
function TagPill({ tag, selected, count, onClick, small }) {
  const t = typeof tag === "string" ? TAG_MAP[tag] : tag;
  if (!t) return null;
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex", alignItems: "center", gap: small ? 4 : 5,
        padding: small ? "3px 9px" : "5px 12px",
        borderRadius: 20,
        border: `2px solid ${selected ? t.color : "#ddd"}`,
        background: selected ? t.color : "white",
        color: selected ? "white" : t.color,
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 700,
        fontSize: small ? 11 : 13,
        cursor: onClick ? "pointer" : "default",
        transition: "all 0.15s",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {t.label}
      {count !== undefined && (
        <span style={{
          background: selected ? "rgba(255,255,255,0.3)" : t.bg,
          color: selected ? "white" : t.color,
          borderRadius: 10, padding: "1px 6px", fontSize: 10, fontWeight: 800,
        }}>{count}</span>
      )}
    </button>
  );
}

function DiffBadge({ d }) {
  const map = {
    1: ["★☆☆☆☆","#22c55e"],
    2: ["★★☆☆☆","#84cc16"],
    3: ["★★★☆☆","#FFD93D"],
    4: ["★★★★☆","#fb923c"],
    5: ["★★★★★","#f43f5e"],
  };
  const [label, color] = map[d] || map[1];
  return <span style={{ fontSize: 10, fontWeight: 700, color, letterSpacing: 1 }}>{label}</span>;
}

function AnatomyVisual({ highlight }) {
  const is = part => highlight === part;
  const active = "#f43f5e";
  const organ = part => is(part) ? active : "#d6d3e8";
  const outline = "#6b6685";
  return (
    <div className="qvisual" aria-label="Schéma du corps humain avec une zone colorée">
      <svg viewBox="0 0 180 240" role="img">
        <title>Schéma anatomique</title>
        <circle cx="90" cy="28" r="18" fill="#fff7ed" stroke={outline} strokeWidth="2" />
        <path d="M70 56 Q90 66 110 56 L120 132 Q119 158 104 168 L76 168 Q61 158 60 132 Z" fill="#f8fafc" stroke={outline} strokeWidth="2" />
        <path d="M66 64 L36 112 M114 64 L144 112 M76 168 L66 222 M104 168 L114 222" stroke={outline} strokeWidth="8" strokeLinecap="round" />
        <path d="M78 58 V165 M102 58 V165 M72 92 H108 M68 120 H112" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        <circle cx="83" cy="27" r="4" fill={organ("eyes")} stroke={is("eyes") ? "#9f1239" : outline} strokeWidth="1.5" />
        <circle cx="97" cy="27" r="4" fill={organ("eyes")} stroke={is("eyes") ? "#9f1239" : outline} strokeWidth="1.5" />
        <path d="M87 89 C72 75 57 89 62 111 C66 128 82 132 88 118 Z" fill={organ("lungs")} stroke={is("lungs") ? "#9f1239" : outline} strokeWidth="1.5" />
        <path d="M93 89 C108 75 123 89 118 111 C114 128 98 132 92 118 Z" fill={organ("lungs")} stroke={is("lungs") ? "#9f1239" : outline} strokeWidth="1.5" />
        <path d="M93 105 C84 94 72 103 76 116 C80 129 92 131 96 141 C101 131 114 126 111 113 C109 103 100 99 93 105 Z" fill={organ("heart")} stroke={is("heart") ? "#9f1239" : outline} strokeWidth="1.5" />
        <path d="M82 139 C101 130 121 145 111 160 C103 173 78 168 74 155 C72 149 75 143 82 139 Z" fill={organ("stomach")} stroke={is("stomach") ? "#9f1239" : outline} strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function SkeletonVisual({ highlight }) {
  const is = part => highlight === part;
  const active = "#f43f5e";
  const bone = part => is(part) ? active : "#e5e7eb";
  const outline = "#64748b";
  return (
    <div className="qvisual" aria-label="Schéma du squelette avec une zone colorée">
      <svg viewBox="0 0 180 240" role="img">
        <title>Schéma du squelette</title>
        <circle cx="90" cy="30" r="17" fill={bone("skull")} stroke={is("skull") ? "#9f1239" : outline} strokeWidth="2" />
        <path d="M82 47 H98 M90 47 V68" stroke={outline} strokeWidth="4" strokeLinecap="round" />
        <path d="M68 72 H112 M74 86 H106 M78 100 H102" stroke={bone("ribs")} strokeWidth="7" strokeLinecap="round" />
        <path d="M90 68 V148" stroke={outline} strokeWidth="5" strokeLinecap="round" />
        <path d="M68 74 L38 120 M112 74 L142 120" stroke={outline} strokeWidth="7" strokeLinecap="round" />
        <path d="M74 150 H106" stroke={outline} strokeWidth="8" strokeLinecap="round" />
        <path d="M78 154 L66 222" stroke={bone("femur")} strokeWidth="9" strokeLinecap="round" />
        <path d="M102 154 L114 222" stroke={bone("femur")} strokeWidth="9" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function WaterStateVisual({ highlight }) {
  const is = state => highlight === state;
  return (
    <div className="qvisual qvisual-wide" aria-label="Schéma des états de l'eau">
      <svg viewBox="0 0 260 120" role="img">
        <title>États de l'eau</title>
        <rect x="15" y="40" width="55" height="55" rx="8" fill={is("solid") ? "#38bdf8" : "#e0f2fe"} stroke="#0369a1" strokeWidth="2" />
        <path d="M28 54 L58 84 M58 54 L28 84" stroke="#0369a1" strokeWidth="2" />
        <path d="M112 44 C98 62 91 74 91 84 C91 101 105 111 122 111 C139 111 153 101 153 84 C153 74 146 62 132 44 C128 37 126 31 122 24 C118 31 116 37 112 44 Z" fill={is("liquid") ? "#2563eb" : "#dbeafe"} stroke="#1d4ed8" strokeWidth="2" />
        <path d="M191 83 C203 68 184 62 196 48 C207 35 191 29 203 17 M219 91 C232 75 211 68 224 51 C235 37 220 30 232 18" fill="none" stroke={is("gas") ? "#f43f5e" : "#94a3b8"} strokeWidth="5" strokeLinecap="round" />
        <text x="42" y="112" textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">solide</text>
        <text x="122" y="112" textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">liquide</text>
        <text x="214" y="112" textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">gaz</text>
      </svg>
    </div>
  );
}

function CircuitVisual({ highlight }) {
  const active = "#f43f5e";
  const wire = "#475569";
  const is = part => highlight === part;
  return (
    <div className="qvisual qvisual-wide" aria-label="Schéma de circuit électrique">
      <svg viewBox="0 0 260 130" role="img">
        <title>Circuit électrique</title>
        <path d="M58 64 H106 M154 64 H206 M58 64 V96 H206 V64" fill="none" stroke={wire} strokeWidth="5" strokeLinecap="round" />
        <rect x="26" y="47" width="32" height="34" rx="4" fill={is("battery") ? active : "#e2e8f0"} stroke="#334155" strokeWidth="2" />
        <path d="M35 40 V48 M49 36 V48" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
        <circle cx="130" cy="64" r="24" fill={is("lamp") ? "#fde047" : "#f8fafc"} stroke="#334155" strokeWidth="3" />
        <path d="M118 64 C122 50 138 50 142 64 C136 72 124 72 118 64 Z" fill="none" stroke="#334155" strokeWidth="2" />
        <path d="M198 52 L230 37" stroke={is("switch") ? active : "#334155"} strokeWidth="6" strokeLinecap="round" />
        <circle cx="198" cy="52" r="5" fill="#334155" />
        <circle cx="232" cy="36" r="5" fill="#334155" />
      </svg>
    </div>
  );
}

function FoodChainVisual({ highlight }) {
  const is = part => highlight === part;
  const box = (x, label, part, color) => (
    <g>
      <rect x={x} y="36" width="62" height="48" rx="10" fill={is(part) ? color : "#f8fafc"} stroke={is(part) ? "#9f1239" : "#cbd5e1"} strokeWidth="2" />
      <text x={x + 31} y="64" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1e293b">{label}</text>
    </g>
  );
  return (
    <div className="qvisual qvisual-wide" aria-label="Schéma d'une chaîne alimentaire">
      <svg viewBox="0 0 270 120" role="img">
        <title>Chaîne alimentaire</title>
        {box(8, "Plante", "producer", "#bbf7d0")}
        {box(104, "Chenille", "consumer", "#fde68a")}
        {box(200, "Oiseau", "predator", "#bfdbfe")}
        <path d="M74 60 H98 M170 60 H194" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
        <path d="M96 52 L104 60 L96 68 M192 52 L200 60 L192 68" fill="none" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function MapVisual({ highlight }) {
  const is = part => highlight === part;
  const active = "#f43f5e";
  const land = "#e2e8f0";
  return (
    <div className="qvisual qvisual-wide" aria-label="Carte simplifiée avec une zone colorée">
      <svg viewBox="0 0 260 150" role="img">
        <title>Carte simplifiée</title>
        <rect width="260" height="150" rx="14" fill="#eff6ff" />
        <path d="M78 38 L112 30 L129 48 L121 77 L98 91 L72 76 L63 55 Z" fill={is("france") ? active : land} stroke="#64748b" strokeWidth="2" />
        <path d="M132 31 L166 36 L173 69 L153 85 L124 75 L130 49 Z" fill={is("germany") ? active : land} stroke="#64748b" strokeWidth="2" />
        <path d="M139 88 C158 88 168 102 165 126 C158 127 150 118 147 107 C143 103 135 102 139 88 Z" fill={is("italy") ? active : land} stroke="#64748b" strokeWidth="2" />
        <path d="M57 86 L88 91 L92 119 L60 122 L44 104 Z" fill={is("spain") ? active : land} stroke="#64748b" strokeWidth="2" />
        <path d="M23 55 L43 44 L56 61 L45 80 L26 75 Z" fill={is("uk") ? active : land} stroke="#64748b" strokeWidth="2" />
      </svg>
    </div>
  );
}

function RectangleVisual({ width = 8, height = 5, highlight }) {
  const active = highlight === "area";
  return (
    <div className="qvisual qvisual-wide" aria-label="Schéma d'un rectangle coloré">
      <svg viewBox="0 0 260 140" role="img">
        <title>Rectangle</title>
        <rect x="55" y="30" width="150" height="80" rx="4" fill={active ? "#bfdbfe" : "#f8fafc"} stroke="#1d4ed8" strokeWidth="3" />
        <path d="M55 116 H205 M49 30 V110" stroke="#475569" strokeWidth="2" />
        <path d="M55 121 L55 111 M205 121 L205 111 M44 30 H54 M44 110 H54" stroke="#475569" strokeWidth="2" />
        <text x="130" y="134" textAnchor="middle" fontSize="14" fontWeight="800" fill="#334155">{width} cm</text>
        <text x="28" y="74" textAnchor="middle" fontSize="14" fontWeight="800" fill="#334155" transform="rotate(-90 28 74)">{height} cm</text>
        <text x="130" y="76" textAnchor="middle" fontSize="18" fontWeight="900" fill="#1d4ed8">aire</text>
      </svg>
    </div>
  );
}

function TimelineVisual({ highlight }) {
  const active = period => highlight === period;
  const segment = (x, w, label, period) => (
    <g>
      <rect x={x} y="48" width={w} height="26" rx="5" fill={active(period) ? "#f43f5e" : "#e2e8f0"} stroke={active(period) ? "#9f1239" : "#94a3b8"} strokeWidth="2" />
      <text x={x + w / 2} y="95" textAnchor="middle" fontSize="10" fontWeight="800" fill="#334155">{label}</text>
    </g>
  );
  return (
    <div className="qvisual qvisual-wide" aria-label="Frise chronologique avec une période colorée">
      <svg viewBox="0 0 280 125" role="img">
        <title>Frise chronologique</title>
        <path d="M18 61 H262" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
        {segment(20, 58, "Préhistoire", "prehistoire")}
        {segment(82, 54, "Antiquité", "antiquite")}
        {segment(140, 50, "Moyen Âge", "moyen_age")}
        {segment(194, 42, "Renaissance", "renaissance")}
        {segment(240, 22, "Actuel", "contemporain")}
      </svg>
    </div>
  );
}

function FlagVisual({ flag }) {
  return (
    <div className="qvisual qvisual-flag" aria-label="Drapeau à identifier">
      <div className="flag-emoji">{flag}</div>
    </div>
  );
}

function QuestionVisual({ visual }) {
  if (!visual) return null;
  if (visual.type === "anatomy") return <AnatomyVisual highlight={visual.highlight} />;
  if (visual.type === "skeleton") return <SkeletonVisual highlight={visual.highlight} />;
  if (visual.type === "water-state") return <WaterStateVisual highlight={visual.highlight} />;
  if (visual.type === "circuit") return <CircuitVisual highlight={visual.highlight} />;
  if (visual.type === "food-chain") return <FoodChainVisual highlight={visual.highlight} />;
  if (visual.type === "map") return <MapVisual highlight={visual.highlight} />;
  if (visual.type === "rectangle") return <RectangleVisual width={visual.width} height={visual.height} highlight={visual.highlight} />;
  if (visual.type === "timeline") return <TimelineVisual highlight={visual.highlight} />;
  if (visual.type === "flag") return <FlagVisual flag={visual.flag} />;
  return null;
}

function TimerRing({ value, max, color }) {
  const r = 17, circ = 2 * Math.PI * r;
  const offset = circ - (value / max) * circ;
  const stroke = value <= 4 ? "#f43f5e" : value <= 8 ? "#FFD93D" : color;
  return (
    <div style={{ width: 46, height: 46, position: "relative", flexShrink: 0 }}>
      <svg width="46" height="46" viewBox="0 0 46 46" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="23" cy="23" r={r} fill="none" stroke="#e8e6ff" strokeWidth="4" />
        <circle cx="23" cy="23" r={r} fill="none" stroke={stroke} strokeWidth="4"
          strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.9s linear, stroke 0.3s" }} />
      </svg>
      <div style={{
        position: "absolute", inset: 0, display: "flex", alignItems: "center",
        justifyContent: "center", fontFamily: "'Baloo 2',cursive", fontWeight: 800,
        fontSize: 15, color: stroke,
      }}>{value}</div>
    </div>
  );
}

function Hearts({ lives }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: MAX_LIVES }).map((_, i) => (
        <span key={i} style={{ fontSize: 16, opacity: i < lives ? 1 : 0.2, transition: "opacity 0.3s" }}>❤️</span>
      ))}
    </div>
  );
}

// ── CSS ───────────────────────────────────────────────────────────────────────
const css = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Nunito:wght@400;600;700;800&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Nunito',sans-serif;background:#0f0e17;min-height:100vh;display:flex;align-items:center;justify-content:center}
.app{width:100%;max-width:460px;min-height:100svh;background:#f8f7ff;display:flex;flex-direction:column;position:relative;overflow:hidden}

/* HEADER */
.hdr{background:linear-gradient(135deg,#0f0e17,#1a1a2e);padding:13px 16px 11px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;gap:8px}
.hdr-title{font-family:'Baloo 2',cursive;font-size:19px;font-weight:800;color:#fff;white-space:nowrap}
.hdr-title span{color:#FFD93D}
.hdr-right{display:flex;align-items:center;gap:7px}
.score-pill{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);border-radius:20px;padding:3px 11px;font-family:'Baloo 2',cursive;font-weight:700;font-size:12px;color:#FFD93D;white-space:nowrap}
.profile-btn{display:flex;align-items:center;gap:5px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);border-radius:20px;padding:3px 10px 3px 5px;cursor:pointer;transition:background .15s}
.profile-btn:hover{background:rgba(255,255,255,.2)}
.pb-av{font-size:16px;line-height:1}
.pb-name{font-family:'Baloo 2',cursive;font-weight:700;font-size:12px;max-width:65px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

/* SCROLLABLE SCREEN */
.screen{flex:1;display:flex;flex-direction:column;padding:18px 16px 28px;gap:14px;overflow-y:auto}

/* BACK BTN */
.back{display:flex;align-items:center;gap:5px;background:none;border:none;font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;color:#888;cursor:pointer;padding:0;width:fit-content;transition:color .15s}
.back:hover{color:#333}

/* SECTION TITLE */
.stitle{font-family:'Baloo 2',cursive;font-size:19px;font-weight:800;color:#1a1a2e;display:flex;align-items:center;gap:8px}
.slabel{font-family:'Baloo 2',cursive;font-size:11px;font-weight:700;color:#bbb;text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px}

/* PROFILE */
.av-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:7px}
.av-opt{font-size:26px;width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:11px;border:2.5px solid #eeecff;cursor:pointer;transition:all .15s;background:white}
.av-opt:hover{transform:scale(1.08)}
.av-opt.sel{border-color:var(--sc);background:var(--sc-bg);transform:scale(1.1)}
.name-input{border:2.5px solid #e4e2f5;border-radius:12px;padding:11px 14px;font-family:'Nunito',sans-serif;font-weight:700;font-size:14px;color:#1a1a2e;outline:none;transition:border-color .15s;background:white;width:100%}
.name-input:focus{border-color:var(--sc)}
.profile-list{display:flex;flex-direction:column;gap:9px}
.prow{background:white;border-radius:14px;padding:13px 14px;display:flex;align-items:center;gap:11px;cursor:pointer;border:2.5px solid #eeecff;box-shadow:0 2px 7px rgba(0,0,0,.05);transition:all .15s}
.prow:hover{border-color:var(--sc);transform:translateX(3px)}
.prow.active{border-color:var(--sc);background:var(--sc-bg)}
.prow-av{font-size:30px;width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:50%;flex-shrink:0}
.prow-name{font-family:'Baloo 2',cursive;font-weight:800;font-size:15px}
.prow-stats{font-size:11px;font-weight:600;color:#aaa}
.add-btn{background:white;border:2.5px dashed #ccc;border-radius:14px;padding:14px;display:flex;align-items:center;justify-content:center;gap:7px;cursor:pointer;font-family:'Baloo 2',cursive;font-weight:700;font-size:14px;color:#aaa;transition:all .15s}
.add-btn:hover{border-color:var(--sc);color:var(--sc)}

/* TAG FILTER SCREEN */
.tag-welcome{display:flex;align-items:center;gap:11px}
.tw-av{font-size:34px;width:48px;height:48px;display:flex;align-items:center;justify-content:center;border-radius:50%;flex-shrink:0}
.tw-name{font-family:'Baloo 2',cursive;font-size:17px;font-weight:800}
.tw-sub{font-size:12px;font-weight:600;color:#aaa}
.filter-head{display:flex;align-items:center;justify-content:space-between;gap:10px}
.filter-actions{display:flex;align-items:center;gap:8px;flex-shrink:0}
.filter-count{font-size:11px;font-weight:800;color:#aaa;background:white;border:2px solid #eeecff;border-radius:999px;padding:4px 8px;white-space:nowrap}
.level-guide{display:grid;grid-template-columns:repeat(5,1fr);gap:5px}
.level-guide span{background:white;border:2px solid #eeecff;border-radius:10px;padding:6px 4px;text-align:center;font-size:10px;font-weight:800;color:#6b6685;white-space:nowrap}
.path-panel{display:flex;flex-direction:column;gap:8px;background:#fff;border:2px solid #e8e6ff;border-radius:14px;padding:11px 12px;box-shadow:0 2px 7px rgba(0,0,0,.04)}
.path-row{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}
.path-chip{border:2px solid #eeecff;background:#f8f7ff;border-radius:11px;padding:8px 9px;text-align:left;cursor:pointer;display:flex;flex-direction:column;gap:1px;min-width:0;transition:all .15s}
.path-chip span{font-family:'Baloo 2',cursive;font-size:13px;font-weight:800;color:#1a1a2e;line-height:1.1}
.path-chip small{font-size:10px;font-weight:700;color:#8e88a8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.path-chip.active,.path-chip:hover{border-color:var(--sc);background:#fff}
.tag-group{display:flex;flex-direction:column;gap:8px;background:white;border:2px solid #eeecff;border-radius:14px;padding:11px 12px;box-shadow:0 2px 7px rgba(0,0,0,.04)}
.tag-group-head{display:flex;align-items:center;justify-content:space-between;gap:8px}
.tag-group-count{font-size:10px;font-weight:800;color:#b7b3c7;background:#f8f7ff;border-radius:999px;padding:2px 7px;white-space:nowrap}
.tag-row{display:flex;flex-wrap:wrap;gap:6px}
.tag-empty{background:white;border:2px dashed #e4e2f5;border-radius:14px;padding:14px;color:#aaa;font-size:12px;font-weight:700;text-align:center}
.q-counter-bar{background:white;border-radius:14px;padding:12px 16px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 8px rgba(0,0,0,.06);position:sticky;bottom:0;z-index:10}
.qc-info{display:flex;flex-direction:column;gap:2px}
.qc-num{font-family:'Baloo 2',cursive;font-size:22px;font-weight:800;line-height:1}
.qc-label{font-size:11px;font-weight:600;color:#aaa}
.start-btn{background:var(--sc);color:white;border:none;border-radius:12px;padding:12px 20px;font-family:'Baloo 2',cursive;font-weight:800;font-size:15px;cursor:pointer;box-shadow:0 3px 12px rgba(0,0,0,.13);transition:transform .1s,opacity .1s}
.start-btn:disabled{opacity:.35;cursor:not-allowed}
.start-btn:not(:disabled):active{transform:scale(.97)}
.clear-btn{background:none;border:none;font-size:12px;font-weight:700;color:#aaa;cursor:pointer;padding:0;transition:color .15s}
.clear-btn:hover{color:#f43f5e}

/* MODE PICKER */
.mode-cards{display:grid;grid-template-columns:1fr 1fr;gap:9px}
.mcard{background:white;border-radius:13px;padding:14px 10px;display:flex;flex-direction:column;align-items:center;gap:5px;cursor:pointer;border:2.5px solid #eeecff;box-shadow:0 2px 7px rgba(0,0,0,.04);transition:all .15s;text-align:center}
.mcard:hover{border-color:var(--sc);transform:translateY(-2px)}
.mcard.survival:hover{border-color:#f43f5e}
.mcard.revision:hover{border-color:#7c3aed}
.mcard.disabled{opacity:.35;cursor:not-allowed;pointer-events:none}
.mcard:active{transform:scale(.96)}
.mcard-icon{font-size:26px}
.mcard-name{font-family:'Baloo 2',cursive;font-weight:800;font-size:13px;color:#1a1a2e}
.mcard-desc{font-size:10px;font-weight:600;color:#aaa;line-height:1.3}
.mcard-full{grid-column:1/-1}

/* SCORES TABLE */
.score-box{background:white;border-radius:13px;padding:12px 14px;box-shadow:0 2px 7px rgba(0,0,0,.05)}
.score-box h3{font-family:'Baloo 2',cursive;font-size:12px;font-weight:800;color:#aaa;margin-bottom:7px}
.srow{display:flex;justify-content:space-between;align-items:center;padding:4px 0;border-bottom:1px solid #f5f3ff;font-size:12px;font-weight:700;color:#555}
.srow:last-child{border-bottom:none}
.sbest{font-family:'Baloo 2',cursive;font-weight:800;color:var(--sc)}

/* QUIZ */
.quiz{flex:1;display:flex;flex-direction:column;padding:12px 14px 20px;gap:11px;overflow-y:auto}
.prog-wrap{background:#e8e6ff;border-radius:10px;height:6px;overflow:hidden}
.prog-fill{height:100%;border-radius:10px;background:var(--sc);transition:width .4s cubic-bezier(.4,0,.2,1)}
.quiz-meta{display:flex;align-items:center;justify-content:space-between;gap:6px}
.quiz-badge{display:flex;align-items:center;gap:4px;background:var(--sc-bg);border:2px solid var(--sc);border-radius:20px;padding:3px 9px 3px 7px;font-family:'Baloo 2',cursive;font-weight:700;font-size:11px;color:var(--sc);max-width:180px;overflow:hidden}
.badge-tags{display:flex;gap:3px;overflow:hidden;flex-wrap:nowrap}
.qcount{font-weight:700;font-size:12px;color:#999;white-space:nowrap}
.sv-bar{background:linear-gradient(135deg,#1a1a2e,#2d1b4e);border-radius:12px;padding:9px 13px;display:flex;align-items:center;justify-content:space-between}
.rv-bar{background:linear-gradient(135deg,#4c1d95,#6d28d9);border-radius:12px;padding:9px 13px;display:flex;align-items:center;justify-content:space-between}
.sv-pts{font-family:'Baloo 2',cursive;font-weight:800;font-size:13px;color:#FFD93D}
.timer-row{display:flex;align-items:flex-start;gap:10px}
.qcard{flex:1;background:white;border-radius:17px;padding:14px 13px;box-shadow:0 4px 16px rgba(0,0,0,.07);border-top:5px solid var(--sc)}
.qcard-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:7px}
.qlabel{font-size:10px;font-weight:700;color:#ccc;text-transform:uppercase;letter-spacing:.5px}
.qtext{font-family:'Baloo 2',cursive;font-size:16px;font-weight:700;color:#1a1a2e;line-height:1.35}
.qvisual{width:100%;max-width:190px;margin:9px auto 0;background:#f8fafc;border:2px solid #e4e2f5;border-radius:13px;padding:8px;display:flex;align-items:center;justify-content:center}
.qvisual-wide{max-width:260px}
.qvisual-flag{max-width:160px;min-height:92px;background:#fff}
.flag-emoji{font-size:66px;line-height:1}
.qvisual svg{width:100%;height:auto;display:block}
.choices{display:flex;flex-direction:column;gap:7px}
.choice{background:white;border:2.5px solid #e4e2f5;border-radius:11px;padding:9px 13px;display:flex;align-items:center;gap:8px;cursor:pointer;font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;color:#2d2d2d;transition:all .12s;box-shadow:0 2px 5px rgba(0,0,0,.03);text-align:left}
.cl{width:25px;height:25px;border-radius:50%;background:#f0eeff;display:flex;align-items:center;justify-content:center;font-family:'Baloo 2',cursive;font-weight:800;font-size:11px;color:#999;flex-shrink:0;transition:all .12s}
.choice:hover:not(:disabled){border-color:var(--sc);transform:translateX(3px)}
.choice:hover:not(:disabled) .cl{background:var(--sc);color:white}
.choice.correct{background:#f0fff4;border-color:#22c55e;color:#166534}
.choice.correct .cl{background:#22c55e;color:white}
.choice.wrong{background:#fff1f2;border-color:#f43f5e;color:#9f1239}
.choice.wrong .cl{background:#f43f5e;color:white}
.choice:disabled{cursor:default;transform:none!important}
.feedback{border-radius:11px;padding:10px 13px;font-size:13px;display:flex;flex-direction:column;gap:5px;animation:pop .22s cubic-bezier(.4,0,.2,1)}
.feedback.ok{background:#dcfce7;color:#166534}
.feedback.nok{background:#ffe4e6;color:#9f1239}
.fb-main{display:flex;align-items:center;gap:7px;font-family:'Baloo 2',cursive;font-size:14px;font-weight:800}
.fb-exp{font-size:12px;font-weight:600;line-height:1.45;padding-top:4px;border-top:1px solid rgba(0,0,0,.07)}
@keyframes pop{from{transform:scale(.92);opacity:0}to{transform:scale(1);opacity:1}}
.next-btn{background:var(--sc);color:white;border:none;border-radius:11px;padding:11px;font-family:'Baloo 2',cursive;font-weight:800;font-size:14px;cursor:pointer;width:100%;box-shadow:0 3px 11px rgba(0,0,0,.11);transition:transform .1s}
.next-btn:active{transform:scale(.97)}

/* RESULTS */
.results{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:22px 18px;gap:13px;text-align:center}
.res-emoji{font-size:58px;animation:bounce .6s ease}
@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-13px)}}
.res-title{font-family:'Baloo 2',cursive;font-size:22px;font-weight:800;color:#1a1a2e}
.res-score{font-family:'Baloo 2',cursive;font-size:46px;font-weight:800;color:var(--sc);line-height:1}
.res-score span{font-size:20px;color:#aaa}
.stars{font-size:28px;letter-spacing:4px}
.star{display:inline-block;animation:sPop .4s ease forwards;opacity:0}
.star:nth-child(1){animation-delay:.1s}.star:nth-child(2){animation-delay:.25s}.star:nth-child(3){animation-delay:.4s}
@keyframes sPop{0%{transform:scale(0) rotate(-20deg);opacity:0}70%{transform:scale(1.3) rotate(5deg);opacity:1}100%{transform:scale(1) rotate(0);opacity:1}}
.res-sub{font-size:13px;color:#666;font-weight:600;max-width:260px}
.res-tags{display:flex;flex-wrap:wrap;gap:5px;justify-content:center}
.missed-box{width:100%;background:white;border-radius:12px;padding:11px 13px;box-shadow:0 2px 7px rgba(0,0,0,.05)}
.missed-box h3{font-family:'Baloo 2',cursive;font-size:12px;font-weight:800;color:#7c3aed;margin-bottom:7px}
.mi{font-size:12px;font-weight:600;color:#555;padding:5px 0;border-bottom:1px solid #f5f3ff;line-height:1.4}
.mi:last-child{border-bottom:none}
.mi-q{color:#1a1a2e;font-weight:700}
.mi-a{color:#22c55e}
.res-actions{display:flex;flex-direction:column;gap:8px;width:100%}
.btn-p{background:var(--sc);color:white;border:none;border-radius:11px;padding:12px;font-family:'Baloo 2',cursive;font-weight:800;font-size:14px;cursor:pointer;box-shadow:0 3px 11px rgba(0,0,0,.11);transition:transform .1s}
.btn-p:active{transform:scale(.97)}
.btn-s{background:white;color:#1a1a2e;border:2.5px solid #e4e2f5;border-radius:11px;padding:10px;font-family:'Baloo 2',cursive;font-weight:800;font-size:14px;cursor:pointer;transition:border-color .15s,transform .1s}
.btn-s:hover{border-color:var(--sc)}
.btn-s:active{transform:scale(.97)}

/* DEAD */
.dead{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:22px 18px;gap:13px;text-align:center;background:linear-gradient(180deg,#f8f7ff,#fff1f2)}
@keyframes shake{0%,100%{transform:rotate(0)}25%{transform:rotate(-8deg)}75%{transform:rotate(8deg)}}

/* BLOB */
.blob{position:absolute;border-radius:50%;opacity:.05;pointer-events:none}

/* ACTIVE TAGS STRIP */
.active-strip{display:flex;gap:5px;flex-wrap:wrap}
`;

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  // ── Profiles ──
  const [profiles, setProfiles] = useState(() => load(LS_PROFILES, []));
  const [activeId, setActiveId] = useState(() => load(LS_ACTIVE, null));
  const [newName, setNewName]   = useState("");
  const [newAv, setNewAv]       = useState(0);

  // ── Navigation ──
  // screens: create_profile | profiles | filter | mode | quiz | results | dead
  const [screen, setScreen] = useState(() => {
    const profs = load(LS_PROFILES, []);
    return profs.length === 0 ? "create_profile" : "filter";
  });

  // ── Tag filter ──
  const [selectedTags, setSelectedTags] = useState([]);

  // ── Quiz ──
  const [mode, setMode]         = useState("normal");
  const [deck, setDeck]         = useState([]);
  const [qIndex, setQIndex]     = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore]       = useState(0);
  const [timer, setTimer]       = useState(TIMER_MAX);
  const [lives, setLives]       = useState(MAX_LIVES);
  const [streak, setStreak]     = useState(0);
  const [missedQs, setMissedQs] = useState([]);
  const [lastMissed, setLastMissed] = useState([]);
  const [reviewBank, setReviewBank] = useState(() => load(LS_REVIEW, []));
  const [totalScore, setTotalScore] = useState(0);

  // ── Derived ──
  const activeProfile = profiles.find(p => p.id === activeId) || profiles[0] || null;
  const profileColor  = activeProfile?.color || "#6366f1";
  const profileScores = activeProfile ? loadScores(activeProfile.id) : {};

  const filteredQs = useMemo(() => filterQuestions(selectedTags), [selectedTags]);
  const currentQ   = deck[qIndex];
  const timerMax   = mode === "survival" ? getSurvivalTimer(qIndex) : TIMER_MAX;

  // Active tag objects for display
  const activeTagObjs = selectedTags.map(t => TAG_MAP[t]).filter(Boolean);

  // Primary color: use first selected tag's color, or profileColor
  const primaryColor = activeTagObjs[0]?.color || profileColor;
  const primaryBg    = activeTagObjs[0]?.bg    || (profileColor + "22");
  const cssVars = { "--sc": primaryColor, "--sc-bg": primaryBg };

  // ── Timer ──
  useEffect(() => {
    if (screen !== "quiz" || selected !== null) return;
    if (timer <= 0) { setSelected(-1); return; }
    const t = setTimeout(() => setTimer(v => v - 1), 1000);
    return () => clearTimeout(t);
  }, [screen, selected, timer]);

  // ── Create profile ──
  const handleCreate = () => {
    if (!newName.trim()) return;
    const p = { id: Date.now().toString(), name: newName.trim(),
      avatar: AVATARS[newAv], color: AVATAR_COLORS[newAv], created: Date.now() };
    const updated = [...profiles, p];
    setProfiles(updated); store(LS_PROFILES, updated);
    setActiveId(p.id); store(LS_ACTIVE, p.id);
    setNewName(""); setNewAv(0);
    setScreen("filter");
  };

  const handleSelectProfile = (id) => {
    setActiveId(id); store(LS_ACTIVE, id); setScreen("filter");
  };
  const handleDeleteProfile = (id, e) => {
    e.stopPropagation();
    if (!window.confirm("Supprimer ce profil ?")) return;
    const updated = profiles.filter(p => p.id !== id);
    setProfiles(updated); store(LS_PROFILES, updated);
    if (activeId === id) {
      const next = updated[0]?.id || null;
      setActiveId(next); store(LS_ACTIVE, next || "");
      if (!next) setScreen("create_profile");
    }
  };

  // ── Tag toggle ──
  const toggleTag = useCallback((id) => {
    setSelectedTags(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  }, []);

  // ── Start quiz ──
  const startQuiz = useCallback((m, revDeck) => {
    const base = filteredQs.length > 0 ? filteredQs : ALL_QUESTIONS;
    let d;
    if (m === "survival")        d = buildSurvivalDeck(base);
    else if (m === "revision")   d = buildRevisionDeck(revDeck || buildSmartRevisionDeck(lastMissed, reviewBank, base));
    else                         d = buildNormalDeck(base);
    setMode(m); setDeck(d);
    setQIndex(0); setSelected(null); setScore(0);
    setLives(MAX_LIVES); setStreak(0); setMissedQs([]);
    setTimer(m === "survival" ? getSurvivalTimer(0) : TIMER_MAX);
    setScreen("quiz");
  }, [filteredQs, lastMissed, reviewBank]);

  const addToReviewBank = useCallback((questions) => {
    if (!questions?.length) return;
    setReviewBank(prev => {
      const byKey = new Map(prev.map(q => [q.id || q.q, q]));
      for (const question of questions) byKey.set(question.id || question.q, question);
      const next = [...byKey.values()].slice(-40);
      store(LS_REVIEW, next);
      return next;
    });
  }, []);

  // ── Answer ──
  const handleChoice = useCallback((idx) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === currentQ.answer;
    if (correct) { setScore(s => s + 1); setStreak(s => s + 1); }
    else {
      setStreak(0);
      setMissedQs(prev => [...prev, currentQ]);
      addToReviewBank([currentQ]);
      if (mode === "survival") setLives(l => l - 1);
    }
  }, [selected, currentQ, mode, addToReviewBank]);

  // ── Next ──
  const handleNext = useCallback(() => {
    const timedOut = selected === -1;
    const nextLives = mode === "survival" && timedOut ? lives - 1 : lives;
    const nextMissedQs = timedOut ? [...missedQs, currentQ] : missedQs;
    if (timedOut) {
      setMissedQs(nextMissedQs);
      addToReviewBank([currentQ]);
      setStreak(0);
      if (mode === "survival") setLives(nextLives);
    }

    // Survival: game over
    if (mode === "survival" && nextLives <= 0) {
      if (activeProfile) saveScore(activeProfile.id, tagKey(selectedTags), "survival", score, qIndex + 1);
      setLastMissed(nextMissedQs); setTotalScore(ts => ts + score); setScreen("dead"); return;
    }
    const next = qIndex + 1;
    // Finished
    if (mode !== "survival" && next >= deck.length) {
      if (activeProfile) saveScore(activeProfile.id, tagKey(selectedTags), mode, score, deck.length);
      setLastMissed(nextMissedQs); setTotalScore(ts => ts + score); setScreen("results"); return;
    }
    // Survival victory (20 pts)
    if (mode === "survival" && score >= 20) {
      if (activeProfile) saveScore(activeProfile.id, tagKey(selectedTags), "survival", score, next);
      setLastMissed(nextMissedQs); setTotalScore(ts => ts + score); setScreen("results"); return;
    }
    setQIndex(next); setSelected(null);
    setTimer(mode === "survival" ? getSurvivalTimer(next) : TIMER_MAX);
  }, [qIndex, deck.length, selected, currentQ, score, lives, mode, activeProfile, selectedTags, missedQs]);

  // ── Tag groups ──
  const groups = useMemo(() => tagsByCategory(), []);

  // ── Per-tag question counts (filtered by currently selected tags minus this one) ──
  const tagCounts = useMemo(() => {
    const counts = {};
    for (const tag of TAGS) {
      if (selectedTags.includes(tag.id)) {
        // If already selected, show how many Q with ALL current selected tags
        counts[tag.id] = filterQuestions(selectedTags).length;
      } else {
        // Show how many Q would remain if we also added this tag
        counts[tag.id] = filterQuestions([...selectedTags, tag.id]).length;
      }
    }
    return counts;
  }, [selectedTags]);

  const visibleGroups = useMemo(() => {
    return Object.entries(groups)
      .map(([cat, tags]) => [
        cat,
        tags.filter(t => selectedTags.includes(t.id) || tagCounts[t.id] > 0),
      ])
      .filter(([, tags]) => tags.length > 0);
  }, [groups, selectedTags, tagCounts]);

  // ── Score key for current selection ──
  const currentScoreKey = tagKey(selectedTags);
  const modeScores = {
    normal:   profileScores[`${currentScoreKey}__normal`],
    survival: profileScores[`${currentScoreKey}__survival`],
    revision: profileScores[`${currentScoreKey}__revision`],
  };

  // ── Compact tag display for quiz badge ──
  const badgeTags = activeTagObjs.slice(0, 3);

  return (
    <>
      <style>{css}</style>
      <div className="app" style={cssVars}>
        <div className="blob" style={{ width: 200, height: 200, background: primaryColor, top: -60, right: -60 }} />
        <div className="blob" style={{ width: 140, height: 140, background: primaryColor, bottom: 70, left: -50 }} />

        {/* HEADER */}
        <header className="hdr">
          <div className="hdr-title">Quiz<span>CM</span> 🎓</div>
          <div className="hdr-right">
            <div className="score-pill">⭐ {totalScore}</div>
            {activeProfile && (
              <div className="profile-btn" style={{ "--sc": profileColor }}
                onClick={() => setScreen("profiles")}>
                <div className="pb-av">{activeProfile.avatar}</div>
                <div className="pb-name" style={{ color: profileColor }}>{activeProfile.name}</div>
              </div>
            )}
          </div>
        </header>

        {/* ── CREATE PROFILE ── */}
        {screen === "create_profile" && (
          <div className="screen" style={{ "--sc": AVATAR_COLORS[newAv], "--sc-bg": AVATAR_COLORS[newAv] + "22" }}>
            {profiles.length > 0 && <button className="back" onClick={() => setScreen("profiles")}>← Retour</button>}
            <div className="stitle">{profiles.length === 0 ? "Bienvenue ! 👋" : "Nouveau profil"}</div>
            <div>
              <div className="slabel">Choisis ton avatar</div>
              <div className="av-grid">
                {AVATARS.map((av, i) => (
                  <div key={i}
                    className={`av-opt ${newAv === i ? "sel" : ""}`}
                    style={{ "--sc": AVATAR_COLORS[i], "--sc-bg": AVATAR_COLORS[i] + "22" }}
                    onClick={() => setNewAv(i)}>{av}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="slabel" style={{ marginBottom: 6 }}>Ton prénom</div>
              <input className="name-input" placeholder="Ex : Emma, Lucas…"
                value={newName} maxLength={16}
                onChange={e => setNewName(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleCreate()} />
            </div>
            {newName.trim() && (
              <div style={{ display: "flex", alignItems: "center", gap: 11, background: "white",
                borderRadius: 13, padding: "11px 14px", boxShadow: "0 2px 7px rgba(0,0,0,.06)" }}>
                <div style={{ fontSize: 34, width: 48, height: 48, display: "flex", alignItems: "center",
                  justifyContent: "center", borderRadius: "50%",
                  background: AVATAR_COLORS[newAv] + "22", border: `3px solid ${AVATAR_COLORS[newAv]}` }}>
                  {AVATARS[newAv]}
                </div>
                <div style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 800, fontSize: 17,
                  color: AVATAR_COLORS[newAv] }}>{newName.trim()}</div>
              </div>
            )}
            <button className="start-btn" disabled={!newName.trim()} onClick={handleCreate}>
              Créer mon profil 🚀
            </button>
          </div>
        )}

        {/* ── PROFILES ── */}
        {screen === "profiles" && (
          <div className="screen" style={{ "--sc": profileColor, "--sc-bg": profileColor + "22" }}>
            <button className="back" onClick={() => setScreen("filter")}>← Retour</button>
            <div className="stitle">Changer de joueur</div>
            <div className="profile-list">
              {profiles.map(p => {
                const ps = loadScores(p.id);
                const plays = Object.values(ps).reduce((a, v) => a + v.plays, 0);
                return (
                  <div key={p.id}
                    className={`prow ${p.id === activeId ? "active" : ""}`}
                    style={{ "--sc": p.color, "--sc-bg": p.color + "22" }}
                    onClick={() => handleSelectProfile(p.id)}>
                    <div className="prow-av" style={{ background: p.color + "22" }}>{p.avatar}</div>
                    <div style={{ flex: 1 }}>
                      <div className="prow-name" style={{ color: p.id === activeId ? p.color : "#1a1a2e" }}>{p.name}</div>
                      <div className="prow-stats">{plays} partie{plays !== 1 ? "s" : ""}</div>
                    </div>
                    {p.id === activeId && <span style={{ fontSize: 18 }}>✓</span>}
                    {profiles.length > 1 && (
                      <span onClick={e => handleDeleteProfile(p.id, e)}
                        style={{ fontSize: 15, color: "#ddd", cursor: "pointer", transition: "color .15s" }}
                        onMouseEnter={e => e.target.style.color = "#f43f5e"}
                        onMouseLeave={e => e.target.style.color = "#ddd"}>🗑️</span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="add-btn" style={{ "--sc": profileColor }}
              onClick={() => setScreen("create_profile")}>
              <span>➕</span> Ajouter un joueur
            </div>
          </div>
        )}

        {/* ── TAG FILTER ── */}
        {screen === "filter" && (
          <div className="screen">
            {/* Welcome */}
            {activeProfile && (
              <div className="tag-welcome">
                <div className="tw-av"
                  style={{ background: profileColor + "22", border: `3px solid ${profileColor}` }}>
                  {activeProfile.avatar}
                </div>
                <div>
                  <div className="tw-name" style={{ color: profileColor }}>Bonjour {activeProfile.name} !</div>
                  <div className="tw-sub">Sélectionne des tags pour filtrer</div>
                </div>
              </div>
            )}

            <div className="filter-head">
              <div className="stitle">Filtres</div>
              <div className="filter-actions">
                <span className="filter-count">{selectedTags.length} actif{selectedTags.length > 1 ? "s" : ""}</span>
                {selectedTags.length > 0 && (
                  <button className="clear-btn" onClick={() => setSelectedTags([])}>Tout effacer</button>
                )}
              </div>
            </div>

            <div className="level-guide">
              <span>1 CP-CE2</span>
              <span>2 CM1-CM2</span>
              <span>3 6e-5e</span>
              <span>4 4e-3e</span>
              <span>5 Lycée</span>
            </div>

            <div className="path-panel">
              <div className="tag-group-head">
                <div className="slabel">Parcours rapides</div>
                <div className="tag-group-count">{LEARNING_PATHS.length}</div>
              </div>
              <div className="path-row">
                {LEARNING_PATHS.map(path => {
                  const active = path.tags.every(tag => selectedTags.includes(tag));
                  return (
                    <button key={path.id}
                      className={`path-chip ${active ? "active" : ""}`}
                      onClick={() => setSelectedTags(path.tags)}>
                      <span>{path.name}</span>
                      <small>{path.desc}</small>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tag groups */}
            {visibleGroups.length > 0 ? (
              visibleGroups.map(([cat, tags]) => (
                <div key={cat} className="tag-group">
                  <div className="tag-group-head">
                    <div className="slabel">{CATEGORY_LABELS[cat]}</div>
                    <div className="tag-group-count">{tags.length}</div>
                  </div>
                  <div className="tag-row">
                    {tags.map(t => (
                      <TagPill
                        key={t.id} tag={t}
                        selected={selectedTags.includes(t.id)}
                        count={tagCounts[t.id]}
                        onClick={() => toggleTag(t.id)}
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="tag-empty">
                Aucun tag compatible avec cette sélection.
              </div>
            )}

            {/* Sticky bottom bar */}
            <div className="q-counter-bar" style={{ "--sc": primaryColor }}>
              <div className="qc-info">
                <div className="qc-num" style={{ color: primaryColor }}>{filteredQs.length}</div>
                <div className="qc-label">
                  question{filteredQs.length !== 1 ? "s" : ""}
                  {selectedTags.length > 0
                    ? <> · <button className="clear-btn" onClick={() => setSelectedTags([])}>Tout effacer</button></>
                    : " (toutes)"}
                </div>
              </div>
              <button
                className="start-btn"
                disabled={filteredQs.length < MIN_Q}
                onClick={() => setScreen("mode")}>
                Choisir le mode →
              </button>
            </div>
          </div>
        )}

        {/* ── MODE PICKER ── */}
        {screen === "mode" && (
          <div className="screen">
            <button className="back" onClick={() => setScreen("filter")}>← Retour</button>
            <div className="stitle">Choisis un mode</div>

            {/* Active tags summary */}
            {activeTagObjs.length > 0 && (
              <div>
                <div className="slabel">Sélection active</div>
                <div className="active-strip">
                  {activeTagObjs.map(t => <TagPill key={t.id} tag={t} selected small />)}
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#aaa", alignSelf: "center" }}>
                    · {filteredQs.length} questions
                  </span>
                </div>
              </div>
            )}

            <div className="mode-cards">
              <div className="mcard" onClick={() => startQuiz("normal")}>
                <div className="mcard-icon">📚</div>
                <div className="mcard-name">Normal</div>
                <div className="mcard-desc">Toutes les questions · Pas de limite</div>
              </div>
              <div className="mcard survival" onClick={() => startQuiz("survival")}>
                <div className="mcard-icon">⚔️</div>
                <div className="mcard-name">Survie</div>
                <div className="mcard-desc">3 vies · Difficulté croissante</div>
              </div>
              <div className={`mcard revision mcard-full ${lastMissed.length === 0 && reviewBank.length === 0 ? "disabled" : ""}`}
                onClick={() => (lastMissed.length > 0 || reviewBank.length > 0) && startQuiz("revision")}>
                <div className="mcard-icon">📖</div>
                <div className="mcard-name">Révision</div>
                <div className="mcard-desc">
                  {lastMissed.length === 0 && reviewBank.length === 0
                    ? "Fais d'abord une partie pour débloquer"
                    : `Erreurs + questions du même thème`}
                </div>
              </div>
            </div>

            {/* Records */}
            {(modeScores.normal || modeScores.survival || modeScores.revision) && (
              <div className="score-box">
                <h3>🏅 Tes records pour cette sélection</h3>
                {modeScores.normal   && <div className="srow"><span>📚 Normal</span><span className="sbest">{modeScores.normal.best}/{modeScores.normal.total} · {modeScores.normal.plays} partie{modeScores.normal.plays > 1 ? "s" : ""}</span></div>}
                {modeScores.survival && <div className="srow"><span>⚔️ Survie</span><span className="sbest">{modeScores.survival.best} pts · {modeScores.survival.plays} partie{modeScores.survival.plays > 1 ? "s" : ""}</span></div>}
                {modeScores.revision && <div className="srow"><span>📖 Révision</span><span className="sbest">{modeScores.revision.best}/{modeScores.revision.total}</span></div>}
              </div>
            )}
          </div>
        )}

        {/* ── QUIZ ── */}
        {screen === "quiz" && currentQ && (
          <div className="quiz">
            {mode === "normal" && (
              <div className="prog-wrap">
                <div className="prog-fill" style={{ width: `${(qIndex / deck.length) * 100}%` }} />
              </div>
            )}
            {mode === "survival" && (
              <div className="sv-bar">
                <Hearts lives={lives} />
                <div style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 800, fontSize: 13, color: "white", display: "flex", alignItems: "center", gap: 4 }}>
                  🔥 <span style={{ color: "#FFD93D" }}>{streak}</span>
                </div>
                <div className="sv-pts">{score} pts</div>
              </div>
            )}
            {mode === "revision" && (
              <div className="rv-bar">
                <span style={{ fontSize: 12, fontWeight: 700, color: "#c4b5fd" }}>📖 Révision</span>
                <span style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 800, fontSize: 13, color: "#FFD93D" }}>
                  {qIndex + 1}/{deck.length}
                </span>
                <span style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 800, fontSize: 13, color: "#86efac" }}>{score} ✓</span>
              </div>
            )}

            <div className="quiz-meta">
              <div className="quiz-badge">
                <div className="badge-tags">
                  {badgeTags.length > 0
                    ? badgeTags.map(t => (
                        <span key={t.id} style={{ fontSize: 10, fontWeight: 700, color: t.color,
                          background: t.bg, borderRadius: 8, padding: "1px 6px" }}>{t.label}</span>
                      ))
                    : <span style={{ fontSize: 11, fontWeight: 700 }}>Toutes</span>
                  }
                </div>
              </div>
              <div className="qcount">{mode === "normal" ? `${qIndex + 1}/${deck.length}` : `Q${qIndex + 1}`}</div>
            </div>

            <div className="timer-row">
              <TimerRing value={timer} max={timerMax} color={primaryColor} />
              <div className="qcard">
                <div className="qcard-head">
                  <div className="qlabel">
                    {mode === "survival"
                      ? difficultyName(currentQ.difficulty)
                      : mode === "revision" ? "À réviser" : difficultyName(currentQ.difficulty)}
                  </div>
                  <DiffBadge d={currentQ.difficulty} />
                </div>
                <div className="qtext">{currentQ.q}</div>
                <QuestionVisual visual={currentQ.visual} />
              </div>
            </div>

            <div className="choices">
              {currentQ.choices.map((c, i) => {
                let cls = "choice";
                if (selected !== null) {
                  if (i === currentQ.answer) cls += " correct";
                  else if (i === selected) cls += " wrong";
                }
                return (
                  <button key={i} className={cls}
                    onClick={() => handleChoice(i)} disabled={selected !== null}>
                    <span className="cl">{LETTERS[i]}</span>{c}
                  </button>
                );
              })}
            </div>

            {selected !== null && (
              <>
                <div className={`feedback ${selected === currentQ.answer ? "ok" : "nok"}`}>
                  <div className="fb-main">
                    {selected === currentQ.answer
                      ? <><span>✅</span> Bonne réponse !</>
                      : selected === -1
                        ? <><span>⏰</span> Temps écoulé ! Réponse : {currentQ.choices[currentQ.answer]}</>
                        : <><span>❌</span> Dommage ! C'était : {currentQ.choices[currentQ.answer]}</>}
                  </div>
                  {currentQ.explanation && (
                    <div className="fb-exp">💡 {currentQ.explanation}</div>
                  )}
                </div>
                <button className="next-btn" onClick={handleNext}>
                  {mode !== "survival" && qIndex + 1 >= deck.length
                    ? "Voir mes résultats →" : "Question suivante →"}
                </button>
              </>
            )}
          </div>
        )}

        {/* ── RESULTS ── */}
        {screen === "results" && (
          <div className="results">
            <div className="res-emoji">{mode === "survival" ? "🏆" : resultEmoji(score, deck.length)}</div>
            <div className="res-title">{mode === "survival" ? "Incroyable !" : resultTitle(score, deck.length)}</div>
            <div className="res-score">{score}{mode !== "survival" && <span>/{deck.length}</span>}</div>
            {mode !== "survival" && (
              <div className="stars">{getStars(score, deck.length).map((s, i) => <span key={i} className="star">{s}</span>)}</div>
            )}
            {mode === "survival" && (
              <div style={{ fontSize: 12, color: "#888", fontWeight: 700 }}>
                🔥 Série max : {streak} · {qIndex + 1} questions
              </div>
            )}
            <div className="res-tags">
              {activeTagObjs.slice(0, 4).map(t => <TagPill key={t.id} tag={t} selected small />)}
            </div>
            <div className="res-sub">
              {mode === "revision"
                ? score === deck.length ? "Toutes les erreurs corrigées ! 🎓"
                  : `${score}/${deck.length} réponses corrigées`
                : mode === "survival"
                  ? `${qIndex + 1} questions en mode Survie !`
                  : score === deck.length ? "Score parfait 🎓"
                    : `${score} bonne${score > 1 ? "s" : ""} réponse${score > 1 ? "s" : ""} sur ${deck.length}`}
            </div>

            {missedQs.length > 0 && mode !== "revision" && (
              <div className="missed-box">
                <h3>📖 À retravailler ({missedQs.length})</h3>
                {missedQs.slice(0, 4).map((q, i) => (
                  <div key={i} className="mi">
                    <div className="mi-q">{q.q}</div>
                    <div className="mi-a">→ {q.choices[q.answer]}</div>
                  </div>
                ))}
                {missedQs.length > 4 && <div style={{ fontSize: 11, color: "#aaa", marginTop: 3 }}>+ {missedQs.length - 4} autres…</div>}
              </div>
            )}

            <div className="res-actions">
              <button className="btn-p" onClick={() => startQuiz(mode)}>🔄 Rejouer</button>
              {missedQs.length > 0 && (
                <button className="btn-p" style={{ background: "#7c3aed" }}
                  onClick={() => { setLastMissed(missedQs); startQuiz("revision", missedQs); }}>
                  📖 Réviser mes {missedQs.length} erreur{missedQs.length > 1 ? "s" : ""}
                </button>
              )}
              <button className="btn-s" onClick={() => setScreen("mode")}>🎮 Autre mode</button>
              <button className="btn-s" onClick={() => setScreen("filter")}>🏷️ Changer les tags</button>
            </div>
          </div>
        )}

        {/* ── GAME OVER ── */}
        {screen === "dead" && (
          <div className="dead">
            <div style={{ fontSize: 62, animation: "shake .4s ease" }}>💀</div>
            <div style={{ fontFamily: "'Baloo 2',cursive", fontSize: 23, fontWeight: 800, color: "#9f1239" }}>Game over !</div>
            <div style={{ fontSize: 12, color: "#aaa", fontWeight: 600 }}>Tu as perdu tes 3 vies</div>
            <div className="res-score">{score}<span> pts</span></div>
            <div style={{ fontSize: 12, color: "#aaa", fontWeight: 700 }}>🔥 Série max : {streak} · {qIndex} questions</div>
            {missedQs.length > 0 && (
              <div className="missed-box">
                <h3>📖 À retravailler ({missedQs.length})</h3>
                {missedQs.slice(0, 3).map((q, i) => (
                  <div key={i} className="mi">
                    <div className="mi-q">{q.q}</div>
                    <div className="mi-a">→ {q.choices[q.answer]}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="res-actions">
              <button className="btn-p" style={{ background: "#f43f5e" }} onClick={() => startQuiz("survival")}>🔄 Réessayer</button>
              {missedQs.length > 0 && (
                <button className="btn-p" style={{ background: "#7c3aed" }}
                  onClick={() => { setLastMissed(missedQs); startQuiz("revision", missedQs); }}>
                  📖 Réviser mes erreurs
                </button>
              )}
              <button className="btn-s" onClick={() => setScreen("filter")}>🏷️ Changer les tags</button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
