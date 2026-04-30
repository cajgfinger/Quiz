import { TAGS } from "../../tags.js";

const TARGET_CATEGORIES = new Set(["theme", "univers", "langue", "langue_theme"]);

const LEVELS = ["cp", "ce1", "ce2", "cm1", "cm2", "college", "lycee"];
const DIFFICULTY_BY_LEVEL = {
  cp: 1, ce1: 1, ce2: 1, cm1: 1, cm2: 2, college: 2, lycee: 3,
  debutant: 1, inter: 2,
};

const SUBJECT_BY_TAG = {
  multiplication: "maths", division: "maths", fractions: "maths", geometrie: "maths",
  decimaux: "maths", mesures: "maths", calcul: "maths", numeration: "maths",
  problemes: "maths", proportionnalite: "maths", statistiques: "maths",
  probabilites: "maths", algebre: "maths",
  conjugaison: "ortho", pluriel: "ortho", accord: "ortho", grammaire: "ortho", vocabulaire: "ortho",
  revolution: "histoire", republique: "histoire", napoleon: "histoire", jules_ferry: "histoire",
  ww1: "histoire", ww2: "histoire", resistance: "histoire", esclavage: "histoire",
  moyen_age: "histoire", prehistoire: "histoire", antiquite: "histoire",
  renaissance: "histoire", contemporain: "histoire",
  departements: "geo", regions: "geo", fleuves: "geo", europe: "geo", monde: "geo",
  capitales: "geo", drapeaux: "geo", relief: "geo", mers: "geo", climat: "geo",
  population: "geo", cartes: "geo", ressources: "geo", environnement: "geo",
  mecanique: "physique", optique: "physique", electricite: "physique",
  thermodynamique: "physique", physique_moderne: "physique",
  systeme_solaire: "astro", etoiles: "astro", galaxies: "astro",
  exploration_spatiale: "astro", phenomenes: "astro",
  anatomie: "svt", svt_animaux: "svt", plantes: "svt", ecosystemes: "svt",
  sante: "svt", terre_volcans_seismes: "svt",
  etats_matiere: "chimie", melanges: "chimie", atomes: "chimie", reactions_chimiques: "chimie",
  algorithmique: "techno", logique: "techno", securite_numerique: "techno", objets_techniques: "techno",
  regles: "emc", droits: "emc", institutions: "emc", ecologie: "emc", vivre_ensemble: "emc",
  harry_potter: "culture", seigneur_anneaux: "culture",
};

const GENERIC_WRONGS = [
  "Une planète", "Une opération", "Un fleuve", "Une règle de grammaire",
  "Une capitale", "Un personnage", "Un instrument", "Une saison",
];

function rotateQuestion(q, text, correct, wrongs, explanation, difficulty, tags, offset) {
  const choices = [correct, ...wrongs].filter((v, i, arr) => v && arr.indexOf(v) === i).slice(0, 4);
  for (const wrong of GENERIC_WRONGS) {
    if (choices.length >= 4) break;
    if (!choices.includes(wrong) && wrong !== correct) choices.push(wrong);
  }
  const shift = offset % choices.length;
  const rotated = [...choices.slice(shift), ...choices.slice(0, shift)];
  return q(text, rotated, rotated.indexOf(correct), explanation, difficulty, tags);
}

function variantText(base, label, n) {
  const variants = [
    base,
    `Révision ${label} : ${base}`,
    `Question flash (${label}) : ${base}`,
    `Défi ${label} : ${base}`,
    `Pour s'entraîner en ${label} : ${base}`,
  ];
  return variants[n % variants.length];
}

function card(text, correct, wrongs, explanation, topic) {
  return { text, correct, wrongs, explanation, topic };
}

function factCards(label) {
  return [
    card(`Le thème "${label}" aide surtout à apprendre :`, label, ["Les avatars", "Le score du joueur", "Le chronomètre"], `Cette question sert à reconnaître le thème ${label}.`),
    card(`Dans un quiz, "${label}" est :`, "Un thème de questions", ["Un mode de jeu", "Un profil joueur", "Un bouton de retour"], `${label} est un tag utilisé pour filtrer les questions.`),
    card(`Si tu choisis le tag "${label}", tu obtiens :`, "Des questions sur ce thème", ["Des questions au hasard sans filtre", "Un nouveau profil", "Un changement d'avatar"], `Le filtre garde les questions liées à ${label}.`),
    card(`Le mot-clé qui correspond à ce thème est :`, label, ["Survie", "Révision", "Toutes"], `Le tag ${label} regroupe les questions du même sujet.`),
  ];
}

