export function chemistryQuestions(q) {
  return [
    // CHIMIE — États, mélanges, atomes, réactions
    q("CP : L'eau liquide peut devenir de la glace si on la met :", ["Au congélateur","Dans un livre","Au soleil très chaud","Dans une chaussure"], 0, "Quand l'eau refroidit beaucoup, elle peut devenir solide : c'est la glace.", 1, ["cp","chimie","etats_matiere"]),
    q("CE1 : La vapeur d'eau est un état :", ["Gazeux","Solide","Animal","Végétal"], 0, "La vapeur d'eau est de l'eau à l'état gazeux.", 1, ["ce1","chimie","etats_matiere"]),
    q("CE2 : Quand un glaçon fond, il passe de l'état solide à l'état :", ["Liquide","Gazeux","Rocheux","Lumineux"], 0, "La fusion transforme un solide en liquide.", 1, ["ce2","chimie","etats_matiere"]),
    q("Collège : La condensation est le passage :", ["Du gaz au liquide","Du solide au gaz","Du liquide au solide","Du solide au liquide"], 0, "La condensation transforme un gaz en liquide.", 3, ["college","chimie","etats_matiere"]),
    q("4e-3e : Sur le schéma, quel état de l'eau est coloré ?", ["L'état gazeux","L'état solide","L'état liquide","Un mélange hétérogène"], 0, "Méthode : l'état gazeux correspond à la vapeur ; les particules sont très dispersées et occupent tout l'espace disponible, contrairement au solide et au liquide.", 4, ["cycle4","chimie","etats_matiere"], { type: "water-state", highlight: "gas" }),

    q("CP : Si on mélange du sucre dans l'eau, le sucre peut :", ["Se dissoudre","Devenir une étoile","Se transformer en bois","Disparaître pour toujours"], 0, "Le sucre se dissout dans l'eau, même si on ne le voit plus.", 1, ["cp","chimie","melanges"]),
    q("CE1 : Un mélange de sable et d'eau est souvent :", ["Hétérogène","Invisible","Gazeux uniquement","Un métal"], 0, "On distingue encore le sable dans l'eau : le mélange est hétérogène.", 1, ["ce1","chimie","melanges"]),
    q("CE2 : Pour séparer du sable et de l'eau, on peut utiliser :", ["Un filtre","Une lampe","Un aimant à bois","Une règle"], 0, "Un filtre retient le sable et laisse passer l'eau.", 1, ["ce2","chimie","melanges"]),
    q("Collège : Une solution est un mélange :", ["Homogène","Toujours solide","Toujours dangereux","Sans solvant"], 0, "Une solution est un mélange homogène d'un soluté dans un solvant.", 3, ["college","chimie","melanges"]),

    q("CE2 : La matière est composée de très petites particules appelées souvent :", ["Atomes","Planètes","Mots","Cartes"], 0, "Les atomes sont de minuscules constituants de la matière.", 1, ["ce2","chimie","atomes"]),
    q("Collège : Une molécule est formée :", ["D'atomes liés entre eux","De planètes alignées","De cellules seulement","De morceaux de papier"], 0, "Une molécule est un assemblage d'atomes.", 3, ["college","chimie","atomes"]),
    q("Collège : Le symbole chimique de l'oxygène est :", ["O","Ox","Og","Oy"], 0, "L'oxygène a pour symbole chimique O.", 3, ["college","chimie","atomes"]),
    q("Lycée : Deux isotopes d'un même élément chimique ont le même nombre de :", ["Protons","Neutrons","Nucléons","Couches électroniques toujours complètes"], 0, "Raisonnement : l'élément chimique est défini par son numéro atomique Z, donc par son nombre de protons. Les isotopes diffèrent par leur nombre de neutrons.", 5, ["lycee","chimie","atomes"]),

    q("CE2 : Quand du fer rouille, il se produit :", ["Une transformation chimique","Une simple coupe","Une addition","Une traduction"], 0, "La rouille est le résultat d'une transformation chimique du fer avec le dioxygène et l'eau.", 1, ["ce2","chimie","reactions_chimiques"]),
    q("Collège : Lors d'une réaction chimique, les substances de départ s'appellent :", ["Les réactifs","Les outils","Les cartes","Les témoins"], 0, "Les réactifs sont consommés pour former des produits.", 3, ["college","chimie","reactions_chimiques"]),
    q("Collège : Une combustion a besoin d'un combustible et souvent de :", ["Dioxygène","Sable","Lumière bleue uniquement","Sel"], 0, "Une combustion nécessite généralement un combustible et du dioxygène.", 3, ["college","chimie","reactions_chimiques"]),
    q("Lycée : Dans une équation chimique équilibrée, les coefficients servent à conserver :", ["Le nombre d'atomes de chaque élément","La couleur des produits","La température de la salle","Le volume exact de chaque bécher"], 0, "Raisonnement : on ajuste les coefficients stœchiométriques pour respecter la conservation des atomes ; on ne modifie pas les formules des espèces chimiques.", 5, ["lycee","chimie","reactions_chimiques","atomes"]),
  ];
}
