// ── TAG DEFINITIONS ───────────────────────────────────────────────────────────
// Each tag: { id, label, color, bg, category }
// Categories: "niveau" | "matiere" | "theme" | "univers" | "langue" | "langue_theme"

export const TAGS = [
  // ── Niveau ──
  { id: "cp",       label: "CP",          color: "#14b8a6", bg: "#f0fdfa", category: "niveau" },
  { id: "ce1",      label: "CE1",         color: "#0ea5e9", bg: "#f0f9ff", category: "niveau" },
  { id: "ce2",      label: "CE2",         color: "#3b82f6", bg: "#eff6ff", category: "niveau" },
  { id: "cm1",      label: "CM1",         color: "#6366f1", bg: "#eef2ff", category: "niveau" },
  { id: "cm2",      label: "CM2",         color: "#8b5cf6", bg: "#f5f3ff", category: "niveau" },
  { id: "college",  label: "Collège",     color: "#2563eb", bg: "#eff6ff", category: "niveau" },
  { id: "lycee",    label: "Lycée",       color: "#be123c", bg: "#fff1f2", category: "niveau" },
  { id: "debutant", label: "Débutant",    color: "#10b981", bg: "#ecfdf5", category: "niveau" },
  { id: "inter",    label: "Intermédiaire", color: "#f59e0b", bg: "#fffbeb", category: "niveau" },

  // ── Matière ──
  { id: "maths",    label: "Maths",       color: "#ef4444", bg: "#fef2f2", category: "matiere" },
  { id: "ortho",    label: "Orthographe", color: "#0ea5e9", bg: "#f0f9ff", category: "matiere" },
  { id: "histoire", label: "Histoire",    color: "#f59e0b", bg: "#fffbeb", category: "matiere" },
  { id: "geo",      label: "Géographie",  color: "#22c55e", bg: "#f0fdf4", category: "matiere" },
  { id: "physique", label: "Physique",     color: "#06b6d4", bg: "#ecfeff", category: "matiere" },
  { id: "astro",    label: "Astronomie",   color: "#4f46e5", bg: "#eef2ff", category: "matiere" },
  { id: "svt",      label: "SVT",          color: "#16a34a", bg: "#f0fdf4", category: "matiere" },
  { id: "chimie",   label: "Chimie",       color: "#9333ea", bg: "#faf5ff", category: "matiere" },
  { id: "techno",   label: "Technologie",  color: "#475569", bg: "#f8fafc", category: "matiere" },
  { id: "emc",      label: "EMC",          color: "#0f766e", bg: "#f0fdfa", category: "matiere" },
  { id: "langues",  label: "Langues",     color: "#a855f7", bg: "#faf5ff", category: "matiere" },
  { id: "culture",  label: "Culture",      color: "#db2777", bg: "#fdf2f8", category: "matiere" },

  // ── Thèmes Maths ──
  { id: "multiplication", label: "Multiplication", color: "#ef4444", bg: "#fff1f2", category: "theme" },
  { id: "division",       label: "Division",        color: "#ef4444", bg: "#fff1f2", category: "theme" },
  { id: "fractions",      label: "Fractions",       color: "#ef4444", bg: "#fff1f2", category: "theme" },
  { id: "geometrie",      label: "Géométrie",       color: "#ef4444", bg: "#fff1f2", category: "theme" },
  { id: "decimaux",       label: "Décimaux",        color: "#ef4444", bg: "#fff1f2", category: "theme" },
  { id: "mesures",        label: "Mesures",         color: "#ef4444", bg: "#fff1f2", category: "theme" },
  { id: "calcul",         label: "Calcul",          color: "#ef4444", bg: "#fff1f2", category: "theme" },
  { id: "numeration",     label: "Numération",      color: "#ef4444", bg: "#fff1f2", category: "theme" },
  { id: "problemes",      label: "Problèmes",       color: "#ef4444", bg: "#fff1f2", category: "theme" },
  { id: "proportionnalite", label: "Proportionnalité", color: "#ef4444", bg: "#fff1f2", category: "theme" },
  { id: "statistiques",   label: "Statistiques",    color: "#ef4444", bg: "#fff1f2", category: "theme" },
  { id: "probabilites",   label: "Probabilités",    color: "#ef4444", bg: "#fff1f2", category: "theme" },
  { id: "algebre",        label: "Algèbre",         color: "#ef4444", bg: "#fff1f2", category: "theme" },

  // ── Thèmes Ortho ──
  { id: "conjugaison",  label: "Conjugaison",  color: "#0ea5e9", bg: "#e0f2fe", category: "theme" },
  { id: "pluriel",      label: "Pluriel",       color: "#0ea5e9", bg: "#e0f2fe", category: "theme" },
  { id: "accord",       label: "Accord",        color: "#0ea5e9", bg: "#e0f2fe", category: "theme" },
  { id: "grammaire",    label: "Grammaire",     color: "#0ea5e9", bg: "#e0f2fe", category: "theme" },
  { id: "vocabulaire",  label: "Vocabulaire",   color: "#0ea5e9", bg: "#e0f2fe", category: "theme" },

  // ── Thèmes Histoire ──
  { id: "revolution",  label: "Révolution",    color: "#f59e0b", bg: "#fef3c7", category: "theme" },
  { id: "republique",  label: "République",    color: "#f59e0b", bg: "#fef3c7", category: "theme" },
  { id: "napoleon",    label: "Napoléon",      color: "#f59e0b", bg: "#fef3c7", category: "theme" },
  { id: "jules_ferry", label: "Jules Ferry",   color: "#f59e0b", bg: "#fef3c7", category: "theme" },
  { id: "ww1",         label: "Guerre 14-18",  color: "#f59e0b", bg: "#fef3c7", category: "theme" },
  { id: "ww2",         label: "Guerre 39-45",  color: "#f59e0b", bg: "#fef3c7", category: "theme" },
  { id: "resistance",  label: "Résistance",    color: "#f59e0b", bg: "#fef3c7", category: "theme" },
  { id: "esclavage",   label: "Esclavage",     color: "#f59e0b", bg: "#fef3c7", category: "theme" },
  { id: "moyen_age",   label: "Moyen Âge",     color: "#f59e0b", bg: "#fef3c7", category: "theme" },
  { id: "prehistoire", label: "Préhistoire",   color: "#f59e0b", bg: "#fef3c7", category: "theme" },
  { id: "antiquite",   label: "Antiquité",     color: "#f59e0b", bg: "#fef3c7", category: "theme" },
  { id: "renaissance", label: "Renaissance",   color: "#f59e0b", bg: "#fef3c7", category: "theme" },
  { id: "contemporain", label: "Monde contemporain", color: "#f59e0b", bg: "#fef3c7", category: "theme" },

  // ── Thèmes Géo France ──
  { id: "departements", label: "Départements", color: "#22c55e", bg: "#dcfce7", category: "theme" },
  { id: "regions",      label: "Régions",      color: "#22c55e", bg: "#dcfce7", category: "theme" },
  { id: "fleuves",      label: "Fleuves",      color: "#22c55e", bg: "#dcfce7", category: "theme" },
  { id: "europe",       label: "Europe",       color: "#22c55e", bg: "#dcfce7", category: "theme" },
  { id: "monde",        label: "Monde",        color: "#22c55e", bg: "#dcfce7", category: "theme" },
  { id: "capitales",    label: "Capitales",    color: "#22c55e", bg: "#dcfce7", category: "theme" },
  { id: "drapeaux",     label: "Drapeaux",     color: "#22c55e", bg: "#dcfce7", category: "theme" },
  { id: "relief",       label: "Relief",       color: "#22c55e", bg: "#dcfce7", category: "theme" },
  { id: "mers",         label: "Mers & Océans", color: "#22c55e", bg: "#dcfce7", category: "theme" },
  { id: "climat",       label: "Climat",       color: "#22c55e", bg: "#dcfce7", category: "theme" },
  { id: "population",   label: "Population",   color: "#22c55e", bg: "#dcfce7", category: "theme" },
  { id: "cartes",       label: "Cartes",       color: "#22c55e", bg: "#dcfce7", category: "theme" },
  { id: "ressources",   label: "Ressources",   color: "#22c55e", bg: "#dcfce7", category: "theme" },
  { id: "environnement", label: "Environnement", color: "#22c55e", bg: "#dcfce7", category: "theme" },

  // ── Thèmes Physique ──
  { id: "mecanique",          label: "Mécanique",          color: "#06b6d4", bg: "#cffafe", category: "theme" },
  { id: "optique",            label: "Optique",            color: "#06b6d4", bg: "#cffafe", category: "theme" },
  { id: "electricite",        label: "Électricité",        color: "#06b6d4", bg: "#cffafe", category: "theme" },
  { id: "thermodynamique",    label: "Thermodynamique",    color: "#06b6d4", bg: "#cffafe", category: "theme" },
  { id: "physique_moderne",   label: "Physique moderne",   color: "#06b6d4", bg: "#cffafe", category: "theme" },

  // ── Thèmes Astronomie ──
  { id: "systeme_solaire",      label: "Système solaire",      color: "#4f46e5", bg: "#e0e7ff", category: "theme" },
  { id: "etoiles",              label: "Étoiles",              color: "#4f46e5", bg: "#e0e7ff", category: "theme" },
  { id: "galaxies",             label: "Galaxies",             color: "#4f46e5", bg: "#e0e7ff", category: "theme" },
  { id: "exploration_spatiale", label: "Exploration spatiale", color: "#4f46e5", bg: "#e0e7ff", category: "theme" },
  { id: "phenomenes",           label: "Phénomènes",           color: "#4f46e5", bg: "#e0e7ff", category: "theme" },

  // ── Thèmes SVT ──
  { id: "anatomie",              label: "Anatomie",              color: "#16a34a", bg: "#dcfce7", category: "theme" },
  { id: "svt_animaux",           label: "Animaux (SVT)",         color: "#16a34a", bg: "#dcfce7", category: "theme" },
  { id: "plantes",               label: "Plantes",               color: "#16a34a", bg: "#dcfce7", category: "theme" },
  { id: "ecosystemes",           label: "Écosystèmes",           color: "#16a34a", bg: "#dcfce7", category: "theme" },
  { id: "sante",                 label: "Santé",                 color: "#16a34a", bg: "#dcfce7", category: "theme" },
  { id: "terre_volcans_seismes", label: "Terre, volcans & séismes", color: "#16a34a", bg: "#dcfce7", category: "theme" },

  // ── Thèmes Chimie ──
  { id: "etats_matiere",       label: "États de la matière", color: "#9333ea", bg: "#f3e8ff", category: "theme" },
  { id: "melanges",            label: "Mélanges",            color: "#9333ea", bg: "#f3e8ff", category: "theme" },
  { id: "atomes",              label: "Atomes",              color: "#9333ea", bg: "#f3e8ff", category: "theme" },
  { id: "reactions_chimiques", label: "Réactions chimiques", color: "#9333ea", bg: "#f3e8ff", category: "theme" },

  // ── Thèmes Informatique / Technologie ──
  { id: "algorithmique",      label: "Algorithmique",       color: "#475569", bg: "#f1f5f9", category: "theme" },
  { id: "logique",            label: "Logique",             color: "#475569", bg: "#f1f5f9", category: "theme" },
  { id: "securite_numerique", label: "Sécurité numérique",  color: "#475569", bg: "#f1f5f9", category: "theme" },
  { id: "objets_techniques",  label: "Objets techniques",   color: "#475569", bg: "#f1f5f9", category: "theme" },

  // ── Thèmes EMC ──
  { id: "regles",         label: "Règles",          color: "#0f766e", bg: "#ccfbf1", category: "theme" },
  { id: "droits",         label: "Droits",          color: "#0f766e", bg: "#ccfbf1", category: "theme" },
  { id: "institutions",   label: "Institutions",    color: "#0f766e", bg: "#ccfbf1", category: "theme" },
  { id: "ecologie",       label: "Écologie",        color: "#0f766e", bg: "#ccfbf1", category: "theme" },
  { id: "vivre_ensemble", label: "Vivre ensemble",  color: "#0f766e", bg: "#ccfbf1", category: "theme" },

  // ── Univers fiction ──
  { id: "harry_potter",      label: "Harry Potter",          color: "#7c3aed", bg: "#f5f3ff", category: "univers" },
  { id: "seigneur_anneaux",  label: "Seigneur des anneaux",  color: "#15803d", bg: "#f0fdf4", category: "univers" },

  // ── Langues ──
  { id: "anglais",   label: "🇬🇧 Anglais",   color: "#3b82f6", bg: "#eff6ff", category: "langue" },
  { id: "allemand",  label: "🇩🇪 Allemand",  color: "#1d4ed8", bg: "#eff6ff", category: "langue" },
  { id: "espagnol",  label: "🇪🇸 Espagnol",  color: "#dc2626", bg: "#fef2f2", category: "langue" },
  { id: "italien",   label: "🇮🇹 Italien",   color: "#16a34a", bg: "#f0fdf4", category: "langue" },
  { id: "chinois",   label: "🇨🇳 Chinois",   color: "#b91c1c", bg: "#fef2f2", category: "langue" },
  { id: "arabe",     label: "🌙 Arabe",       color: "#b45309", bg: "#fefce8", category: "langue" },
  { id: "polonais",  label: "🇵🇱 Polonais",  color: "#be123c", bg: "#fff1f2", category: "langue" },

  // ── Thèmes Langues ──
  { id: "vocab",      label: "Vocabulaire",  color: "#a855f7", bg: "#faf5ff", category: "langue_theme" },
  { id: "nombres",    label: "Nombres",      color: "#a855f7", bg: "#faf5ff", category: "langue_theme" },
  { id: "couleurs",   label: "Couleurs",     color: "#a855f7", bg: "#faf5ff", category: "langue_theme" },
  { id: "animaux",    label: "Animaux",      color: "#a855f7", bg: "#faf5ff", category: "langue_theme" },
  { id: "famille",    label: "Famille",      color: "#a855f7", bg: "#faf5ff", category: "langue_theme" },
  { id: "nourriture", label: "Nourriture",   color: "#a855f7", bg: "#faf5ff", category: "langue_theme" },
  { id: "salutations",label: "Salutations",  color: "#a855f7", bg: "#faf5ff", category: "langue_theme" },
  { id: "phrases",    label: "Phrases",      color: "#a855f7", bg: "#faf5ff", category: "langue_theme" },
];

export const TAG_MAP = Object.fromEntries(TAGS.map(t => [t.id, t]));

export const CATEGORY_LABELS = {
  niveau:       "Niveau",
  matiere:      "Matière",
  theme:        "Thème",
  univers:      "Univers",
  langue:       "Langue",
  langue_theme: "Thème de langue",
};

export function tagsByCategory() {
  const groups = {};
  for (const t of TAGS) {
    if (!groups[t.category]) groups[t.category] = [];
    groups[t.category].push(t);
  }
  return groups;
}