const FACT_PACKS = {
  conjugaison: [
    card("Dans 'nous chantons', le sujet est :", "nous", ["je", "tu", "ils"], "Le verbe s'accorde avec le sujet 'nous'."),
    card("Le verbe 'être' à la 3e personne du pluriel au présent est :", "sont", ["est", "sommes", "êtes"], "Ils ou elles sont."),
    card("Dans 'je finis', le verbe est conjugué au :", "présent", ["futur", "imparfait", "passé simple"], "La terminaison indique le présent."),
    card("Au futur, 'nous mangerons' exprime :", "une action à venir", ["une action passée", "un ordre", "une question"], "Le futur parle de ce qui arrivera."),
  ],
  pluriel: [
    card("Le pluriel de 'un cheval' est :", "des chevaux", ["des chevals", "des cheval", "des chevau"], "Les noms en -al font souvent leur pluriel en -aux."),
    card("Le pluriel de 'un journal' est :", "des journaux", ["des journals", "des journal", "des journeaux"], "Journal devient journaux au pluriel."),
    card("Le pluriel de 'un jeu' est :", "des jeux", ["des jeus", "des jeu", "des jeuz"], "Les noms en -eu prennent souvent x au pluriel."),
    card("Le pluriel de 'un nez' est :", "des nez", ["des nezs", "des ne", "des nés"], "Les mots finissant par z ne changent pas au pluriel."),
  ],
  accord: [
    card("Dans 'les fleurs rouges', l'adjectif 'rouges' est :", "au féminin pluriel", ["au masculin singulier", "au féminin singulier", "au masculin pluriel"], "Il s'accorde avec 'fleurs'."),
    card("On écrit 'une robe bleu...' avec :", "bleue", ["bleu", "bleus", "bleues"], "Robe est féminin singulier."),
    card("Dans 'des chiens noirs', l'adjectif prend :", "un s", ["un x", "aucune marque", "un e seulement"], "Noirs est masculin pluriel."),
    card("Le participe passé avec 'être' s'accorde avec :", "le sujet", ["le complément", "l'adverbe", "la ponctuation"], "Avec être, on écrit par exemple 'elles sont parties'."),
  ],
  grammaire: [
    card("Dans 'Le chat dort', le groupe sujet est :", "Le chat", ["dort", "chat dort", "Le"], "Le sujet indique qui fait l'action."),
    card("Un nom propre commence généralement par :", "une majuscule", ["un chiffre", "un accent", "un point"], "Paris, Emma et France prennent une majuscule."),
    card("Dans une phrase, le verbe indique souvent :", "l'action ou l'état", ["la couleur", "le nombre de lignes", "la marge"], "Le verbe porte l'action ou l'état."),
    card("Un adjectif sert à :", "préciser un nom", ["remplacer un point", "compter les syllabes", "ouvrir une parenthèse"], "Un adjectif donne une information sur le nom."),
  ],
  vocabulaire: [
    card("Un synonyme de 'rapide' est :", "vite", ["lent", "ancien", "minuscule"], "Deux synonymes ont un sens proche."),
    card("Le contraire de 'chaud' est :", "froid", ["tiède", "brûlant", "clair"], "Froid est l'antonyme de chaud."),
    card("Le préfixe 're-' dans 'relire' signifie souvent :", "faire de nouveau", ["faire moins", "faire vite", "faire mal"], "Relire, c'est lire à nouveau."),
    card("Une famille de mots regroupe des mots avec :", "la même origine", ["la même longueur", "la même ponctuation", "la même première lettre seulement"], "Terre, terrestre et terrain ont une origine commune."),
  ],
  revolution: [
    card("La Révolution française commence traditionnellement en :", "1789", ["1492", "1914", "1945"], "1789 est l'année de la prise de la Bastille."),
    card("La prise de la Bastille a lieu le :", "14 juillet 1789", ["11 novembre 1918", "8 mai 1945", "1er janvier 1800"], "C'est une date symbolique de la Révolution française."),
    card("La Déclaration des droits de l'homme et du citoyen date de :", "1789", ["1515", "1815", "1936"], "Elle affirme des libertés et des droits fondamentaux."),
    card("La Révolution met fin à la monarchie absolue en France en :", "1792", ["1600", "1870", "1958"], "La République est proclamée en 1792."),
  ],
  republique: [
    card("La devise de la République française est :", "Liberté, Égalité, Fraternité", ["Travail, Famille, Patrie", "Force, Courage, Victoire", "Paix, Mer, Montagne"], "Cette devise figure sur de nombreux bâtiments publics."),
    card("En France, le président de la République est élu par :", "les citoyens", ["les montagnes", "les départements seuls", "les rois"], "Les citoyens votent au suffrage universel."),
    card("Le drapeau français est :", "bleu, blanc, rouge", ["vert, blanc, rouge", "noir, rouge, jaune", "bleu, jaune, vert"], "Ce sont les trois couleurs nationales."),
    card("La Marseillaise est :", "l'hymne national français", ["un fleuve", "une monnaie", "un volcan"], "Un hymne national représente un pays."),
  ],
  napoleon: [
    card("Napoléon Bonaparte devient empereur en :", "1804", ["1789", "1815", "1914"], "Il est sacré empereur des Français en 1804."),
    card("Le Code civil est associé à :", "Napoléon", ["Jules Ferry", "Vercingétorix", "Louis XIV"], "Le Code civil organise de nombreuses règles de droit."),
    card("La bataille de Waterloo a lieu en :", "1815", ["1804", "1870", "1944"], "Waterloo marque la fin du pouvoir de Napoléon Ier."),
    card("Napoléon est exilé à la fin de sa vie sur :", "Sainte-Hélène", ["la Corse", "la Lune", "Madagascar"], "Il meurt à Sainte-Hélène en 1821."),
  ],
  jules_ferry: [
    card("Jules Ferry est associé à l'école :", "gratuite, laïque et obligatoire", ["payante seulement", "réservée aux adultes", "sans instituteurs"], "Les lois Ferry renforcent l'école publique."),
    card("Les lois scolaires de Jules Ferry datent surtout des années :", "1881-1882", ["1515-1516", "1789-1790", "1944-1945"], "Elles transforment l'école primaire."),
    card("Une école laïque est une école :", "neutre religieusement", ["ouverte seulement le dimanche", "sans règles", "réservée aux rois"], "La laïcité garantit la neutralité de l'école publique."),
    card("Jules Ferry a vécu sous la :", "Troisième République", ["Préhistoire", "Rome antique", "Cinquième République actuelle uniquement"], "Il est une figure politique de la Troisième République."),
  ],
  ww1: [
    card("La Première Guerre mondiale commence en :", "1914", ["1789", "1939", "1945"], "Elle dure de 1914 à 1918."),
    card("L'armistice de la Première Guerre mondiale est signé le :", "11 novembre 1918", ["14 juillet 1789", "8 mai 1945", "1er mai 1900"], "Le 11 novembre est une date commémorative en France."),
    card("Les soldats français de 1914-1918 sont souvent appelés :", "les Poilus", ["les Mousquetaires", "les Vikings", "les Gaulois"], "Ce surnom désigne les soldats des tranchées."),
    card("La guerre de tranchées est typique de :", "la Première Guerre mondiale", ["la Préhistoire", "la Renaissance", "l'Antiquité"], "Le front occidental est marqué par les tranchées."),
  ],
  ww2: [
    card("La Seconde Guerre mondiale commence en Europe en :", "1939", ["1914", "1789", "1969"], "L'invasion de la Pologne déclenche la guerre en Europe."),
    card("La libération de la France a lieu surtout en :", "1944", ["1815", "1918", "1989"], "Le débarquement de Normandie a lieu le 6 juin 1944."),
    card("L'armistice ou capitulation allemande est commémoré en France le :", "8 mai 1945", ["11 novembre 1918", "14 juillet 1789", "1er avril 1940"], "Le 8 mai marque la fin de la guerre en Europe."),
    card("Le général de Gaulle lance l'appel du :", "18 juin 1940", ["14 juillet 1789", "11 novembre 1918", "8 mai 1945"], "Cet appel invite à poursuivre le combat."),
  ],
  resistance: [
    card("La Résistance française lutte contre :", "l'occupation nazie", ["les saisons", "les cartes", "les volcans"], "Elle s'oppose à l'occupant et au régime de Vichy."),
    card("Jean Moulin est une grande figure de :", "la Résistance", ["la Renaissance", "la Rome antique", "la géométrie"], "Il contribue à unifier les mouvements de Résistance."),
    card("Un maquis est :", "un groupe de résistants cachés", ["un type de nuage", "une monnaie", "une mer"], "Les maquis se cachent souvent dans des zones difficiles d'accès."),
    card("La Résistance utilise parfois :", "des messages codés", ["des baguettes magiques", "des cartes Pokémon", "des dinosaures"], "Le secret protège les résistants."),
  ],
  esclavage: [
    card("L'esclavage consiste à :", "priver une personne de liberté", ["voter une loi", "construire une école", "dessiner une carte"], "Un esclave est considéré comme la propriété d'une autre personne."),
    card("En France, l'abolition définitive de l'esclavage date de :", "1848", ["1492", "1789", "1914"], "Victor Schoelcher joue un rôle important dans cette abolition."),
    card("La traite atlantique concerne surtout :", "la déportation d'Africains vers les Amériques", ["le commerce de planètes", "la mesure des montagnes", "la création d'alphabet"], "Des millions de personnes ont été déportées."),
    card("Abolir l'esclavage signifie :", "le supprimer par la loi", ["le cacher", "le mesurer", "le dessiner"], "L'abolition met fin légalement à l'esclavage."),
  ],
  moyen_age: [
    card("Le Moyen Âge commence traditionnellement en :", "476", ["1789", "1914", "1492"], "476 correspond à la chute de l'Empire romain d'Occident."),
    card("Un château fort sert surtout à :", "se défendre", ["nager", "cultiver du riz", "observer Mars"], "Les châteaux forts protègent un territoire."),
    card("Au Moyen Âge, un seigneur possède souvent :", "un fief", ["une fusée", "un smartphone", "une locomotive"], "Le fief est une terre confiée dans le système féodal."),
    card("Les chevaliers combattent souvent avec :", "une épée", ["un microscope", "un clavier", "un télescope"], "L'épée est une arme emblématique du chevalier."),
  ],
  prehistoire: [
    card("La Préhistoire se termine avec l'apparition de :", "l'écriture", ["l'électricité", "l'imprimerie", "Internet"], "L'écriture marque le début de l'Histoire."),
    card("Les peintures de Lascaux datent de :", "la Préhistoire", ["la Révolution", "la Renaissance", "la Seconde Guerre mondiale"], "Lascaux est une grotte ornée célèbre."),
    card("Les premiers humains utilisent des outils en :", "pierre taillée", ["plastique", "béton armé", "verre trempé"], "La pierre est un matériau essentiel à la Préhistoire."),
    card("Un archéologue étudie :", "les traces du passé", ["les prévisions météo", "les additions", "les chansons modernes"], "Les fouilles permettent de mieux connaître les sociétés anciennes."),
  ],
  antiquite: [
    card("L'Antiquité commence avec :", "l'écriture", ["Internet", "la Révolution", "la machine à vapeur"], "L'écriture marque le passage à l'Histoire."),
    card("Rome est une grande civilisation de :", "l'Antiquité", ["la Préhistoire", "la Renaissance", "le XXIe siècle"], "La Rome antique domine une grande partie du bassin méditerranéen."),
    card("Les Gaulois vivent surtout en :", "Gaule", ["Chine", "Australie", "Groenland"], "La Gaule correspond en partie à la France actuelle."),
    card("Jules César est un personnage de :", "la Rome antique", ["la Révolution française", "la Résistance", "la conquête spatiale"], "César est général et homme politique romain."),
  ],
  renaissance: [
    card("La Renaissance se développe en Europe aux :", "XVe et XVIe siècles", ["Ier et IIe siècles", "XVIIIe et XIXe siècles", "XXe et XXIe siècles"], "Elle suit la fin du Moyen Âge."),
    card("Léonard de Vinci est une figure de :", "la Renaissance", ["la Préhistoire", "la Seconde Guerre mondiale", "la Révolution industrielle"], "Il est artiste, savant et inventeur."),
    card("L'imprimerie en Europe est associée à :", "Gutenberg", ["Napoléon", "Pasteur", "Galilée uniquement"], "L'imprimerie diffuse plus largement les livres."),
    card("La Renaissance valorise notamment :", "les arts et les sciences", ["l'abandon des livres", "la disparition des villes", "l'interdiction de peindre"], "Les artistes et savants explorent de nouveaux savoirs."),
  ],
  contemporain: [
    card("La chute du mur de Berlin a lieu en :", "1989", ["1945", "1918", "1789"], "Elle symbolise la fin de la guerre froide en Europe."),
    card("L'ONU est créée en :", "1945", ["1815", "1914", "2001"], "L'Organisation des Nations unies vise à maintenir la paix."),
    card("La construction européenne commence après :", "la Seconde Guerre mondiale", ["la Préhistoire", "l'Antiquité", "la Renaissance"], "Elle cherche à favoriser la paix et la coopération."),
    card("Internet se développe fortement dans le monde à partir des années :", "1990", ["1790", "1890", "1490"], "Le Web devient accessible au grand public dans les années 1990."),
  ],
  departements: [
    card("Un département français est identifié par :", "un numéro", ["une note de musique", "une planète", "un animal obligatoire"], "Les départements ont des numéros comme 75 ou 13."),
    card("Paris porte le numéro de département :", "75", ["13", "59", "971"], "75 correspond à Paris."),
    card("Le département 13 correspond aux :", "Bouches-du-Rhône", ["Yvelines", "Nord", "Gironde"], "Marseille se trouve dans les Bouches-du-Rhône."),
    card("Les départements font partie de l'organisation :", "administrative", ["astronomique", "grammaticale", "chimique"], "Ils aident à organiser le territoire français."),
  ],
  regions: [
    card("La France métropolitaine est divisée en :", "régions", ["planètes", "syllabes", "molécules"], "Les régions regroupent plusieurs départements."),
    card("La Bretagne est :", "une région française", ["une capitale", "un fleuve", "un océan"], "La Bretagne se situe à l'ouest de la France."),
    card("La région Grand Est se situe plutôt :", "à l'est de la France", ["au sud de l'Espagne", "en Amérique", "dans l'océan Indien"], "Son nom donne un indice."),
    card("Une région peut gérer notamment :", "les lycées", ["les orbites des planètes", "les conjugaisons", "les volcans lunaires"], "Les régions ont des compétences importantes."),
  ],
  fleuves: [
    card("Un fleuve se jette dans :", "la mer ou l'océan", ["une école", "une montagne", "un cahier"], "Une rivière se jette souvent dans un autre cours d'eau."),
    card("La Seine traverse :", "Paris", ["Marseille", "Lyon uniquement", "Madrid"], "La Seine est le fleuve de Paris."),
    card("La Loire est le plus long fleuve de :", "France", ["Italie", "Brésil", "Japon"], "La Loire traverse une grande partie de la France."),
    card("Le Rhône se jette dans :", "la mer Méditerranée", ["la Manche", "l'océan Pacifique", "la mer Baltique"], "Le Rhône finit son cours dans le sud de la France."),
  ],
  europe: [
    card("La France se situe en :", "Europe", ["Océanie", "Antarctique", "Amérique du Sud"], "La France métropolitaine est en Europe de l'Ouest."),
    card("L'Union européenne regroupe :", "des pays qui coopèrent", ["des planètes", "des océans seulement", "des dinosaures"], "Les pays membres coopèrent dans plusieurs domaines."),
    card("La capitale de l'Italie est :", "Rome", ["Berlin", "Lisbonne", "Varsovie"], "Rome est aussi une ville historique majeure."),
    card("L'euro est utilisé par plusieurs pays de :", "l'Union européenne", ["la Lune", "l'Antarctique", "l'Empire romain"], "Tous les pays de l'UE n'utilisent pas l'euro, mais plusieurs oui."),
  ],
  monde: [
    card("La Terre compte :", "7 continents", ["2 continents", "12 continents", "50 continents"], "On distingue généralement 7 continents."),
    card("Le plus vaste océan est :", "l'océan Pacifique", ["l'océan Indien", "l'océan Arctique", "la mer Noire"], "Le Pacifique couvre une immense surface."),
    card("Le Sahara est :", "un désert", ["un fleuve", "une capitale", "une montagne européenne"], "Le Sahara est le plus grand désert chaud du monde."),
    card("L'équateur est :", "une ligne imaginaire", ["une chaîne de montagnes", "un océan", "un pays européen"], "Il sépare la Terre en deux hémisphères."),
  ],
  capitales: [
    card("La capitale de la France est :", "Paris", ["Lyon", "Marseille", "Nice"], "Paris est la capitale française."),
    card("La capitale de l'Espagne est :", "Madrid", ["Barcelone", "Lisbonne", "Rome"], "Madrid est au centre de l'Espagne."),
    card("La capitale de l'Allemagne est :", "Berlin", ["Munich", "Vienne", "Zurich"], "Berlin est la capitale allemande."),
    card("La capitale du Royaume-Uni est :", "Londres", ["Dublin", "Édimbourg", "Cardiff"], "Londres est la capitale du Royaume-Uni."),
  ],
  drapeaux: [
    card("Le drapeau français est :", "bleu, blanc, rouge", ["vert, blanc, rouge", "noir, rouge, jaune", "bleu, jaune, vert"], "Ce sont les couleurs nationales françaises."),
    card("Le drapeau du Japon représente notamment :", "un disque rouge", ["une étoile verte", "trois lunes", "une feuille d'érable"], "Le disque rouge évoque le soleil."),
    card("Le drapeau italien est :", "vert, blanc, rouge", ["bleu, blanc, rouge", "noir, jaune, rouge", "rouge et blanc"], "Il est composé de trois bandes verticales."),
    card("La feuille d'érable est sur le drapeau du :", "Canada", ["Brésil", "Maroc", "Portugal"], "C'est un symbole canadien connu."),
  ],
  relief: [
    card("Le relief décrit :", "les formes du terrain", ["les temps des verbes", "les planètes", "les notes de musique"], "Montagnes, plaines et vallées font partie du relief."),
    card("Les Alpes sont :", "une chaîne de montagnes", ["un océan", "un désert", "une capitale"], "Les Alpes traversent plusieurs pays européens."),
    card("Une plaine est une zone plutôt :", "plate", ["très profonde", "toujours volcanique", "sans habitants"], "Une plaine a peu de différences d'altitude."),
    card("L'altitude mesure :", "la hauteur par rapport au niveau de la mer", ["la longueur d'un mot", "la vitesse du vent seulement", "le nombre d'habitants"], "Elle s'exprime souvent en mètres."),
  ],
  mers: [
    card("La France métropolitaine est bordée par :", "la Manche", ["la mer Rouge", "la mer Caspienne", "la mer Morte"], "La Manche sépare la France du Royaume-Uni."),
    card("La mer Méditerranée se situe au :", "sud de la France", ["nord du Canada", "centre de l'Asie", "pôle Sud"], "Elle borde le sud de l'Europe."),
    card("Un océan est généralement :", "plus vaste qu'une mer", ["plus petit qu'un lac", "toujours gelé", "sans eau salée"], "Les océans couvrent la majeure partie de la Terre."),
    card("L'eau de mer est :", "salée", ["sucrée", "toujours potable", "sans minéraux"], "Le sel donne son goût à l'eau de mer."),
  ],
  climat: [
    card("Le climat correspond au temps observé :", "sur une longue période", ["pendant une minute", "dans un cahier", "uniquement la nuit"], "Le climat se mesure sur des années."),
    card("Un climat désertique est souvent :", "sec", ["très humide", "glacé partout", "sans soleil"], "Les déserts reçoivent peu de précipitations."),
    card("La météo décrit plutôt :", "le temps à court terme", ["les reliefs anciens", "les capitales", "les accords"], "La météo concerne aujourd'hui ou les prochains jours."),
    card("Le réchauffement climatique concerne :", "l'augmentation moyenne des températures", ["la rotation des planètes", "la ponctuation", "les multiplications"], "Il modifie les équilibres climatiques."),
  ],
  population: [
    card("La population d'un pays désigne :", "le nombre d'habitants", ["le nombre de montagnes", "la longueur des fleuves", "la couleur du drapeau"], "On compte les personnes qui vivent sur un territoire."),
    card("La densité de population compare les habitants à :", "la surface", ["la météo", "la langue", "la profondeur des mers"], "Elle s'exprime souvent en habitants par km²."),
    card("Une ville très peuplée compte :", "beaucoup d'habitants", ["aucun habitant", "seulement des volcans", "une seule maison obligatoire"], "La population mesure le nombre de personnes."),
    card("Un recensement sert à :", "compter la population", ["mesurer les étoiles", "corriger les verbes", "choisir un avatar"], "Il permet de connaître les habitants d'un territoire."),
  ],
  cartes: [
    card("Une carte sert à :", "se repérer", ["manger", "dormir", "respirer"], "Elle représente un espace."),
    card("La légende d'une carte explique :", "les symboles", ["les blagues", "les erreurs", "les nuages seulement"], "La légende aide à lire la carte."),
    card("Une échelle sur une carte indique :", "le rapport avec la réalité", ["la météo", "le nombre de joueurs", "le passé simple"], "Elle aide à estimer les distances."),
    card("Le nord est souvent indiqué par :", "une flèche ou une rose des vents", ["un point d'exclamation", "un accord", "une fraction"], "Cela aide à orienter la carte."),
  ],
  ressources: [
    card("Le pétrole est une ressource :", "fossile", ["magique", "vivante", "scolaire"], "Il se forme sur de très longues durées."),
    card("Une ressource renouvelable peut :", "se reconstituer", ["disparaître dès qu'on la nomme", "être seulement souterraine", "être toujours polluante"], "Le vent ou le soleil sont des exemples."),
    card("L'eau douce est une ressource :", "à protéger", ["infinie partout", "inutile", "toujours salée"], "Elle est indispensable aux êtres vivants."),
    card("Le recyclage permet de :", "réutiliser des matières", ["créer des volcans", "changer les capitales", "effacer les verbes"], "Il limite le gaspillage de ressources."),
  ],
  environnement: [
    card("Protéger l'environnement, c'est protéger :", "les milieux naturels", ["les fautes volontaires", "les scores seulement", "les écrans cassés"], "Les milieux naturels accueillent des êtres vivants."),
    card("La pollution peut venir de :", "déchets abandonnés", ["multiplications correctes", "phrases bien ponctuées", "cartes propres"], "Les déchets peuvent contaminer l'eau, l'air ou les sols."),
    card("La biodiversité désigne :", "la variété des êtres vivants", ["une seule espèce", "un calcul", "une capitale"], "Animaux, plantes et micro-organismes en font partie."),
    card("Économiser l'eau aide à :", "préserver une ressource", ["faire pousser les ordinateurs", "changer la grammaire", "agrandir les planètes"], "L'eau douce disponible est limitée."),
  ],
  mecanique: [
    card("En physique, une force peut :", "modifier le mouvement", ["corriger un accent", "écrire une capitale", "changer un prénom"], "Une force peut accélérer, freiner ou dévier un objet."),
    card("La vitesse se calcule avec :", "distance ÷ temps", ["temps ÷ masse", "masse + couleur", "aire × température"], "La vitesse indique la distance parcourue par unité de temps."),
    card("La gravité attire les objets vers :", "le centre de la Terre", ["le Soleil uniquement", "le nord", "la mer"], "La pesanteur est liée à la gravitation terrestre."),
    card("Un levier sert à :", "faciliter un effort", ["fabriquer du sucre", "conjuguer un verbe", "former une phrase"], "Un levier peut amplifier une force."),
  ],
  optique: [
    card("La lumière se propage en ligne droite dans :", "un milieu homogène", ["un dictionnaire", "un verbe", "une addition"], "C'est une propriété de base de l'optique."),
    card("Un miroir plan renvoie :", "une image", ["une odeur", "un son grave", "une fraction"], "La réflexion permet de voir une image."),
    card("Une lentille convergente peut :", "concentrer la lumière", ["arrêter le temps", "changer la masse", "créer un fleuve"], "Elle fait converger les rayons lumineux."),
    card("Un prisme peut décomposer :", "la lumière blanche", ["un nom propre", "une région", "un nombre entier"], "On observe alors plusieurs couleurs."),
  ],
  electricite: [
    card("Un circuit électrique fermé permet :", "le passage du courant", ["la disparition du fil", "la création de pluie", "la conjugaison"], "Le courant circule si le circuit est fermé."),
    card("Un interrupteur sert à :", "ouvrir ou fermer un circuit", ["mesurer une capitale", "écrire un pluriel", "faire une fraction"], "Il contrôle le passage du courant."),
    card("Une pile fournit :", "de l'énergie électrique", ["une carte", "une consonne", "une montagne"], "La pile alimente un circuit simple."),
    card("Un matériau conducteur laisse passer :", "le courant électrique", ["la ponctuation", "les planètes", "la grammaire"], "Les métaux sont souvent conducteurs."),
  ],
  thermodynamique: [
    card("La chaleur se transfère naturellement du corps :", "le plus chaud vers le plus froid", ["le plus froid vers le plus chaud uniquement", "le plus léger vers le plus lourd", "le plus bleu vers le plus rouge"], "La chaleur va spontanément du chaud vers le froid."),
    card("La température mesure :", "l'agitation thermique", ["la longueur d'un mot", "la capitale", "le nombre de verbes"], "Plus les particules s'agitent, plus la température augmente."),
    card("L'évaporation transforme un liquide en :", "gaz", ["solide", "métal", "pierre"], "L'eau peut devenir vapeur."),
    card("La fusion transforme un solide en :", "liquide", ["gaz directement", "bois", "lumière"], "La glace fond et devient de l'eau liquide."),
  ],
  physique_moderne: [
    card("La relativité est associée à :", "Albert Einstein", ["Jules César", "Molière", "Marco Polo"], "Einstein développe la relativité restreinte puis générale."),
    card("Un atome est constitué notamment d'un noyau et :", "d'électrons", ["de continents", "de verbes", "de fleuves"], "Les électrons entourent le noyau."),
    card("La lumière peut être décrite comme :", "onde et particule", ["un pays", "un organe", "une ponctuation"], "C'est la dualité onde-corpuscule."),
    card("La physique quantique étudie surtout :", "le monde microscopique", ["les capitales", "les accords", "les cartes routières"], "Elle décrit les phénomènes à très petite échelle."),
  ],
  systeme_solaire: [
    card("La planète la plus proche du Soleil est :", "Mercure", ["Mars", "Jupiter", "Neptune"], "Mercure est la première planète du Système solaire."),
    card("La Terre tourne autour :", "du Soleil", ["de Mars", "de la Lune seulement", "de Jupiter"], "Cette révolution dure environ un an."),
    card("La plus grande planète du Système solaire est :", "Jupiter", ["Mercure", "Vénus", "Mars"], "Jupiter est une géante gazeuse."),
    card("La Lune est :", "un satellite naturel de la Terre", ["une étoile", "une galaxie", "une comète obligatoire"], "Elle tourne autour de la Terre."),
  ],
  etoiles: [
    card("Le Soleil est :", "une étoile", ["une planète", "une comète", "un satellite"], "Il produit sa lumière."),
    card("Une étoile produit de l'énergie par :", "fusion nucléaire", ["conjugaison", "érosion", "photosynthèse uniquement"], "La fusion a lieu dans son cœur."),
    card("Une constellation est :", "un dessin apparent d'étoiles", ["un pays", "un fleuve", "une molécule"], "Les constellations aident à repérer le ciel."),
    card("Une supernova est :", "l'explosion d'une étoile", ["une carte", "une règle", "un pluriel"], "Certaines étoiles massives finissent ainsi."),
  ],
  galaxies: [
    card("Notre galaxie s'appelle :", "la Voie lactée", ["Andromède", "Sirius", "Orion"], "Le Soleil appartient à la Voie lactée."),
    card("Une galaxie contient :", "des milliards d'étoiles", ["un seul caillou", "un verbe", "un continent"], "Les galaxies sont d'immenses ensembles d'étoiles."),
    card("Andromède est :", "une galaxie voisine", ["une capitale", "un fleuve", "une planète du Système solaire"], "Elle est proche de la Voie lactée à l'échelle cosmique."),
    card("Les galaxies spirales ont souvent :", "des bras", ["des racines", "des plumes", "des roues"], "La Voie lactée est une galaxie spirale barrée."),
  ],
  exploration_spatiale: [
    card("Le premier humain dans l'espace est :", "Youri Gagarine", ["Neil Armstrong", "Galilée", "Copernic"], "Il vole autour de la Terre en 1961."),
    card("Le premier pas humain sur la Lune a lieu en :", "1969", ["1492", "1789", "2001"], "La mission Apollo 11 se pose sur la Lune en 1969."),
    card("Un rover est :", "un robot mobile d'exploration", ["un type de verbe", "une capitale", "un poisson"], "Des rovers explorent notamment Mars."),
    card("L'ISS est :", "une station spatiale", ["une mer", "un volcan", "un drapeau"], "La Station spatiale internationale orbite autour de la Terre."),
  ],
  phenomenes: [
    card("Une éclipse solaire se produit quand :", "la Lune passe devant le Soleil", ["Mars disparaît", "la Terre s'arrête", "une étoile tombe"], "La Lune cache alors tout ou partie du Soleil."),
    card("Une aurore polaire est liée :", "au vent solaire", ["aux accords", "aux fleuves", "aux volcans uniquement"], "Des particules solaires interagissent avec l'atmosphère."),
    card("Une comète possède souvent :", "une queue lumineuse", ["des feuilles", "des roues", "des fenêtres"], "La queue se forme près du Soleil."),
    card("Une étoile filante est souvent :", "un météore", ["une capitale", "un verbe", "une mer"], "Un petit corps brûle dans l'atmosphère."),
  ],
  anatomie: [
    card("Le cœur sert surtout à :", "faire circuler le sang", ["digérer les mots", "voir les couleurs", "entendre les sons"], "Le cœur pompe le sang."),
    card("Les poumons permettent :", "les échanges respiratoires", ["la conjugaison", "la photosynthèse humaine", "la digestion du fer"], "Ils échangent dioxygène et dioxyde de carbone."),
    card("Le cerveau appartient au système :", "nerveux", ["digestif", "solaire", "fluvial"], "Il reçoit et traite de nombreuses informations."),
    card("Les os forment :", "le squelette", ["le sang", "la peau", "la salive"], "Le squelette soutient le corps."),
  ],
  svt_animaux: [
    card("Un mammifère nourrit ses petits avec :", "du lait", ["du sable", "du métal", "de la lumière"], "Les mammifères produisent du lait."),
    card("Un animal herbivore mange surtout :", "des végétaux", ["des roches", "des planètes", "des verbes"], "Les herbivores consomment des plantes."),
    card("Les branchies servent à respirer :", "dans l'eau", ["dans le feu", "dans l'espace", "dans un cahier"], "Les poissons utilisent des branchies."),
    card("Un prédateur est un animal qui :", "chasse d'autres animaux", ["fabrique des cartes", "corrige les accords", "fait pousser des feuilles"], "Il capture des proies."),
  ],
  plantes: [
    card("La photosynthèse utilise :", "la lumière", ["le plastique", "le sel uniquement", "les accents"], "Les plantes utilisent la lumière pour produire leur matière."),
    card("Les racines absorbent surtout :", "l'eau et les sels minéraux", ["les étoiles", "les mots", "les continents"], "Elles puisent dans le sol."),
    card("Une graine peut donner :", "une nouvelle plante", ["un volcan", "un fleuve", "une planète"], "La germination commence quand les conditions sont favorables."),
    card("Les feuilles servent souvent à :", "capter la lumière", ["mesurer les capitales", "écrire les lois", "former des roches"], "Elles sont importantes pour la photosynthèse."),
  ],
  ecosystemes: [
    card("Un écosystème regroupe des êtres vivants et :", "leur milieu", ["une table", "un score", "un alphabet"], "Il comprend les relations entre les vivants et l'environnement."),
    card("Une chaîne alimentaire commence souvent par :", "un producteur", ["un ordinateur", "un roi", "un verbe"], "Les plantes sont souvent des producteurs."),
    card("La biodiversité est :", "la variété du vivant", ["une seule espèce", "un nombre premier", "une capitale"], "Elle inclut les espèces et les milieux."),
    card("Un équilibre écologique peut être perturbé par :", "la pollution", ["une bonne réponse", "un accent", "une addition"], "Les activités humaines peuvent modifier les milieux."),
  ],
  sante: [
    card("Se laver les mains aide à limiter :", "les microbes", ["les montagnes", "les étoiles", "les additions"], "Le lavage réduit la transmission de microbes."),
    card("Dormir suffisamment aide :", "le corps et le cerveau", ["les volcans", "les cartes", "les drapeaux"], "Le sommeil participe à la récupération."),
    card("Une alimentation équilibrée apporte :", "des nutriments variés", ["uniquement du sucre", "seulement de l'eau", "des planètes"], "Le corps a besoin de différents apports."),
    card("Faire de l'activité physique renforce :", "la santé", ["la ponctuation", "les capitales", "les mers"], "Bouger régulièrement est bénéfique."),
  ],
  terre_volcans_seismes: [
    card("Un volcan peut rejeter :", "de la lave", ["du papier", "du coton", "du sucre"], "La lave est de la roche en fusion sortie du volcan."),
    card("Un séisme est provoqué par :", "une rupture de roches en profondeur", ["une faute d'orthographe", "un changement de capitale", "une éclipse"], "Les plaques tectoniques accumulent des contraintes."),
    card("Les plaques tectoniques se déplacent :", "lentement", ["à la vitesse de la lumière", "jamais", "seulement le dimanche"], "Leur mouvement est très lent mais réel."),
    card("Le magma est de la roche :", "en fusion", ["gelée", "écrite", "vivante"], "Le magma se trouve sous la surface."),
  ],
  etats_matiere: [
    card("L'eau liquide devient solide quand elle :", "gèle", ["s'évapore", "brûle", "rouille"], "La solidification forme de la glace."),
    card("La vapeur d'eau est un état :", "gazeux", ["solide", "métallique", "vivant"], "Un gaz occupe tout l'espace disponible."),
    card("La fusion est le passage de :", "solide à liquide", ["liquide à solide", "gaz à solide", "couleur à son"], "La glace qui fond réalise une fusion."),
    card("La condensation transforme un gaz en :", "liquide", ["solide uniquement", "métal", "lumière"], "La vapeur peut redevenir eau liquide."),
  ],
  melanges: [
    card("Un mélange homogène semble :", "uniforme", ["toujours en morceaux", "toujours solide", "sans matière"], "On ne distingue pas les constituants à l'œil nu."),
    card("Pour séparer du sable et de l'eau, on peut utiliser :", "un filtre", ["un aimant à bois", "une lampe", "une règle"], "Le filtre retient le sable."),
    card("Le sel dissous dans l'eau forme :", "une solution", ["une galaxie", "un verbe", "un continent"], "Le sel se répartit dans l'eau."),
    card("La décantation permet de séparer :", "des constituants par dépôt", ["les planètes", "les accents", "les capitales"], "Les particules lourdes peuvent tomber au fond."),
  ],
  atomes: [
    card("Un atome contient un noyau et :", "des électrons", ["des continents", "des syllabes", "des océans"], "Les électrons entourent le noyau."),
    card("Les protons ont une charge :", "positive", ["négative", "nulle", "bleue"], "Le proton est chargé positivement."),
    card("Les neutrons ont une charge :", "nulle", ["positive", "négative", "rouge"], "Ils sont électriquement neutres."),
    card("Une molécule est un assemblage :", "d'atomes", ["de pays", "de verbes", "de fleuves"], "L'eau est une molécule composée d'atomes."),
  ],
  reactions_chimiques: [
    card("Une réaction chimique transforme :", "des réactifs en produits", ["des pays en villes", "des verbes en fleuves", "des étoiles en cartes"], "Les substances de départ deviennent de nouvelles substances."),
    card("La combustion a besoin généralement de :", "dioxygène", ["azote uniquement", "sable", "glace"], "Le dioxygène permet la combustion."),
    card("Une équation chimique doit respecter :", "la conservation des atomes", ["la longueur des mots", "la météo", "la capitale"], "Les atomes ne disparaissent pas."),
    card("Le vinaigre et le bicarbonate produisent notamment :", "du dioxyde de carbone", ["de l'or", "du fer pur", "du sel gemme uniquement"], "On observe souvent des bulles de gaz."),
  ],
  algorithmique: [
    card("Un algorithme est :", "une suite d'instructions", ["une planète", "une poésie", "un volcan"], "Il décrit des étapes pour résoudre un problème."),
    card("Une boucle sert à :", "répéter des instructions", ["effacer l'écran définitivement", "changer la langue", "mesurer une capitale"], "Les boucles évitent de réécrire les mêmes actions."),
    card("Une condition commence souvent par :", "si", ["toujours", "jamais", "hier"], "Si une condition est vraie, on exécute une action."),
    card("Un bug est :", "une erreur dans un programme", ["une capitale", "une montagne", "un adjectif"], "Un bug peut empêcher le programme de fonctionner."),
  ],
  logique: [
    card("Si A est vrai et B est vrai, alors 'A et B' est :", "vrai", ["faux", "inconnu", "une couleur"], "Le ET logique exige que les deux soient vrais."),
    card("Si A est vrai, 'non A' est :", "faux", ["vrai", "égal", "un pays"], "La négation inverse la valeur."),
    card("Un raisonnement logique doit éviter :", "les contradictions", ["les phrases", "les chiffres", "les exemples"], "Deux affirmations incompatibles posent problème."),
    card("Dans un tableau de vérité, on étudie :", "les valeurs vrai/faux", ["les capitales", "les mers", "les temps verbaux"], "La logique manipule des propositions."),
  ],
  securite_numerique: [
    card("Un bon mot de passe doit être :", "difficile à deviner", ["1234", "ton prénom seulement", "le mot passe"], "Un mot de passe fort protège les comptes."),
    card("Le phishing cherche à :", "voler des informations", ["apprendre les fleuves", "réparer un vélo", "faire une addition"], "Il imite souvent un message officiel."),
    card("Une mise à jour peut corriger :", "des failles de sécurité", ["la météo", "les saisons", "les capitales"], "Les mises à jour protègent les logiciels."),
    card("Il faut éviter de partager :", "ses mots de passe", ["une règle de grammaire", "un exercice", "une carte papier"], "Un mot de passe doit rester secret."),
  ],
  objets_techniques: [
    card("Un objet technique est créé pour :", "répondre à un besoin", ["former une planète", "changer la météo", "conjuguer un verbe"], "Il a une fonction d'usage."),
    card("La fonction d'usage d'un stylo est :", "écrire", ["chauffer", "voler", "mesurer le vent"], "Un stylo sert principalement à écrire."),
    card("Un cahier des charges décrit :", "les contraintes et besoins", ["les étoiles", "les accords", "les océans"], "Il guide la conception d'un objet."),
    card("Un prototype sert à :", "tester une idée", ["remplacer toutes les usines", "mesurer une capitale", "changer un drapeau"], "On l'utilise avant une version finale."),
  ],
  regles: [
    card("Une règle commune doit être :", "connue et respectée par tous", ["secrète", "changée toutes les minutes", "réservée à une seule personne"], "Une règle fonctionne si elle est claire et partagée."),
    card("Respecter une règle aide à :", "vivre ensemble", ["faire disparaître l'école", "changer les saisons", "créer une planète"], "Les règles organisent la vie collective."),
    card("Dans un jeu, les règles servent à :", "savoir comment jouer", ["cacher le score", "effacer les joueurs", "interdire de comprendre"], "Elles rendent le jeu équitable."),
    card("Une sanction peut exister quand :", "une règle est enfreinte", ["une réponse est juste", "un livre est ouvert", "une carte est dessinée"], "Elle rappelle l'importance de la règle."),
  ],
  droits: [
    card("Un droit est :", "ce qu'une personne peut légitimement faire ou recevoir", ["une faute", "un volcan", "un calcul"], "Les droits protègent les personnes."),
    card("Le droit à l'éducation signifie que les enfants doivent pouvoir :", "aller à l'école", ["ignorer toutes les règles", "acheter une planète", "changer d'âge"], "L'éducation est un droit fondamental."),
    card("La liberté d'expression permet :", "d'exprimer ses idées dans le respect de la loi", ["d'insulter sans limite", "de supprimer les autres droits", "de voler"], "Les libertés s'exercent avec des limites."),
    card("Les droits de l'enfant sont protégés par :", "une convention internationale", ["une recette", "un jeu vidéo", "une carte météo"], "La Convention internationale des droits de l'enfant existe depuis 1989."),
  ],
  institutions: [
    card("Le Parlement vote principalement :", "les lois", ["les saisons", "les montagnes", "les planètes"], "Les députés et sénateurs discutent et votent les lois."),
    card("Le maire dirige :", "une commune", ["une galaxie", "un océan", "un verbe"], "Il est élu au niveau municipal."),
    card("Un tribunal sert à :", "rendre la justice", ["mesurer les fleuves", "dessiner les drapeaux", "conjuguer"], "Les juges appliquent le droit."),
    card("La Constitution fixe :", "les règles principales de l'État", ["les menus de cantine", "les cartes routières", "les tables de multiplication"], "Elle organise les institutions."),
  ],
  ecologie: [
    card("L'écologie étudie les relations entre :", "les êtres vivants et leur milieu", ["les verbes et les sujets seulement", "les capitales et les drapeaux", "les notes et les couleurs"], "Elle observe le fonctionnement des écosystèmes."),
    card("Trier les déchets aide à :", "recycler", ["polluer plus", "changer la météo", "effacer les cartes"], "Le tri facilite le recyclage."),
    card("Éteindre une lumière inutile permet :", "d'économiser l'énergie", ["d'augmenter les déchets", "de changer les saisons", "de créer un fleuve"], "Les petits gestes réduisent la consommation."),
    card("Une espèce menacée risque :", "de disparaître", ["de devenir une capitale", "de se transformer en volcan", "de conjuguer"], "La protection des espèces est un enjeu écologique."),
  ],
  vivre_ensemble: [
    card("Vivre ensemble demande :", "du respect", ["des insultes", "des secrets obligatoires", "aucune écoute"], "Le respect aide chacun à trouver sa place."),
    card("Écouter les autres permet de :", "mieux se comprendre", ["gagner toujours", "effacer les règles", "changer le passé"], "L'écoute facilite le dialogue."),
    card("Un conflit peut se résoudre par :", "la discussion", ["le silence forcé", "la tricherie", "l'oubli des règles"], "Parler aide à chercher une solution."),
    card("La coopération consiste à :", "agir ensemble", ["tout faire seul", "refuser d'aider", "cacher les consignes"], "Coopérer permet d'atteindre un but commun."),
  ],
  harry_potter: [
    card("Harry Potter découvre qu'il est :", "un sorcier", ["un elfe", "un robot", "un roi moldu"], "Il apprend sa véritable identité avant d'aller à Poudlard."),
    card("L'école des sorciers s'appelle :", "Poudlard", ["Narnia", "Fondcombe", "Camelot"], "Poudlard accueille les jeunes sorciers britanniques."),
    card("La maison de Harry est :", "Gryffondor", ["Serpentard", "Poufsouffle", "Serdaigle"], "Le Choixpeau l'envoie à Gryffondor."),
    card("Le meilleur ami de Harry s'appelle :", "Ron Weasley", ["Drago Malefoy", "Dudley Dursley", "Viktor Krum"], "Ron devient l'un de ses plus proches amis."),
    card("Hermione Granger est connue pour :", "son intelligence et son travail", ["sa paresse", "son refus de lire", "sa magie noire"], "Hermione aide souvent le groupe grâce à ses connaissances."),
    card("Le sport joué sur des balais est :", "le Quidditch", ["le rugby", "le tennis", "le cricket"], "Le Quidditch se joue en volant."),
    card("Voldemort est aussi appelé :", "Celui-Dont-On-Ne-Doit-Pas-Prononcer-Le-Nom", ["Le Roi du Gondor", "Le Professeur Tournesol", "Le Capitaine Crochet"], "Beaucoup de sorciers craignent de prononcer son nom."),
    card("Le directeur de Poudlard au début de la saga est :", "Albus Dumbledore", ["Severus Rogue", "Rubeus Hagrid", "Sirius Black"], "Dumbledore dirige Poudlard dans les premiers tomes."),
  ],
  seigneur_anneaux: [
    card("Frodon doit détruire :", "l'Anneau unique", ["une baguette", "une couronne de fleurs", "un livre d'école"], "La quête centrale vise à détruire l'Anneau."),
    card("L'Anneau doit être détruit dans :", "la Montagne du Destin", ["la Comté", "Minas Tirith", "Fondcombe"], "Il doit retourner dans le feu où il a été forgé."),
    card("Frodon est :", "un Hobbit", ["un Elfe", "un Nain", "un Orc"], "Il vient de la Comté."),
    card("Gandalf est :", "un magicien", ["un Hobbit", "un dragon", "un roi du Rohan"], "Gandalf guide la Communauté."),
    card("Aragorn est l'héritier :", "d'Isildur", ["de Sauron", "de Bilbon", "de Smaug"], "Il est lié à la lignée des rois du Gondor."),
    card("Legolas appartient au peuple des :", "Elfes", ["Nains", "Hobbits", "Orques"], "Legolas est un archer elfe."),
    card("Gimli appartient au peuple des :", "Nains", ["Elfes", "Ents", "Hommes du Gondor"], "Gimli accompagne la Communauté."),
    card("Sauron cherche surtout à récupérer :", "l'Anneau unique", ["Excalibur", "la Coupe de feu", "un palantir cassé"], "Son pouvoir est lié à l'Anneau."),
  ],
};

