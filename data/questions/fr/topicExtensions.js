export function topicExtensionQuestions(q) {
  return [
    // Maths — thèmes avancés
    q("CP : Dans le nombre 24, le chiffre 2 représente :", ["2 dizaines","2 unités","2 centaines","2 milliers"], 0, "24 = 2 dizaines et 4 unités.", 1, ["cp","maths","numeration"]),
    q("CE2 : Pour résoudre un problème, il faut d'abord :", ["Comprendre la question","Choisir une réponse au hasard","Effacer l'énoncé","Compter les lettres"], 0, "Comprendre ce qu'on cherche est la première étape.", 1, ["ce2","maths","problemes"]),
    q("CM2 : Si 3 cahiers coûtent 6 €, alors 6 cahiers coûtent :", ["9 €","10 €","12 €","18 €"], 2, "6 cahiers, c'est deux fois plus que 3 cahiers, donc 12 €.", 2, ["cm2","maths","proportionnalite","problemes"]),
    q("Collège : La moyenne de 10, 12 et 14 est :", ["11","12","13","36"], 1, "On additionne 10 + 12 + 14 = 36, puis on divise par 3 : 12.", 2, ["college","maths","statistiques","calcul"]),
    q("Collège : Avec un dé équilibré, la probabilité d'obtenir 6 est :", ["1/6","1/2","1/3","6/6"], 0, "Un dé équilibré a 6 faces, donc une chance sur 6 d'obtenir 6.", 2, ["college","maths","probabilites","fractions"]),
    q("Lycée : Si 2x + 3 = 11, alors x vaut :", ["2","3","4","7"], 2, "2x + 3 = 11, donc 2x = 8 et x = 4.", 3, ["lycee","maths","algebre"]),

    // Histoire — périodes manquantes
    q("CP : Les hommes préhistoriques vivaient avant :", ["L'écriture","Les dinosaures","La Terre","Le Soleil"], 0, "La Préhistoire se termine avec l'apparition de l'écriture.", 1, ["cp","histoire","prehistoire"]),
    q("CE2 : Les peintures de Lascaux datent de :", ["La Préhistoire","La Révolution","La Renaissance","La Seconde Guerre mondiale"], 0, "La grotte de Lascaux est célèbre pour ses peintures préhistoriques.", 1, ["ce2","histoire","prehistoire"]),
    q("CM1 : Les Romains appartiennent surtout à la période appelée :", ["Antiquité","Préhistoire","Renaissance","Monde contemporain"], 0, "La civilisation romaine est une civilisation de l'Antiquité.", 1, ["cm1","histoire","antiquite"]),
    q("Collège : Jules César est associé à :", ["La Rome antique","La Révolution française","La Résistance","La conquête spatiale"], 0, "Jules César est un personnage majeur de la Rome antique.", 2, ["college","histoire","antiquite"]),
    q("CM2 : Léonard de Vinci est une grande figure de :", ["La Renaissance","La Préhistoire","La Première Guerre mondiale","L'Empire napoléonien"], 0, "Léonard de Vinci est artiste, savant et inventeur de la Renaissance.", 2, ["cm2","histoire","renaissance"]),
    q("Lycée : La chute du mur de Berlin en 1989 symbolise :", ["La fin de la guerre froide en Europe","Le début du Moyen Âge","La naissance de Rome","La prise de la Bastille"], 0, "La chute du mur de Berlin est un événement majeur du monde contemporain.", 3, ["lycee","histoire","contemporain"]),

    // Géographie — thèmes manquants
    q("CE1 : Le climat décrit le temps qu'il fait :", ["Sur une longue période","Pendant une seule minute","Dans un cahier","Dans une addition"], 0, "Le climat correspond aux conditions météo moyennes sur une longue période.", 1, ["ce1","geo","climat"]),
    q("Collège : Le climat méditerranéen a souvent des étés :", ["Chauds et secs","Glacés toute l'année","Toujours enneigés","Sans soleil"], 0, "Le climat méditerranéen se caractérise souvent par des étés chauds et secs.", 2, ["college","geo","climat","europe"]),
    q("CE2 : La population d'une ville, c'est :", ["Le nombre d'habitants","Le nombre de montagnes","La longueur du fleuve","La couleur du drapeau"], 0, "La population désigne le nombre de personnes qui vivent dans un lieu.", 1, ["ce2","geo","population"]),
    q("Collège : Une forte densité de population signifie :", ["Beaucoup d'habitants sur une petite surface","Aucun habitant","Seulement des champs","Une mer très profonde"], 0, "La densité compare le nombre d'habitants à la surface d'un territoire.", 2, ["college","geo","population"]),
    q("CP : Une carte sert à :", ["Se repérer","Manger","Dormir","Respirer"], 0, "Une carte représente un espace pour aider à se repérer.", 1, ["cp","geo","cartes"]),
    q("CE2 : Sur une carte, une légende sert à :", ["Expliquer les symboles","Raconter une histoire inventée seulement","Cacher les villes","Mesurer le poids"], 0, "La légende explique les couleurs et symboles d'une carte.", 1, ["ce2","geo","cartes"]),
    q("CM2 : Le pétrole, le gaz et le charbon sont des ressources :", ["Fossiles","Magiques","Vivantes","Scolaires"], 0, "Ce sont des ressources fossiles formées sur de très longues durées.", 2, ["cm2","geo","ressources"]),
    q("Collège : Une ressource renouvelable est :", ["Une ressource qui peut se reconstituer à l'échelle humaine","Une ressource toujours infinie","Une ressource uniquement souterraine","Une ressource impossible à utiliser"], 0, "Une ressource renouvelable peut se reconstituer si elle est bien gérée.", 2, ["college","geo","ressources","environnement"]),
    q("CE1 : Ramasser ses déchets protège :", ["L'environnement","Les erreurs","Les tables de multiplication","Les volcans uniquement"], 0, "Les déchets abandonnés peuvent polluer les milieux naturels.", 1, ["ce1","geo","environnement","ecologie"]),
    q("Lycée : L'érosion de la biodiversité est un enjeu :", ["Environnemental mondial","Uniquement sportif","Uniquement grammatical","Sans rapport avec les êtres vivants"], 0, "La disparition d'espèces et la dégradation des milieux sont des enjeux environnementaux majeurs.", 3, ["lycee","geo","environnement","ecosystemes"]),

    // Culture — univers fiction
    q("Harry Potter : Dans quelle maison Harry est-il envoyé à Poudlard ?", ["Gryffondor","Serpentard","Poufsouffle","Serdaigle"], 0, "Harry rejoint Gryffondor, la maison associée au courage.", 1, ["college","culture","harry_potter"]),
    q("Harry Potter : Quel sport les élèves jouent-ils sur des balais ?", ["Quidditch","Cricket","Rugby","Tennis"], 0, "Le Quidditch se joue en volant sur des balais.", 1, ["college","culture","harry_potter"]),
    q("Harry Potter : Qui est le directeur de Poudlard au début de la saga ?", ["Albus Dumbledore","Severus Rogue","Rubeus Hagrid","Sirius Black"], 0, "Albus Dumbledore dirige l'école dans les premiers tomes.", 2, ["college","culture","harry_potter"]),
    q("Harry Potter : Quel objet permet de répartir les élèves dans les maisons ?", ["Le Choixpeau magique","La Carte du Maraudeur","La Coupe de feu","Un retourneur de temps"], 0, "Le Choixpeau magique annonce la maison de chaque nouvel élève.", 2, ["college","culture","harry_potter"]),
    q("Harry Potter : Voldemort cherche souvent à vaincre Harry grâce à :", ["La magie noire","La géométrie","La météo","La cuisine"], 0, "Voldemort est un sorcier lié aux arts sombres.", 2, ["college","culture","harry_potter"]),

    q("Seigneur des anneaux : Quel objet Frodon doit-il détruire ?", ["L'Anneau unique","Une couronne","Une épée cassée","Un livre ancien"], 0, "La quête principale consiste à détruire l'Anneau unique.", 1, ["college","culture","seigneur_anneaux"]),
    q("Seigneur des anneaux : Dans quel lieu l'Anneau doit-il être détruit ?", ["La Montagne du Destin","La Comté","Minas Tirith","Fondcombe"], 0, "L'Anneau doit être jeté dans le feu de la Montagne du Destin.", 2, ["college","culture","seigneur_anneaux"]),
    q("Seigneur des anneaux : Frodon appartient au peuple des :", ["Hobbits","Elfes","Nains","Orques"], 0, "Frodon est un Hobbit originaire de la Comté.", 1, ["college","culture","seigneur_anneaux"]),
    q("Seigneur des anneaux : Quel magicien accompagne la Communauté au départ ?", ["Gandalf","Saroumane","Elrond","Sauron"], 0, "Gandalf fait partie de la Communauté de l'Anneau.", 1, ["college","culture","seigneur_anneaux"]),
    q("Seigneur des anneaux : Quel personnage est l'héritier d'Isildur ?", ["Aragorn","Legolas","Gimli","Boromir"], 0, "Aragorn est l'héritier d'Isildur et du trône du Gondor.", 2, ["college","culture","seigneur_anneaux"]),
  ];
}
