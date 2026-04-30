export function chemistryQuestions(q) {
  return [
    // CHIMIE — États, mélanges, atomes, réactions
    q("CP : L'eau liquide peut devenir de la glace si on la met :", ["Au congélateur","Dans un livre","Au soleil très chaud","Dans une chaussure"], 0, "Quand l'eau refroidit beaucoup, elle peut devenir solide : c'est la glace.", 1, ["cp","chimie","etats_matiere"]),
    q("CE1 : La vapeur d'eau est un état :", ["Gazeux","Solide","Animal","Végétal"], 0, "La vapeur d'eau est de l'eau à l'état gazeux.", 1, ["ce1","chimie","etats_matiere"]),
    q("CE2 : Quand un glaçon fond, il passe de l'état solide à l'état :", ["Liquide","Gazeux","Rocheux","Lumineux"], 0, "La fusion transforme un solide en liquide.", 1, ["ce2","chimie","etats_matiere"]),
    q("Collège : La condensation est le passage :", ["Du gaz au liquide","Du solide au gaz","Du liquide au solide","Du solide au liquide"], 0, "La condensation transforme un gaz en liquide.", 2, ["college","chimie","etats_matiere"]),

    q("CP : Si on mélange du sucre dans l'eau, le sucre peut :", ["Se dissoudre","Devenir une étoile","Se transformer en bois","Disparaître pour toujours"], 0, "Le sucre se dissout dans l'eau, même si on ne le voit plus.", 1, ["cp","chimie","melanges"]),
    q("CE1 : Un mélange de sable et d'eau est souvent :", ["Hétérogène","Invisible","Gazeux uniquement","Un métal"], 0, "On distingue encore le sable dans l'eau : le mélange est hétérogène.", 2, ["ce1","chimie","melanges"]),
    q("CE2 : Pour séparer du sable et de l'eau, on peut utiliser :", ["Un filtre","Une lampe","Un aimant à bois","Une règle"], 0, "Un filtre retient le sable et laisse passer l'eau.", 1, ["ce2","chimie","melanges"]),
    q("Collège : Une solution est un mélange :", ["Homogène","Toujours solide","Toujours dangereux","Sans solvant"], 0, "Une solution est un mélange homogène d'un soluté dans un solvant.", 2, ["college","chimie","melanges"]),

    q("CE2 : La matière est composée de très petites particules appelées souvent :", ["Atomes","Planètes","Mots","Cartes"], 0, "Les atomes sont de minuscules constituants de la matière.", 2, ["ce2","chimie","atomes"]),
    q("Collège : Une molécule est formée :", ["D'atomes liés entre eux","De planètes alignées","De cellules seulement","De morceaux de papier"], 0, "Une molécule est un assemblage d'atomes.", 2, ["college","chimie","atomes"]),
    q("Collège : Le symbole chimique de l'oxygène est :", ["O","Ox","Og","Oy"], 0, "L'oxygène a pour symbole chimique O.", 2, ["college","chimie","atomes"]),
    q("Lycée : Le numéro atomique d'un élément correspond au nombre de :", ["Protons","Neutrons uniquement","Molécules","Électrons libres uniquement"], 0, "Le numéro atomique Z correspond au nombre de protons dans le noyau.", 3, ["lycee","chimie","atomes"]),

    q("CE2 : Quand du fer rouille, il se produit :", ["Une transformation chimique","Une simple coupe","Une addition","Une traduction"], 0, "La rouille est le résultat d'une transformation chimique du fer avec le dioxygène et l'eau.", 2, ["ce2","chimie","reactions_chimiques"]),
    q("Collège : Lors d'une réaction chimique, les substances de départ s'appellent :", ["Les réactifs","Les outils","Les cartes","Les témoins"], 0, "Les réactifs sont consommés pour former des produits.", 2, ["college","chimie","reactions_chimiques"]),
    q("Collège : Une combustion a besoin d'un combustible et souvent de :", ["Dioxygène","Sable","Lumière bleue uniquement","Sel"], 0, "Une combustion nécessite généralement un combustible et du dioxygène.", 2, ["college","chimie","reactions_chimiques"]),
    q("Lycée : Équilibrer une équation chimique conserve le nombre :", ["D'atomes de chaque élément","De couleurs","De béchers","De degrés Celsius"], 0, "Une équation équilibrée conserve les atomes de chaque élément.", 3, ["lycee","chimie","reactions_chimiques","atomes"]),
  ];
}