function mathGenerated(tag, n) {
  const level = LEVELS[n % LEVELS.length];
  const difficulty = DIFFICULTY_BY_LEVEL[level];
  const tags = [level, "maths", tag];
  if (tag === "multiplication") {
    const a = 2 + (n % 11), b = 2 + ((n * 3) % 10), r = a * b;
    return [`Combien font ${a} × ${b} ?`, String(r), [String(r + a), String(r - b), String(r + 10)], `${a} × ${b} = ${r}.`, difficulty, tags];
  }
  if (tag === "division") {
    const b = 2 + (n % 10), r = 2 + ((n * 2) % 12), a = b * r;
    return [`Combien font ${a} ÷ ${b} ?`, String(r), [String(r + 1), String(Math.max(1, r - 1)), String(r + 3)], `${a} ÷ ${b} = ${r}.`, difficulty, tags];
  }
  if (tag === "fractions") {
    const den = 2 + (n % 8), num = 1 + (n % den);
    return [`Dans la fraction ${num}/${den}, le dénominateur est :`, String(den), [String(num), String(num + den), String(den + 1)], `Le dénominateur est le nombre placé sous la barre de fraction.`, difficulty, tags];
  }
  if (tag === "geometrie") {
    const l = 3 + (n % 10), w = 2 + ((n * 2) % 8), p = 2 * (l + w);
    return [`Un rectangle mesure ${l} cm sur ${w} cm. Quel est son périmètre ?`, `${p} cm`, [`${l * w} cm`, `${l + w} cm`, `${p + 4} cm`], `Périmètre = 2 × (${l} + ${w}) = ${p} cm.`, difficulty, tags];
  }
  if (tag === "decimaux") {
    const value = (12 + n) / 10;
    return [`${value.toFixed(1).replace(".", ",")} × 10 = ?`, String(Math.round(value * 10)), [value.toFixed(1).replace(".", ","), String(Math.round(value)), String(Math.round(value * 100))], `Multiplier par 10 décale la virgule vers la droite.`, difficulty, tags];
  }
  if (tag === "mesures") {
    const m = 1 + (n % 9);
    return [`${m} mètre${m > 1 ? "s" : ""} = combien de centimètres ?`, `${m * 100} cm`, [`${m * 10} cm`, `${m} cm`, `${m * 1000} cm`], `1 m = 100 cm, donc ${m} m = ${m * 100} cm.`, difficulty, tags];
  }
  if (tag === "calcul") {
    const a = 100 + n * 3, b = 20 + (n % 50), r = a + b;
    return [`Calcule : ${a} + ${b}`, String(r), [String(r - 10), String(r + 10), String(a - b)], `${a} + ${b} = ${r}.`, difficulty, tags];
  }
  if (tag === "numeration") {
    const tens = 1 + (n % 9), units = n % 10, value = tens * 10 + units;
    return [`Dans le nombre ${value}, le chiffre des dizaines est :`, String(tens), [String(units), String(value), String(tens + units)], `Le chiffre des dizaines indique le nombre de paquets de 10.`, difficulty, tags];
  }
  if (tag === "problemes") {
    const packs = 2 + (n % 6), each = 3 + (n % 7), total = packs * each;
    return [`${packs} boîtes contiennent ${each} crayons chacune. Combien y a-t-il de crayons ?`, String(total), [String(total + each), String(total - each), String(packs + each)], `On calcule ${packs} × ${each} = ${total}.`, difficulty, tags];
  }
  if (tag === "proportionnalite") {
    const a = 2 + (n % 5), price = a * 3, b = a * 2;
    return [`Si ${a} cahiers coûtent ${price} €, combien coûtent ${b} cahiers ?`, `${price * 2} €`, [`${price + 3} €`, `${price} €`, `${price * 3} €`], `${b} cahiers, c'est deux fois ${a}, donc le prix double.`, difficulty, tags];
  }
  if (tag === "statistiques") {
    const a = 8 + (n % 5), b = a + 2, c = a + 4, avg = a + 2;
    return [`Quelle est la moyenne de ${a}, ${b} et ${c} ?`, String(avg), [String(a), String(c), String(a + b + c)], `(${a} + ${b} + ${c}) ÷ 3 = ${avg}.`, difficulty, tags];
  }
  if (tag === "probabilites") {
    const faces = 4 + (n % 5);
    return [`Avec une roue équilibrée de ${faces} cases, la probabilité de tomber sur une case précise est :`, `1/${faces}`, [`1/2`, `${faces}/1`, `1/${faces + 1}`], `Il y a une case favorable sur ${faces}.`, difficulty, tags];
  }
  if (tag === "algebre") {
    const x = 2 + (n % 9), add = 1 + (n % 7), total = x + add;
    return [`Si x + ${add} = ${total}, alors x vaut :`, String(x), [String(x + add), String(add), String(total)], `On retire ${add} des deux côtés : x = ${x}.`, difficulty, tags];
  }
  return null;
}

