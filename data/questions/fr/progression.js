export function progressionQuestions(q) {
  return [
    // PROGRESSION CP → LYCÉE — THÈMES EXISTANTS
    // ════════════════════════════════════════════════════════════════════
    
    // ── Maths — CP, CE1, CE2 ──
    q("CP : Combien font 2 + 3 ?", ["4","5","6","7"], 1, "2 + 3 = 5. Tu peux compter 2 doigts puis 3 doigts.", 1, ["cp","maths","calcul"]),
    q("CP : Quel nombre vient juste après 9 ?", ["8","9","10","11"], 2, "Après 9, on dit 10.", 1, ["cp","maths","calcul"]),
    q("CP : Quelle forme a 4 côtés égaux ?", ["Un cercle","Un carré","Un triangle","Une étoile"], 1, "Un carré a 4 côtés de même longueur.", 1, ["cp","maths","geometrie"]),
    q("CP : Combien y a-t-il de jours dans une semaine ?", ["5","6","7","8"], 2, "Une semaine compte 7 jours.", 1, ["cp","maths","mesures"]),
    q("CE1 : Combien font 14 + 8 ?", ["20","21","22","24"], 2, "14 + 8 = 22. On peut faire 14 + 6 = 20, puis +2 = 22.", 1, ["ce1","maths","calcul"]),
    q("CE1 : Combien font 5 × 2 ?", ["7","10","12","15"], 1, "5 × 2, c'est 5 + 5 = 10.", 1, ["ce1","maths","multiplication","calcul"]),
    q("CE1 : La moitié de 10 est :", ["2","4","5","8"], 2, "La moitié, c'est partager en 2 parts égales. 10 ÷ 2 = 5.", 1, ["ce1","maths","division","fractions"]),
    q("CE1 : Un triangle a combien de côtés ?", ["2","3","4","5"], 1, "Un triangle a toujours 3 côtés.", 1, ["ce1","maths","geometrie"]),
    q("CE2 : Combien font 6 × 4 ?", ["20","22","24","26"], 2, "6 × 4 = 24.", 1, ["ce2","maths","multiplication"]),
    q("CE2 : 21 ÷ 3 = ?", ["6","7","8","9"], 1, "21 ÷ 3 = 7 car 3 × 7 = 21.", 1, ["ce2","maths","division"]),
    q("CE2 : 1/2 signifie :", ["Une part sur deux","Deux parts sur une","Une part sur trois","Deux parts sur trois"], 0, "1/2 se lit 'un demi' : une part sur deux parts égales.", 1, ["ce2","maths","fractions"]),
    q("CE2 : 1,5 est plus grand que :", ["2","1,8","1,4","3"], 2, "Astuce : 1,5 est plus grand que 1,4 mais plus petit que 1,8 et 2.", 1, ["ce2","maths","decimaux"]),
    
    // ── Français / Orthographe — CP, CE1, CE2 ──
    q("CP : Quel mot commence par le son 'm' ?", ["soleil","maison","lapin","bateau"], 1, "'Maison' commence par le son 'm'.", 1, ["cp","ortho","vocabulaire"]),
    q("CP : Dans 'Le chat dort', le mot 'chat' désigne :", ["Une action","Un animal","Une couleur","Un nombre"], 1, "'Chat' est un nom : il désigne un animal.", 1, ["cp","ortho","grammaire","vocabulaire"]),
    q("CP : Quel est le pluriel de 'un ami' ?", ["des ami","des amis","des amies","des amix"], 1, "Au pluriel, on ajoute souvent un s : des amis.", 1, ["cp","ortho","pluriel"]),
    q("CE1 : Choisis la bonne phrase.", ["Je mange une pomme.","Je manges une pomme.","Je manger une pomme.","Je mangent une pomme."], 0, "Avec 'je', on écrit souvent le verbe en -e au présent : je mange.", 1, ["ce1","ortho","conjugaison"]),
    q("CE1 : Dans 'la petite souris', 'petite' est :", ["Un verbe","Un adjectif","Un nombre","Un pronom"], 1, "'Petite' donne une information sur la souris : c'est un adjectif.", 1, ["ce1","ortho","grammaire","accord"]),
    q("CE1 : Quel est le pluriel de 'un gâteau' ?", ["des gâteau","des gâteaus","des gâteaux","des gâteaues"], 2, "Les mots en -eau prennent souvent x au pluriel : des gâteaux.", 1, ["ce1","ortho","pluriel"]),
    q("CE2 : Choisis le bon accord.", ["Les fleurs rouge","Les fleurs rouges","Les fleur rouges","Les fleurs rougent"], 1, "Astuce : 'fleurs' est au pluriel, donc 'rouges' prend un s.", 1, ["ce2","ortho","accord","pluriel"]),
    q("CE2 : Quel mot est un verbe ?", ["danser","danseur","danse","dans"], 0, "'Danser' est un verbe à l'infinitif.", 1, ["ce2","ortho","grammaire","conjugaison"]),
    q("CE2 : Quel est le contraire de 'rapide' ?", ["vite","lent","grand","clair"], 1, "Le contraire de rapide est lent.", 1, ["ce2","ortho","vocabulaire"]),
    q("Lycée : Dans 'Bien qu'il soit tard, elle travaille', la subordonnée exprime :", ["La cause","La concession","La conséquence","Le but"], 1, "Raisonnement : 'bien que' introduit une concession, c'est-à-dire une idée opposée à ce qu'on pourrait attendre.", 5, ["lycee","ortho","grammaire"]),
    
    // ── Histoire — primaire vers lycée ──
    q("CP : Avant aujourd'hui, on parle souvent :", ["Du futur","Du passé","De demain","De plus tard"], 1, "L'histoire étudie ce qui s'est passé avant nous.", 1, ["cp","histoire","moyen_age"]),
    q("CE1 : Un château fort appartient surtout à quelle période ?", ["Le Moyen Âge","La Révolution","La Première Guerre mondiale","Aujourd'hui"], 0, "Les châteaux forts sont caractéristiques du Moyen Âge.", 1, ["ce1","histoire","moyen_age"]),
    q("CE2 : Comment appelle-t-on un paysan attaché à la terre d'un seigneur ?", ["Un serf","Un consul","Un député","Un pilote"], 0, "Astuce : au Moyen Âge, un serf dépendait d'un seigneur.", 1, ["ce2","histoire","moyen_age"]),
    q("CE2 : La prise de la Bastille est associée à :", ["La Révolution française","La Seconde Guerre mondiale","L'Empire romain","La conquête spatiale"], 0, "La prise de la Bastille, le 14 juillet 1789, est un événement majeur de la Révolution.", 1, ["ce2","histoire","revolution"]),
    q("CM2 : Napoléon Bonaparte a d'abord été :", ["Un astronaute","Un général","Un roi mérovingien","Un résistant"], 1, "Napoléon Bonaparte était un général avant de devenir Premier consul puis empereur.", 2, ["cm2","histoire","napoleon"]),
    q("CM2 : Les lois Jules Ferry concernent surtout :", ["L'école","Les trains","Les hôpitaux","Les ports"], 0, "Les lois Jules Ferry rendent l'école primaire gratuite, laïque et obligatoire.", 2, ["cm2","histoire","jules_ferry","republique"]),
    q("Collège : L'abolition définitive de l'esclavage en France date de :", ["1789","1815","1848","1905"], 2, "Méthode : il faut retenir 1848 pour l'abolition définitive de l'esclavage en France.", 3, ["college","histoire","esclavage","republique"]),
    q("Collège : La Première Guerre mondiale est aussi appelée :", ["La Grande Guerre","La Guerre froide","La guerre de Cent Ans","La guerre des Gaules"], 0, "Méthode : l'expression 'Grande Guerre' désigne la Première Guerre mondiale.", 3, ["college","histoire","ww1"]),
    q("Collège : Le général de Gaulle appelle à continuer le combat le :", ["11 novembre 1918","18 juin 1940","8 mai 1945","14 juillet 1789"], 1, "Méthode : l'appel du 18 juin 1940 invite les Français à poursuivre la résistance.", 3, ["college","histoire","ww2","resistance"]),
    q("Lycée : La Ve République renforce principalement :", ["Le rôle du président","Le pouvoir des seigneurs","Le pouvoir du clergé médiéval","Le retour de l'Empire"], 0, "Raisonnement : la Constitution de 1958 donne un rôle important au président de la République.", 5, ["lycee","histoire","republique"]),
    
    // ── Géographie — primaire vers lycée ──
    q("CP : Sur une carte, le bleu représente souvent :", ["Les montagnes","L'eau","Les villes","Les routes"], 1, "Le bleu sert souvent à représenter les mers, océans, fleuves ou lacs.", 1, ["cp","geo","mers","fleuves"]),
    q("CP : Paris est la capitale de :", ["L'Espagne","La France","L'Italie","L'Allemagne"], 1, "Paris est la capitale de la France.", 1, ["cp","geo","capitales","europe"]),
    q("CE1 : Un fleuve est un cours d'eau qui se jette dans :", ["Une école","Une montagne","La mer ou l'océan","Un nuage"], 2, "Un fleuve finit son parcours dans une mer ou un océan.", 1, ["ce1","geo","fleuves","mers"]),
    q("CE1 : Quel drapeau est celui de l'Italie ?", ["🇫🇷","🇮🇹","🇩🇪","🇪🇸"], 1, "Astuce : le drapeau italien est vert, blanc et rouge.", 1, ["ce1","geo","drapeaux","europe"]),
    q("CE2 : Une région française est :", ["Une partie du territoire","Une planète","Une langue","Un fleuve"], 0, "La France est découpée en régions administratives.", 1, ["ce2","geo","regions"]),
    q("CE2 : Les Alpes sont surtout connues pour :", ["Le relief montagneux","Les plages tropicales","Les déserts","Les volcans marins"], 0, "Les Alpes forment une grande chaîne de montagnes en Europe.", 1, ["ce2","geo","relief","europe"]),
    q("CM1 : Un département français possède :", ["Un numéro","Une planète","Une étoile","Un alphabet"], 0, "Les départements français ont un numéro, comme 69 pour le Rhône.", 2, ["cm1","geo","departements"]),
    q("Collège : L'Union européenne est un ensemble :", ["De pays européens qui coopèrent","De continents","De fleuves français","De montagnes seulement"], 0, "Méthode : l'Union européenne réunit des pays d'Europe qui coopèrent dans plusieurs domaines.", 3, ["college","geo","europe","monde"]),
    q("Collège : Quel océan sépare principalement l'Europe de l'Amérique ?", ["L'océan Indien","L'océan Atlantique","L'océan Pacifique","L'océan Arctique"], 1, "Méthode : l'océan Atlantique se trouve entre l'Europe et l'Amérique.", 3, ["college","geo","mers","monde"]),
    q("Lycée : La mondialisation désigne surtout :", ["L'intensification des échanges à l'échelle mondiale","La disparition de toutes les frontières naturelles","La rotation de la Terre","La formation des montagnes"], 0, "Raisonnement : la mondialisation correspond à l'intensification des flux de marchandises, capitaux, informations et personnes à l'échelle mondiale.", 5, ["lycee","geo","monde"]),
    
    // ── Physique — primaire vers lycée ──
    q("CP : Quel objet laisse passer beaucoup de lumière ?", ["Une vitre","Un mur","Une porte en bois","Un livre fermé"], 0, "Une vitre est transparente : elle laisse passer la lumière.", 1, ["cp","physique","optique"]),
    q("CP : Une pile peut servir à allumer :", ["Une ampoule","Une pierre","Une feuille","Une cuillère"], 0, "Une pile fournit de l'énergie électrique à une ampoule dans un circuit.", 1, ["cp","physique","electricite"]),
    q("CE1 : Quand on pousse une porte, on exerce :", ["Une force","Une couleur","Une étoile","Une note"], 0, "Pousser ou tirer, c'est exercer une force.", 1, ["ce1","physique","mecanique"]),
    q("CE1 : Un glaçon fond quand il reçoit :", ["Du froid","De la chaleur","De l'ombre","Du silence"], 1, "Le glaçon fond parce qu'il reçoit de la chaleur.", 1, ["ce1","physique","thermodynamique"]),
    q("CE2 : Dans un circuit simple, l'interrupteur sert à :", ["Ouvrir ou fermer le circuit","Changer la couleur du fil","Rendre la pile invisible","Peser l'ampoule"], 0, "L'interrupteur ouvre ou ferme le circuit électrique.", 1, ["ce2","physique","electricite"]),
    q("Collège : Le poids d'un objet dépend principalement de :", ["Sa masse et la gravité","Sa couleur","Sa température seulement","Son âge"], 0, "Méthode : le poids dépend de la masse de l'objet et de l'intensité de la gravité.", 3, ["college","physique","mecanique"]),
    q("Collège : Une image dans un miroir plan est :", ["Symétrique par rapport au miroir","Toujours plus chaude","Toujours plus lourde","Toujours réelle et projetable"], 0, "Méthode : le miroir plan donne une image symétrique par rapport au plan du miroir.", 3, ["college","physique","optique"]),
    q("Lycée : Dans la relation U = R × I, R désigne :", ["La résistance","La vitesse","La masse","La température"], 0, "Raisonnement : dans la loi d'Ohm, U est la tension, I l'intensité et R la résistance. L'unité associée à R est l'ohm, ce qui permet d'écarter les grandeurs mécaniques ou thermiques.", 5, ["lycee","physique","electricite"]),
    q("Lycée : Le rendement d'une machine est toujours :", ["Inférieur ou égal à 1","Supérieur à 10","Négatif","Sans unité et toujours nul"], 0, "Raisonnement : un rendement compare l'énergie utile à l'énergie reçue ; pour une machine réelle, il ne peut pas dépasser 1.", 5, ["lycee","physique","thermodynamique"]),
    q("Lycée : L'effet photoélectrique montre que la lumière peut se comporter comme :", ["Des particules appelées photons","Un liquide","Une force de frottement","Un son grave"], 0, "Raisonnement : l'effet photoélectrique s'explique avec des photons, des quanta de lumière.", 5, ["lycee","physique","physique_moderne","optique"]),
    
    // ── Astronomie — primaire vers lycée ──
    q("CP : La nuit, on voit souvent dans le ciel :", ["Des étoiles","Des poissons","Des arbres","Des trains"], 0, "Les étoiles sont visibles dans le ciel nocturne quand il fait assez sombre.", 1, ["cp","astro","etoiles"]),
    q("CP : La Terre tourne autour :", ["De la Lune","Du Soleil","De Mars","De Jupiter"], 1, "La Terre tourne autour du Soleil.", 1, ["cp","astro","systeme_solaire"]),
    q("CE1 : Quel astre éclaire la Terre le jour ?", ["La Lune","Le Soleil","Mars","Une comète"], 1, "Le Soleil nous éclaire pendant la journée.", 1, ["ce1","astro","etoiles","systeme_solaire"]),
    q("CE1 : Une fusée sert à aller :", ["Dans l'espace","Sous la table","Dans un livre","Au fond d'un sac"], 0, "Une fusée permet d'envoyer des objets ou des humains dans l'espace.", 1, ["ce1","astro","exploration_spatiale"]),
    q("CE2 : Une planète tourne autour :", ["D'une étoile","D'un cartable","D'une maison","D'un volcan"], 0, "Dans le Système solaire, les planètes tournent autour du Soleil, qui est une étoile.", 1, ["ce2","astro","systeme_solaire","etoiles"]),
    q("CE2 : Quand la Lune cache le Soleil, on observe :", ["Une éclipse de Soleil","Un arc-en-ciel","Un séisme","Une marée noire"], 0, "Astuce : une éclipse de Soleil se produit quand la Lune passe devant le Soleil depuis notre point de vue.", 1, ["ce2","astro","phenomenes"]),
    q("Collège : Les galaxies contiennent principalement :", ["Des étoiles, du gaz et des poussières","Des océans liquides","Des pays","Des volcans uniquement"], 0, "Méthode : une galaxie regroupe beaucoup d'étoiles avec du gaz et des poussières.", 3, ["college","astro","galaxies"]),
    q("Collège : Un télescope sert surtout à :", ["Observer des objets lointains","Mesurer la pluie","Faire du son","Peser les planètes"], 0, "Méthode : un télescope collecte la lumière d'objets lointains pour mieux les observer.", 3, ["college","astro","exploration_spatiale","etoiles"]),
    q("Lycée : Le décalage vers le rouge des galaxies lointaines indique que l'Univers :", ["Est en expansion","Est immobile","Se transforme en glace","Tourne autour de la Terre"], 0, "Raisonnement : le redshift des galaxies lointaines est un indice majeur de l'expansion de l'Univers.", 5, ["lycee","astro","galaxies","phenomenes"]),
    q("Lycée : Dans une étoile comme le Soleil, l'énergie est produite principalement par :", ["Fusion nucléaire","Combustion chimique","Contraction gravitationnelle seule","Fission de noyaux lourds"], 0, "Raisonnement : au cœur du Soleil, des noyaux légers fusionnent et libèrent de l'énergie. Ce n'est pas une combustion chimique : les températures et pressions permettent des réactions nucléaires.", 5, ["lycee","astro","etoiles","physique_moderne"]),
    
    // ── Langues — thèmes existants avec niveaux scolaires ──
    q("CP : En anglais, 'hello' veut dire :", ["Bonjour","Merci","Au revoir","Chat"], 0, "'Hello' signifie bonjour ou salut.", 1, ["cp","debutant","langues","anglais","salutations","vocab"]),
    q("CP : En anglais, 'one' veut dire :", ["Un","Deux","Trois","Dix"], 0, "'One' veut dire un.", 1, ["cp","debutant","langues","anglais","nombres"]),
    q("CE1 : En espagnol, 'rojo' veut dire :", ["Bleu","Rouge","Vert","Jaune"], 1, "'Rojo' signifie rouge.", 1, ["ce1","debutant","langues","espagnol","couleurs","vocab"]),
    q("CE1 : En allemand, 'Katze' veut dire :", ["Chien","Chat","Oiseau","Cheval"], 1, "'Katze' signifie chat.", 1, ["ce1","debutant","langues","allemand","animaux","vocab"]),
    q("CE2 : En italien, 'famiglia' veut dire :", ["Famille","Pain","Maison","Merci"], 0, "'Famiglia' signifie famille.", 1, ["ce2","debutant","langues","italien","famille","vocab"]),
    q("CE2 : En anglais, 'I like apples' veut dire :", ["J'aime les pommes","Je mange du pain","Je vois un chat","Je suis fatigué"], 0, "'I like' signifie 'j'aime'.", 1, ["ce2","debutant","langues","anglais","phrases","nourriture"]),
    q("Collège : En espagnol, '¿Dónde está la biblioteca?' signifie :", ["Où est la bibliothèque ?","Comment tu t'appelles ?","J'ai faim","Il fait froid"], 0, "Méthode : 'dónde' signifie où, et 'biblioteca' signifie bibliothèque.", 3, ["college","inter","langues","espagnol","phrases","vocab"]),
    q("Collège : En anglais, 'breakfast' désigne :", ["Le petit-déjeuner","Le dîner","Une couleur","Une question"], 0, "Méthode : 'breakfast' signifie petit-déjeuner.", 3, ["college","inter","langues","anglais","nourriture","vocab"]),
    q("Lycée : En anglais, 'Although it was raining, we went out' exprime :", ["Une concession","Une addition simple","Une obligation","Une comparaison de taille"], 0, "Raisonnement : 'although' signifie 'bien que' et introduit une concession : l'action principale a lieu malgré l'obstacle exprimé dans la subordonnée.", 5, ["lycee","inter","langues","anglais","phrases"]),
    q("Lycée : En allemand, 'weil' introduit généralement :", ["Une cause","Une opposition simple","Une condition irréelle","Une conséquence sans verbe conjugué"], 0, "Raisonnement : 'weil' signifie souvent 'parce que' et introduit une cause ; dans la subordonnée allemande, le verbe conjugué se place généralement à la fin.", 5, ["lycee","inter","langues","allemand","phrases"]),
  ];
}
