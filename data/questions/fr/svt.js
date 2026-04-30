export function svtQuestions(q) {
  return [
    // SVT — Anatomie, animaux, plantes, écosystèmes, santé, Terre
    q("CP : Quelle partie du corps sert surtout à voir ?", ["Les yeux","Les pieds","Les genoux","Les coudes"], 0, "Les yeux permettent de voir.", 1, ["cp","svt","anatomie"]),
    q("CE1 : Le cœur sert principalement à :", ["Faire circuler le sang","Respirer l'air","Digérer les aliments","Entendre les sons"], 0, "Le cœur est un muscle qui envoie le sang dans le corps.", 1, ["ce1","svt","anatomie","sante"]),
    q("CE2 : Les poumons permettent surtout :", ["La respiration","La digestion","La vision","La marche"], 0, "Les poumons permettent les échanges d'air nécessaires à la respiration.", 1, ["ce2","svt","anatomie","sante"]),
    q("Collège : L'estomac intervient dans :", ["La digestion","La circulation du sang","La vision","La reproduction des plantes"], 0, "L'estomac participe à la digestion des aliments.", 2, ["college","svt","anatomie","sante"]),

    q("CP : Quel animal est un mammifère ?", ["Le chien","La mouche","La sardine","La grenouille"], 0, "Le chien est un mammifère : il nourrit ses petits avec du lait.", 1, ["cp","svt","svt_animaux"]),
    q("CE1 : Un animal carnivore mange surtout :", ["De la viande","Des cailloux","De la lumière","De l'eau salée"], 0, "Un carnivore se nourrit surtout d'autres animaux.", 1, ["ce1","svt","svt_animaux"]),
    q("CE2 : Les branchies permettent à certains animaux de :", ["Respirer dans l'eau","Voler","Produire du miel","Faire des graines"], 0, "Les poissons respirent dans l'eau grâce à leurs branchies.", 2, ["ce2","svt","svt_animaux"]),
    q("Collège : La métamorphose du papillon passe par le stade :", ["Chenille","Pierre","Graine","Cristal"], 0, "Le papillon passe par l'œuf, la chenille, la chrysalide puis l'adulte.", 2, ["college","svt","svt_animaux"]),

    q("CP : De quoi une plante a-t-elle besoin pour pousser ?", ["D'eau et de lumière","De plastique","De bruit","De métal"], 0, "Une plante a besoin d'eau, de lumière, d'air et de sels minéraux.", 1, ["cp","svt","plantes"]),
    q("CE1 : La partie de la plante qui absorbe l'eau du sol est :", ["La racine","La fleur","Le fruit","La feuille"], 0, "Les racines absorbent l'eau et les sels minéraux du sol.", 1, ["ce1","svt","plantes"]),
    q("CE2 : Les feuilles servent notamment à :", ["Fabriquer de la matière grâce à la lumière","Dormir","Produire des os","Faire du feu"], 0, "Les feuilles captent la lumière et participent à la fabrication de matière par la plante.", 2, ["ce2","svt","plantes"]),
    q("Collège : La photosynthèse utilise principalement :", ["La lumière, le dioxyde de carbone et l'eau","Le sable et le fer","Le son et la gravité","Le sel uniquement"], 0, "La photosynthèse permet aux plantes de produire de la matière organique avec la lumière.", 3, ["college","svt","plantes","ecosystemes"]),

    q("CE1 : Dans une chaîne alimentaire, une feuille peut être mangée par :", ["Une chenille","Une pierre","Un nuage","Un vélo"], 0, "Une chenille peut manger des feuilles.", 1, ["ce1","svt","ecosystemes","svt_animaux","plantes"]),
    q("CE2 : Un écosystème contient :", ["Des êtres vivants et leur milieu","Seulement des voitures","Seulement des nombres","Seulement des étoiles"], 0, "Un écosystème regroupe des êtres vivants et leur environnement.", 2, ["ce2","svt","ecosystemes"]),
    q("Collège : La biodiversité désigne :", ["La diversité des êtres vivants","La vitesse du vent","La taille d'un pays","Le nombre de planètes"], 0, "La biodiversité correspond à la diversité des espèces, des milieux et des gènes.", 2, ["college","svt","ecosystemes"]),
    q("Lycée : Dans un réseau trophique, un producteur primaire est souvent :", ["Une plante chlorophyllienne","Un renard","Un champignon décomposeur","Un volcan"], 0, "Les producteurs primaires fabriquent leur matière organique, souvent grâce à la photosynthèse.", 3, ["lycee","svt","ecosystemes","plantes"]),

    q("CP : Pour rester en bonne santé, il faut souvent :", ["Dormir suffisamment","Ne jamais boire","Ne jamais bouger","Manger seulement du sucre"], 0, "Le sommeil aide le corps et le cerveau à récupérer.", 1, ["cp","svt","sante"]),
    q("CE1 : Se laver les mains aide à limiter :", ["Les microbes","Les montagnes","Les étoiles","Les additions"], 0, "Le lavage des mains réduit la transmission de nombreux microbes.", 1, ["ce1","svt","sante"]),
    q("Collège : Une vaccination sert à :", ["Préparer le système immunitaire","Casser les os","Remplacer l'eau","Changer la couleur des yeux"], 0, "Un vaccin aide le système immunitaire à reconnaître un agent infectieux.", 2, ["college","svt","sante"]),
    q("Lycée : Les anticorps sont produits par :", ["Des cellules du système immunitaire","Les roches volcaniques","Les feuilles uniquement","Les globules rouges uniquement"], 0, "Certains lymphocytes produisent des anticorps capables de reconnaître des antigènes.", 3, ["lycee","svt","sante","anatomie"]),

    q("CE2 : Un volcan peut rejeter :", ["De la lave","De la neige en permanence","Des poissons","Du papier"], 0, "Lors d'une éruption, un volcan peut rejeter de la lave, des gaz et des cendres.", 1, ["ce2","svt","terre_volcans_seismes"]),
    q("CM1 : Un séisme est :", ["Une secousse du sol","Une pluie fine","Une marée","Une saison"], 0, "Un séisme correspond à des vibrations brutales du sol.", 1, ["cm1","svt","terre_volcans_seismes"]),
    q("Collège : Les plaques tectoniques sont :", ["De grands morceaux rigides de la lithosphère","Des assiettes de cuisine","Des nuages très bas","Des instruments de musique"], 0, "La surface de la Terre est découpée en plaques tectoniques en mouvement.", 2, ["college","svt","terre_volcans_seismes"]),
    q("Lycée : La subduction correspond à :", ["L'enfoncement d'une plaque sous une autre","La naissance d'une feuille","La fonte d'un glaçon","La rotation de la Lune"], 0, "En zone de subduction, une plaque lithosphérique plonge sous une autre.", 3, ["lycee","svt","terre_volcans_seismes"]),
  ];
}