const LANG_DATA = {
  anglais: { name: "anglais", hello: "Hello", thanks: "Thank you", bye: "Goodbye", cat: "Cat", dog: "Dog", red: "Red", one: "One", water: "Water", mother: "Mother", phrase: "I am hungry" },
  allemand: { name: "allemand", hello: "Hallo", thanks: "Danke", bye: "Auf Wiedersehen", cat: "Katze", dog: "Hund", red: "Rot", one: "Eins", water: "Wasser", mother: "Mutter", phrase: "Ich bin müde" },
  espagnol: { name: "espagnol", hello: "Hola", thanks: "Gracias", bye: "Adiós", cat: "Gato", dog: "Perro", red: "Rojo", one: "Uno", water: "Agua", mother: "Madre", phrase: "Tengo hambre" },
  italien: { name: "italien", hello: "Ciao", thanks: "Grazie", bye: "Arrivederci", cat: "Gatto", dog: "Cane", red: "Rosso", one: "Uno", water: "Acqua", mother: "Madre", phrase: "Ho fame" },
  chinois: { name: "chinois", hello: "Nǐ hǎo", thanks: "Xièxie", bye: "Zàijiàn", cat: "Māo", dog: "Gǒu", red: "Hóngsè", one: "Yī", water: "Shuǐ", mother: "Māma", phrase: "Wǒ ài nǐ" },
  arabe: { name: "arabe", hello: "Marhaba", thanks: "Shukran", bye: "Ma'a salama", cat: "Qitta", dog: "Kalb", red: "Ahmar", one: "Wahid", water: "Ma'", mother: "Umm", phrase: "Kayfa haluk?" },
  polonais: { name: "polonais", hello: "Cześć", thanks: "Dziękuję", bye: "Do widzenia", cat: "Kot", dog: "Pies", red: "Czerwony", one: "Jeden", water: "Woda", mother: "Matka", phrase: "Nie rozumiem" },
};

