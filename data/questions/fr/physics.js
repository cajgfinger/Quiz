export function physicsQuestions(q) {
  return [
    // PHYSIQUE
    // ════════════════════════════════════════════════════════════════════
    q("Quelle est l'unité de la force ?", ["Le volt","Le newton","Le watt","Le litre"], 1, "Une force se mesure en newtons (N), en hommage au physicien Isaac Newton.", 2, ["cm2","physique","mecanique"]),
    q("Pourquoi une balle retombe-t-elle vers le sol ?", ["À cause du magnétisme","À cause de la gravité","À cause de la lumière","À cause du son"], 1, "La gravité attire les objets vers le centre de la Terre.", 2, ["cm1","physique","mecanique"]),
    q("Si une voiture parcourt 120 km en 2 h, sa vitesse moyenne est :", ["40 km/h","60 km/h","100 km/h","240 km/h"], 1, "Vitesse = distance ÷ temps. 120 ÷ 2 = 60 km/h.", 2, ["cm2","physique","mecanique","calcul"]),
    q("Que dit le principe d'inertie ?", ["Un objet garde son état de mouvement si aucune force ne le change","Un objet chaud devient toujours lumineux","Un objet léger ne tombe jamais","Un objet immobile n'a pas de masse"], 0, "Sans force qui le freine, l'accélère ou le dévie, un objet conserve son mouvement.", 3, ["college","physique","mecanique"]),
    q("Dans une balançoire à bascule, quel objet aide à faire tourner ?", ["Un levier","Une lentille","Une pile","Un prisme"], 0, "Une balançoire à bascule fonctionne comme un levier autour d'un point d'appui.", 2, ["cm2","physique","mecanique"]),
    q("Dans un milieu transparent homogène, la lumière se propage :", ["En zigzag","En ligne droite","En cercle","Uniquement vers le haut"], 1, "Dans l'air calme ou dans le vide, la lumière se propage en ligne droite.", 2, ["cm1","physique","optique"]),
    q("Quelle couleur obtient-on en décomposant la lumière blanche avec un prisme ?", ["Une seule couleur verte","Un arc-en-ciel de couleurs","Du noir","Du gris"], 1, "Un prisme sépare la lumière blanche en plusieurs couleurs, comme dans un arc-en-ciel.", 2, ["cm2","physique","optique"]),
    q("Quelle loi décrit la réflexion sur un miroir plan ?", ["L'angle d'incidence est égal à l'angle de réflexion","La lumière ralentit toujours","La lumière devient sonore","L'image disparaît"], 0, "Sur un miroir plan, le rayon repart avec le même angle que celui avec lequel il arrive.", 3, ["college","physique","optique"]),
    q("Une lentille convergente sert souvent à :", ["Éloigner la lumière de tous les côtés","Faire converger des rayons lumineux","Créer de l'électricité","Mesurer la température"], 1, "Une lentille convergente rassemble des rayons lumineux vers un foyer.", 3, ["college","physique","optique"]),
    q("Pour qu'une ampoule s'allume avec une pile, le circuit doit être :", ["Ouvert","Fermé","Cassé","Sans fil"], 1, "Un circuit fermé laisse passer le courant électrique.", 2, ["cm1","physique","electricite"]),
    q("Quel matériau conduit bien l'électricité ?", ["Le plastique","Le bois sec","Le cuivre","Le verre"], 2, "Les métaux comme le cuivre conduisent bien le courant électrique.", 2, ["cm2","physique","electricite"]),
    q("L'intensité du courant électrique se mesure en :", ["Ampères","Mètres","Grammes","Degrés Celsius"], 0, "L'intensité d'un courant se mesure en ampères (A).", 3, ["college","physique","electricite"]),
    q("4e-3e : Sur le schéma du circuit, quel dipôle est coloré ?", ["La lampe","La pile","L'interrupteur","Le fil conducteur"], 0, "Méthode : la lampe est le dipôle récepteur coloré. Elle transforme l'énergie électrique en lumière quand le circuit est fermé, contrairement à la pile qui fournit l'énergie.", 4, ["cycle4","physique","electricite"], { type: "circuit", highlight: "lamp" }),
    q("La tension électrique se mesure en :", ["Ohms","Volts","Newtons","Secondes"], 1, "La tension aux bornes d'un dipôle se mesure en volts (V).", 3, ["college","physique","electricite"]),
    q("La résistance électrique se mesure en :", ["Ohms","Watts","Litres","Kilogrammes"], 0, "La résistance se mesure en ohms, symbole Ω.", 3, ["college","physique","electricite"]),
    q("À pression normale, l'eau pure bout vers :", ["0 °C","37 °C","100 °C","200 °C"], 2, "Au niveau de la mer, l'eau pure bout vers 100 °C.", 2, ["cm1","physique","thermodynamique"]),
    q("Quand on chauffe une cuillère métallique dans une soupe, la chaleur se transmet surtout par :", ["Conduction","Évaporation","Réflexion","Magnétisme"], 0, "Dans un solide, la chaleur se transmet principalement par conduction.", 3, ["college","physique","thermodynamique"]),
    q("Quelle grandeur indique l'agitation moyenne des particules d'un corps ?", ["La température","La couleur","La forme","La vitesse du son"], 0, "Plus les particules sont agitées en moyenne, plus la température est élevée.", 3, ["college","physique","thermodynamique"]),
    q("Le noyau d'un atome contient surtout :", ["Des protons et des neutrons","Des planètes","Des photons","De l'air"], 0, "Le noyau atomique contient des protons et des neutrons. Les électrons sont autour du noyau.", 3, ["college","physique","physique_moderne"]),
    q("L'énergie d'un photon est proportionnelle à :", ["Sa fréquence","Sa longueur d'onde directement","Sa masse au repos","L'intensité totale du faisceau uniquement"], 0, "Raisonnement : pour un photon, E = hν. Son énergie augmente donc avec sa fréquence ; comme c = λν, elle diminue quand la longueur d'onde augmente.", 5, ["lycee","physique","physique_moderne","optique"]),
    q("Selon la relativité restreinte, quelle vitesse est une limite fondamentale dans le vide ?", ["La vitesse d'un avion","La vitesse de la lumière","La vitesse d'un train","La vitesse du son"], 1, "La vitesse de la lumière dans le vide est une limite fondamentale : environ 300 000 km/s.", 5, ["lycee","physique","physique_moderne"]),
    
    // ════════════════════════════════════════════════════════════════════
  ];
}
