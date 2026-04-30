export function frenchQuestions(q) {
  return [
    // ORTHOGRAPHE
    // ════════════════════════════════════════════════════════════════════
    q("Quelle est la bonne orthographe ?", ["des chevaux","des chevals","des chévaux","des chevauds"], 0, "'Cheval' → 'chevaux'. Les mots en -al font souvent leur pluriel en -aux.", 1, ["cm1","ortho","pluriel"]),
    q("Le pluriel de 'œil' est :", ["œils","yeux","œil","oeils"], 1, "'Œil' a un pluriel irrégulier : 'yeux'.", 1, ["cm1","ortho","pluriel"]),
    q("Quel est le pluriel de 'genou' ?", ["genoux","genous","genoues","genouilles"], 0, "7 mots en -ou prennent -x : bijoux, cailloux, choux, genoux, hiboux, joujoux, poux.", 2, ["cm1","ortho","pluriel"]),
    q("Quel accord est correct ?", ["des belles fleurs","des belle fleurs","des belles fleur","des belle fleur"], 0, "'belle' et 'fleur' s'accordent au féminin pluriel.", 1, ["cm2","ortho","pluriel","accord"]),
    q("Choisis la bonne phrase :", ["Il a mangé une pomme.","Il a manger une pomme.","Il as mangé une pomme.","Il a mangée une pomme."], 0, "Avec 'avoir', le participe ne s'accorde pas avec le sujet.", 1, ["cm1","ortho","accord","conjugaison"]),
    q("Quel accord est correct ?", ["La robe que j'ai acheté","La robe que j'ai achetée","La robe que j'ai achetés","La robe que j'ai achetées"], 1, "Le participe s'accorde avec le COD placé AVANT le verbe. 'que' = 'la robe' (fém. sing.) → 'achetée'.", 3, ["cm2","ortho","accord","conjugaison"]),
    q("Comment accorde-t-on 'beau' devant 'arbre' ?", ["beau arbre","bel arbre","belle arbre","beaux arbre"], 1, "Devant voyelle ou h muet, 'beau' → 'bel' : un bel arbre, un bel homme.", 2, ["cm1","ortho","accord","vocabulaire"]),
    q("Choisis la bonne phrase :", ["Ces enfants sont sages.","Ses enfants sont sages.","C'est enfants sont sages.","Ces enfant sont sages."], 0, "'Ces' est un déterminant démonstratif pluriel. 'Ses' est possessif.", 2, ["cm1","ortho","accord","grammaire"]),
    q("Quelle phrase est au passé composé ?", ["Il chante.","Il chantait.","Il a chanté.","Il chantera."], 2, "Passé composé = auxiliaire présent + participe. 'Chantait' = imparfait, 'chantera' = futur.", 1, ["cm1","ortho","conjugaison"]),
    q("Demain, il ___ à l'école. (futur)", ["allait","ira","est allé","va"], 1, "Futur de 'aller' : j'irai, tu iras, il ira.", 1, ["cm2","ortho","conjugaison"]),
    q("'Nous chant___ en chœur.' Quelle terminaison ?", ["-ons","-ez","-ent","-ais"], 0, "Avec 'nous' : -ons. Avec 'vous' : -ez. Avec 'ils/elles' : -ent.", 1, ["cm1","ortho","conjugaison"]),
    q("Conjugue au passé simple : 'Elle ___ la vérité.'", ["dira","disait","dit","a dit"], 2, "Passé simple de 'dire' : je dis, tu dis, il/elle dit.", 2, ["cm2","ortho","conjugaison"]),
    q("Dans 'les grandes maisons', 'grandes' est :", ["un nom","un verbe","un adjectif","un adverbe"], 2, "'Grandes' est un adjectif qualificatif accordé en genre et nombre.", 1, ["cm1","ortho","grammaire"]),
    q("Quel mot est un nom commun ?", ["beau","courir","maison","vite"], 2, "'Maison' = nom. 'Beau' = adjectif. 'Courir' = verbe. 'Vite' = adverbe.", 1, ["cm1","ortho","grammaire","vocabulaire"]),
    q("Quel est le COD dans : 'Marie mange une pomme.'", ["Marie","mange","une pomme","Il n'y en a pas"], 2, "COD répond à 'mange quoi ?' → une pomme.", 2, ["cm2","ortho","grammaire"]),
    q("Quel est le sujet dans : 'Les enfants jouent dans la cour.'", ["jouent","dans la cour","Les enfants","la cour"], 2, "Le sujet répond à 'Qui joue ?' → Les enfants.", 1, ["cm2","ortho","grammaire"]),
    q("Identifie la proposition subordonnée relative :", ["parce qu'il pleut","qui chante bien","quand il arrive","si tu veux"], 1, "Une relative commence par un pronom relatif (qui, que, dont…).", 3, ["cm2","ortho","grammaire"]),
    q("Quel mot est un adverbe ?", ["rapide","rapidement","la rapidité","rapider"], 1, "Les adverbes de manière : adjectif féminin + -ment.", 1, ["cm1","ortho","grammaire","vocabulaire"]),
    q("Le féminin de 'boulanger' est :", ["boulangeuse","boulangeure","boulangère","boulangéresse"], 2, "Les noms en -er font leur féminin en -ère.", 1, ["cm1","ortho","vocabulaire"]),
    q("Quelle est la bonne orthographe ?", ["il s'en va","il sen va","il s'an va","il san va"], 0, "'S'en va' : 'se' s'élide en 's'' devant 'en'.", 2, ["cm2","ortho","accord"]),
    
    // ════════════════════════════════════════════════════════════════════
  ];
}