function languageCards(langId) {
  const l = LANG_DATA[langId] || LANG_DATA.anglais;
  return [
    card(`Comment dit-on "bonjour" en ${l.name} ?`, l.hello, [l.thanks, l.bye, l.water], `${l.hello} signifie bonjour ou salut.`, "salutations"),
    card(`Comment dit-on "merci" en ${l.name} ?`, l.thanks, [l.hello, l.bye, l.one], `${l.thanks} signifie merci.`, "salutations"),
    card(`Comment dit-on "au revoir" en ${l.name} ?`, l.bye, [l.hello, l.thanks, l.red], `${l.bye} signifie au revoir.`, "salutations"),
    card(`Comment dit-on "un" en ${l.name} ?`, l.one, [l.hello, l.red, l.water], `${l.one} correspond au nombre 1.`, "nombres"),
    card(`Comment dit-on "rouge" en ${l.name} ?`, l.red, [l.one, l.dog, l.water], `${l.red} signifie rouge.`, "couleurs"),
    card(`Comment dit-on "chat" en ${l.name} ?`, l.cat, [l.dog, l.mother, l.water], `${l.cat} signifie chat.`, "animaux"),
    card(`Comment dit-on "chien" en ${l.name} ?`, l.dog, [l.cat, l.one, l.hello], `${l.dog} signifie chien.`, "animaux"),
    card(`Comment dit-on "mère" en ${l.name} ?`, l.mother, [l.cat, l.dog, l.red], `${l.mother} signifie mère.`, "famille"),
    card(`Comment dit-on "eau" en ${l.name} ?`, l.water, [l.hello, l.one, l.cat], `${l.water} signifie eau.`, "nourriture"),
    card(`Quelle expression appartient au ${l.name} ?`, l.phrase, [l.hello + " " + l.water, l.red + " " + l.one, l.cat + " " + l.bye], `${l.phrase} est une phrase utile en ${l.name}.`, "phrases"),
  ];
}

function languageGenerated(tag, n, label) {
  const langId = LANG_DATA[tag] ? tag : "anglais";
  const cards = languageCards(langId);
  const selected = cards[n % cards.length];
  const tags = ["debutant", "langues", langId, selected.topic || "vocab"];
  if (!tags.includes("vocab")) tags.push("vocab");
  if (selected.text.includes("rouge")) tags.push("couleurs");
  if (selected.text.includes("un\"")) tags.push("nombres");
  if (selected.text.includes("chat") || selected.text.includes("chien")) tags.push("animaux");
  if (selected.text.includes("mère")) tags.push("famille");
  if (selected.text.includes("eau")) tags.push("nourriture");
  if (selected.text.includes("bonjour") || selected.text.includes("merci") || selected.text.includes("au revoir")) tags.push("salutations");
  if (selected.text.includes("expression")) tags.push("phrases");
  return [variantText(selected.text, label, n), selected.correct, selected.wrongs, selected.explanation, 1, [...new Set(tags)]];
}

function languageThemeGenerated(tag, n, label) {
  const langIds = Object.keys(LANG_DATA);
  const langId = langIds[n % langIds.length];
  const selected = languageCards(langId).find(c => c.topic === tag) || languageCards(langId)[n % languageCards(langId).length];
  const tags = ["debutant", "langues", langId, tag];
  if (tag !== "vocab") tags.push("vocab");
  return [variantText(selected.text, label, n), selected.correct, selected.wrongs, selected.explanation, 1, [...new Set(tags)]];
}

function generatedForTag(tag, n) {
  if (SUBJECT_BY_TAG[tag.id] === "maths") return mathGenerated(tag.id, n);
  if (tag.category === "langue") return languageGenerated(tag.id, n, tag.label);
  if (tag.category === "langue_theme") return languageThemeGenerated(tag.id, n, tag.label);

  const subject = SUBJECT_BY_TAG[tag.id] || "culture";
  const level = LEVELS[n % LEVELS.length];
  const difficulty = DIFFICULTY_BY_LEVEL[level];
  const cards = FACT_PACKS[tag.id] || factCards(tag.label);
  const selected = cards[n % cards.length];
  const tags = [level, subject, tag.id];
  return [variantText(selected.text, tag.label, n), selected.correct, selected.wrongs, selected.explanation, difficulty, tags];
}

export function themeBoosterQuestions(q, existingQuestions, target = 50) {
  const added = [];
  const countTag = (tagId) =>
    existingQuestions.filter(question => question.tags.includes(tagId)).length +
    added.filter(question => question.tags.includes(tagId)).length;

  for (const tag of TAGS) {
    if (!TARGET_CATEGORIES.has(tag.category)) continue;
    let n = 0;
    while (countTag(tag.id) < target && n < target * 3) {
      const generated = generatedForTag(tag, n);
      if (generated) {
        const [text, correct, wrongs, explanation, difficulty, tags] = generated;
        added.push(rotateQuestion(q, text, correct, wrongs, explanation, difficulty, tags, n));
      }
      n++;
    }
  }
  return added;
}
