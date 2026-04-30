// Each question: { id, q, choices, answer, explanation, difficulty, tags: string[] }

let _id = 1;
const q = (question, choices, answer, explanation, difficulty, tags) => ({
  id: _id++, q: question, choices, answer, explanation, difficulty, tags,
});

export const ALL_QUESTIONS = [

  // ════════════════════════════════════════════════════════════════════
  // MATHS
  // ════════════════════════════════════════════════════════════════════
  q("Combien font 7 × 8 ?", ["54","56","63","48"], 1, "7 × 8 = 56. Astuce : 7 × 4 = 28, puis × 2 = 56.", 1, ["cm1","maths","multiplication"]),
  q("Combien font 9 × 6 ?", ["54","48","63","45"], 0, "9 × 6 = 54. Vérifie : 6 × 10 − 6 = 54.", 1, ["cm1","maths","multiplication"]),
  q("9 × 9 = ?", ["72","81","90","99"], 1, "9 × 9 = 81. Astuce : 10 × 9 − 9 = 81.", 1, ["cm1","maths","multiplication"]),
  q("Quel est le double de 34 ?", ["58","64","68","72"], 2, "Le double = × 2. 34 × 2 = 68.", 1, ["cm1","maths","multiplication","calcul"]),
  q("6 × 7 = ?", ["36","42","48","54"], 1, "6 × 7 = 42.", 1, ["cm1","maths","multiplication"]),
  q("Combien font 12 × 8 ?", ["86","96","104","92"], 1, "12 × 8 = 80 + 16 = 96.", 2, ["cm2","maths","multiplication","calcul"]),
  q("Combien font 15 × 4 ?", ["54","60","65","70"], 1, "15 × 4 = 30 × 2 = 60.", 2, ["cm2","maths","multiplication"]),
  q("36 ÷ 4 = ?", ["7","8","9","10"], 2, "36 ÷ 4 = 9 car 4 × 9 = 36.", 1, ["cm1","maths","division"]),
  q("48 ÷ 6 = ?", ["6","7","8","9"], 2, "48 ÷ 6 = 8 car 6 × 8 = 48.", 1, ["cm1","maths","division"]),
  q("Quel est le quart de 48 ?", ["10","12","14","16"], 1, "Le quart = ÷ 4. 48 ÷ 4 = 12.", 1, ["cm1","maths","division","fractions"]),
  q("72 ÷ 9 = ?", ["7","8","9","6"], 1, "72 ÷ 9 = 8 car 9 × 8 = 72.", 1, ["cm1","maths","division"]),
  q("84 ÷ 7 = ?", ["10","11","12","13"], 2, "84 ÷ 7 = 12 car 7 × 12 = 84.", 2, ["cm2","maths","division"]),
  q("Quel est le PGCD de 12 et 18 ?", ["3","4","6","9"], 2, "Diviseurs de 12 : 1,2,3,4,6,12. Diviseurs de 18 : 1,2,3,6,9,18. Le plus grand commun est 6.", 3, ["cm2","maths","division"]),
  q("Quelle fraction est égale à une demie ?", ["1/3","2/5","1/2","3/6"], 2, "1/2 = 'un sur deux'. 3/6 vaut aussi 1/2 mais 1/2 est la fraction simplifiée.", 1, ["cm1","maths","fractions"]),
  q("0,5 est égal à quelle fraction ?", ["1/4","1/3","1/2","1/5"], 2, "0,5 = 5/10 = 1/2.", 1, ["cm2","maths","fractions","decimaux"]),
  q("0,75 = ?", ["1/4","3/4","7/5","7/10"], 1, "0,75 = 75/100 = 3/4. On simplifie en divisant par 25.", 3, ["cm2","maths","fractions","decimaux"]),
  q("Quel est le plus grand : 3/4 ou 2/3 ?", ["3/4","2/3","Ils sont égaux","Impossible à dire"], 0, "3/4 = 9/12 et 2/3 = 8/12. Donc 3/4 > 2/3.", 2, ["cm2","maths","fractions"]),
  q("Combien font 25 % de 80 ?", ["15","20","25","40"], 1, "25 % = 1/4. Donc 80 ÷ 4 = 20.", 2, ["cm2","maths","fractions","calcul"]),
  q("Un rectangle mesure 6 cm × 4 cm. Quel est son périmètre ?", ["24 cm","20 cm","10 cm","12 cm"], 1, "Périmètre = 2 × (6 + 4) = 20 cm.", 1, ["cm1","maths","geometrie"]),
  q("Un carré de côté 7 cm a un périmètre de ?", ["14 cm","21 cm","28 cm","49 cm"], 2, "Périmètre d'un carré = 4 × côté = 28 cm.", 1, ["cm2","maths","geometrie"]),
  q("L'aire d'un rectangle 9 cm × 5 cm est ?", ["28 cm²","40 cm²","45 cm²","50 cm²"], 2, "Aire = longueur × largeur = 9 × 5 = 45 cm².", 2, ["cm2","maths","geometrie"]),
  q("2³ = ?", ["6","8","9","12"], 1, "2³ = 2 × 2 × 2 = 8.", 2, ["cm2","maths","geometrie","calcul"]),
  q("Combien y a-t-il de cm dans 1 m ?", ["10","100","1000","50"], 1, "1 mètre = 100 centimètres.", 1, ["cm1","maths","mesures"]),
  q("Combien y a-t-il de mm dans 1 cm ?", ["5","10","100","1000"], 1, "1 centimètre = 10 millimètres.", 1, ["cm1","maths","mesures"]),
  q("1 heure 45 min = combien de minutes ?", ["105","100","115","145"], 0, "1h = 60 min. 60 + 45 = 105 min.", 2, ["cm2","maths","mesures","calcul"]),
  q("La moitié de 3,6 est ?", ["1,3","1,6","1,8","2,1"], 2, "3,6 ÷ 2 = 1,8.", 2, ["cm2","maths","mesures","decimaux"]),
  q("125 + 267 = ?", ["382","392","402","372"], 1, "125 + 267 = 392.", 1, ["cm1","maths","calcul"]),
  q("500 − 237 = ?", ["253","263","273","243"], 1, "500 − 237 = 263. Vérifie : 237 + 263 = 500.", 1, ["cm1","maths","calcul"]),
  q("3,7 × 10 = ?", ["0,37","3,70","37","370"], 2, "× 10 déplace la virgule vers la droite : 3,7 → 37.", 1, ["cm2","maths","decimaux","calcul"]),
  q("Quel nombre est un multiple de 3 ?", ["16","22","27","31"], 2, "Pour 27 : 2+7=9, et 9÷3=3. ✓", 2, ["cm1","maths","calcul"]),

  // ════════════════════════════════════════════════════════════════════
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
  // HISTOIRE
  // ════════════════════════════════════════════════════════════════════
  q("La Révolution française a eu lieu en :", ["1689","1789","1830","1848"], 1, "La Révolution débute en 1789 avec la prise de la Bastille le 14 juillet.", 1, ["cm1","histoire","revolution"]),
  q("Qui était Louis XVI ?", ["Le roi guillotiné pendant la Révolution","Le premier consul","Un général de la Grande Armée","Le fondateur de la République"], 0, "Louis XVI fut guillotiné le 21 janvier 1793 place de la Révolution.", 1, ["cm1","histoire","revolution"]),
  q("Qu'est-ce que la prise de la Bastille le 14 juillet 1789 ?", ["Une victoire militaire sur l'Angleterre","L'assaut d'une prison symbole du pouvoir royal","La signature de la Constitution","L'exécution du roi"], 1, "La Bastille symbolisait le pouvoir absolu. Son assaut est fêté chaque 14 juillet.", 1, ["cm1","histoire","revolution"]),
  q("Que proclame la Déclaration des droits de l'homme de 1789 ?", ["L'abolition de l'esclavage","Que les hommes naissent libres et égaux en droits","Le droit de vote des femmes","La noblesse héréditaire"], 1, "La DDHC proclame que 'les hommes naissent et demeurent libres et égaux en droits'.", 1, ["cm1","histoire","revolution","republique"]),
  q("Quelle est la devise de la République française ?", ["Dieu, Roi, Patrie","Liberté, Égalité, Fraternité","Travail, Famille, Patrie","Un pour tous, tous pour un"], 1, "'Travail, Famille, Patrie' était la devise de Vichy (1940–44).", 1, ["cm1","histoire","revolution","republique"]),
  q("Qu'est-ce que le Tiers État avant la Révolution ?", ["La noblesse","Le clergé","L'ensemble du peuple non-noble et non-religieux","Les soldats du roi"], 2, "Clergé (1er), noblesse (2e), Tiers État (97 % de la population).", 3, ["cm1","histoire","revolution"]),
  q("Napoléon Bonaparte est devenu Empereur en :", ["1799","1802","1804","1815"], 2, "Napoléon se sacre Empereur le 2 décembre 1804 à Notre-Dame.", 2, ["cm1","histoire","napoleon"]),
  q("Qu'est-ce que le Code civil napoléonien ?", ["Un code de lois militaires","Un recueil de lois civiles qui unifie le droit français","La Constitution de la Ve République","Les lois Jules Ferry"], 1, "Le Code civil (1804) unifie les lois civiles françaises, encore en vigueur aujourd'hui.", 3, ["cm1","histoire","napoleon","republique"]),
  q("Qui était Jules Ferry ?", ["Un général napoléonien","Le ministre qui a rendu l'école gratuite et obligatoire","Le premier président de la IIIe République","Un explorateur colonial"], 1, "Ses lois de 1881–1882 instaurent l'école primaire gratuite, laïque et obligatoire.", 1, ["cm1","histoire","jules_ferry","republique"]),
  q("En quelle année l'école est-elle devenue obligatoire en France ?", ["1789","1830","1882","1905"], 2, "La loi du 28 mars 1882 rend l'école primaire obligatoire pour les 6–13 ans.", 1, ["cm1","histoire","jules_ferry","republique"]),
  q("La loi de séparation de l'Église et de l'État a été adoptée en :", ["1882","1889","1905","1920"], 2, "La loi du 9 décembre 1905 établit la laïcité comme principe fondamental.", 3, ["cm1","histoire","republique","jules_ferry"]),
  q("Qui a aboli l'esclavage définitivement en France en 1848 ?", ["Napoléon Bonaparte","Victor Schœlcher","Jules Ferry","Louis XVI"], 1, "Victor Schœlcher fait adopter le décret du 27 avril 1848. Napoléon l'avait rétabli en 1802.", 2, ["cm1","histoire","republique","esclavage"]),
  q("Quand commence le Moyen Âge ?", ["En 476 avec la chute de Rome","En 800 avec Charlemagne","En 1066 avec la bataille de Hastings","En 1215 avec la Magna Carta"], 0, "Le Moyen Âge commence en 476 (chute de Rome) et se termine en 1492 (découverte de l'Amérique).", 2, ["cm1","histoire","moyen_age"]),
  q("Qui était Charlemagne ?", ["Un roi de France","Un roi des Francs couronné Empereur d'Occident en 800","Un pape célèbre","Un général gaulois"], 1, "Charlemagne est couronné Empereur d'Occident le 25 décembre 800 à Rome.", 1, ["cm1","histoire","moyen_age"]),
  q("Qu'est-ce qu'un serf au Moyen Âge ?", ["Un soldat de l'armée royale","Un paysan attaché à la terre d'un seigneur","Un moine copiste","Un marchand itinérant"], 1, "Les serfs dépendaient d'un seigneur, payaient des taxes et ne pouvaient quitter ses terres.", 2, ["cm1","histoire","moyen_age"]),
  q("Qui était Jeanne d'Arc ?", ["Une reine de France","Une paysanne qui a mené des armées pour libérer la France des Anglais","La fille de Charlemagne","Une abbesse célèbre"], 1, "Jeanne d'Arc (1412–1431) conduit les armées françaises et fait sacrer Charles VII. Elle est brûlée à Rouen.", 1, ["cm1","histoire","moyen_age"]),
  q("La Première Guerre mondiale s'est déroulée de :", ["1870 à 1871","1914 à 1918","1939 à 1945","1940 à 1944"], 1, "La Grande Guerre (1914–1918) fait plus de 18 millions de morts.", 1, ["cm2","histoire","ww1"]),
  q("Quel événement a déclenché la Première Guerre mondiale ?", ["L'invasion de la Pologne","L'assassinat de l'archiduc François-Ferdinand","La révolution russe","La chute du mur de Berlin"], 1, "L'assassinat de François-Ferdinand à Sarajevo le 28 juin 1914 déclenche la guerre.", 1, ["cm2","histoire","ww1"]),
  q("Que commémore-t-on le 11 novembre ?", ["La fin de la Seconde Guerre mondiale","L'armistice de la Première Guerre mondiale","Le débarquement en Normandie","La libération de Paris"], 1, "L'armistice du 11 novembre 1918 à 11h met fin à la Grande Guerre.", 1, ["cm2","histoire","ww1"]),
  q("La Seconde Guerre mondiale a pris fin en :", ["1943","1944","1945","1946"], 2, "En Europe le 8 mai 1945 (capitulation de l'Allemagne), en Asie le 2 septembre 1945.", 1, ["cm2","histoire","ww2"]),
  q("Qui dirigeait le gouvernement de Vichy ?", ["Charles de Gaulle","Georges Clemenceau","Philippe Pétain","Jean Moulin"], 2, "Pétain dirige l'État français (Vichy) de 1940 à 1944 et collabore avec l'occupant nazi.", 1, ["cm2","histoire","ww2"]),
  q("Qu'a fait Charles de Gaulle le 18 juin 1940 ?", ["Signé l'armistice","Lancé un appel à la résistance depuis Londres","Libéré Paris","Fondé la Ve République"], 1, "'La France a perdu une bataille, mais elle n'a pas perdu la guerre !'", 1, ["cm2","histoire","ww2","resistance"]),
  q("Le débarquement en Normandie a eu lieu le :", ["6 juin 1942","6 juin 1943","6 juin 1944","8 mai 1945"], 2, "Le 6 juin 1944 (Jour J), les Alliés débarquent sur 5 plages de Normandie.", 1, ["cm2","histoire","ww2"]),
  q("Qui était Jean Moulin ?", ["Un général allié","Le chef unifié de la Résistance intérieure","Le président du Conseil sous Vichy","Un résistant fusillé à Paris"], 1, "Jean Moulin crée le CNR en mai 1943. Arrêté par la Gestapo, il meurt sous la torture en juillet 1943.", 2, ["cm2","histoire","resistance","ww2"]),
  q("Qu'est-ce que la ligne Maginot ?", ["Une ligne de chemin de fer militaire","Une fortification à la frontière franco-allemande","La frontière entre zone libre et zone occupée","Un réseau de tranchées"], 1, "Construite 1929–1936, la ligne Maginot fut contournée par les Ardennes en mai 1940.", 3, ["cm2","histoire","ww2"]),
  q("La Ve République française a été fondée en :", ["1945","1946","1958","1968"], 2, "La Ve République est fondée en 1958 à l'initiative de De Gaulle, lors de la crise algérienne.", 2, ["cm2","histoire","ww2","republique"]),

  // ════════════════════════════════════════════════════════════════════
  // GÉOGRAPHIE — FRANCE
  // ════════════════════════════════════════════════════════════════════
  q("Quel est le plus long fleuve de France ?", ["La Seine","Le Rhône","La Loire","La Garonne"], 2, "La Loire (1 006 km) naît au mont Gerbier-de-Jonc et se jette dans l'Atlantique à Saint-Nazaire.", 1, ["cm1","geo","fleuves"]),
  q("Quel océan borde la côte ouest de la France ?", ["Pacifique","Indien","Arctique","Atlantique"], 3, "L'Atlantique borde toute la façade ouest, de Dunkerque jusqu'à Hendaye.", 1, ["cm1","geo","mers","fleuves"]),
  q("Quelle mer borde le sud-est de la France ?", ["Mer du Nord","Manche","Mer Méditerranée","Mer Adriatique"], 2, "La Méditerranée borde le sud-est. La Manche est au nord.", 1, ["cm1","geo","mers"]),
  q("Par quelles villes passe le Rhône avant de se jeter en mer ?", ["Lyon et Avignon","Paris et Lyon","Bordeaux et Toulouse","Grenoble et Nice"], 0, "Le Rhône passe par Lyon puis Avignon avant de se jeter en Méditerranée en Camargue.", 2, ["cm1","geo","fleuves"]),
  q("Combien y a-t-il de régions en France métropolitaine ?", ["13","16","18","22"], 0, "Depuis 2016 : 13 régions métropolitaines. Avec l'outre-mer : 18 au total.", 2, ["cm1","geo","regions"]),
  q("Dans quelle région se trouve Lyon ?", ["Provence-Alpes-Côte d'Azur","Occitanie","Auvergne-Rhône-Alpes","Bourgogne-Franche-Comté"], 2, "Lyon est la préfecture de la région Auvergne-Rhône-Alpes.", 1, ["cm1","geo","regions"]),
  q("Quel est le chef-lieu du département du Rhône ?", ["Grenoble","Saint-Étienne","Lyon","Villefranche-sur-Saône"], 2, "Lyon est le chef-lieu du Rhône (69) et 3e ville de France.", 1, ["cm1","geo","departements"]),
  q("Quel est le chef-lieu des Bouches-du-Rhône ?", ["Toulon","Nice","Marseille","Aix-en-Provence"], 2, "Marseille (13) est la 2e ville de France et le 1er port de Méditerranée.", 1, ["cm1","geo","departements"]),
  q("Quel est le chef-lieu de la Haute-Garonne ?", ["Pau","Bordeaux","Montpellier","Toulouse"], 3, "Toulouse (31), 4e ville de France, est la 'Ville Rose' et capitale de l'Occitanie.", 1, ["cm1","geo","departements"]),
  q("Quel est le chef-lieu du Nord ?", ["Amiens","Rouen","Lille","Reims"], 2, "Lille est le chef-lieu du Nord (59) et de la région Hauts-de-France.", 1, ["cm1","geo","departements"]),
  q("Quel est le chef-lieu du Bas-Rhin ?", ["Colmar","Metz","Strasbourg","Mulhouse"], 2, "Strasbourg (67) est le siège du Parlement européen.", 2, ["cm2","geo","departements"]),
  q("Quel est le chef-lieu de la Gironde ?", ["Bayonne","Bordeaux","Pau","Périgueux"], 1, "Bordeaux (33) est préfecture de Nouvelle-Aquitaine, célèbre pour ses vins.", 1, ["cm2","geo","departements"]),
  q("Quel est le chef-lieu de la Seine-Maritime ?", ["Le Havre","Rouen","Caen","Cherbourg"], 1, "Rouen (76). Le Havre est une sous-préfecture. Caen = chef-lieu du Calvados.", 2, ["cm2","geo","departements"]),
  q("Quel est le chef-lieu du Finistère ?", ["Brest","Lorient","Quimper","Rennes"], 2, "Quimper (29). Brest et Lorient sont des sous-préfectures. Rennes = Ille-et-Vilaine.", 2, ["cm2","geo","departements"]),
  q("Quel est le chef-lieu du Var ?", ["Nice","Marseille","Toulon","Cannes"], 2, "Toulon (83) est une importante base navale. Nice = Alpes-Maritimes.", 1, ["cm2","geo","departements"]),
  q("Quel est le chef-lieu du Puy-de-Dôme ?", ["Le Puy-en-Velay","Moulins","Clermont-Ferrand","Aurillac"], 2, "Clermont-Ferrand (63). Le Puy = Haute-Loire, Moulins = Allier, Aurillac = Cantal.", 2, ["cm2","geo","departements"]),
  q("Quel est le plus haut sommet de France ?", ["Le Puy de Dôme","Le Mont-Ventoux","Le Mont-Blanc","Le Pic du Midi"], 2, "Le Mont-Blanc (4 808 m) est aussi le plus haut sommet d'Europe occidentale.", 1, ["cm2","geo","relief"]),
  q("Dans quel département se trouve le Mont-Saint-Michel ?", ["Finistère","Calvados","Manche","Ille-et-Vilaine"], 2, "Le Mont-Saint-Michel est dans la Manche (50), classé à l'UNESCO.", 3, ["cm2","geo","relief","departements"]),

  // ════════════════════════════════════════════════════════════════════
  // GÉOGRAPHIE — CAPITALES DU MONDE
  // ════════════════════════════════════════════════════════════════════
  q("Quelle est la capitale de la France ?", ["Lyon","Marseille","Paris","Bordeaux"], 2, "Paris est la capitale de la France, traversée par la Seine, en Île-de-France.", 1, ["geo","capitales","europe","regions"]),
  q("Quelle est la capitale de l'Allemagne ?", ["Munich","Hambourg","Francfort","Berlin"], 3, "Berlin est la capitale de l'Allemagne depuis la réunification en 1990.", 1, ["geo","capitales","europe"]),
  q("Quelle est la capitale de l'Espagne ?", ["Barcelone","Séville","Madrid","Valence"], 2, "Madrid est la capitale et plus grande ville d'Espagne.", 1, ["geo","capitales","europe"]),
  q("Quelle est la capitale de l'Italie ?", ["Milan","Naples","Florence","Rome"], 3, "Rome, la 'Ville Éternelle', fut le centre de l'Empire romain.", 1, ["geo","capitales","europe"]),
  q("Quelle est la capitale du Royaume-Uni ?", ["Manchester","Édimbourg","Londres","Dublin"], 2, "Londres est la capitale du Royaume-Uni, traversée par la Tamise.", 1, ["geo","capitales","europe"]),
  q("Quelle est la capitale du Portugal ?", ["Porto","Lisbonne","Braga","Faro"], 1, "Lisbonne est la capitale du Portugal, au bord du Tage.", 1, ["geo","capitales","europe"]),
  q("Quelle est la capitale des Pays-Bas ?", ["Rotterdam","La Haye","Utrecht","Amsterdam"], 3, "Amsterdam est la capitale des Pays-Bas, célèbre pour ses canaux. La Haye est la siège du gouvernement.", 2, ["geo","capitales","europe"]),
  q("Quelle est la capitale de la Belgique ?", ["Anvers","Gand","Bruxelles","Liège"], 2, "Bruxelles est la capitale de la Belgique et siège de l'Union européenne.", 1, ["geo","capitales","europe"]),
  q("Quelle est la capitale de la Pologne ?", ["Cracovie","Gdańsk","Varsovie","Łódź"], 2, "Varsovie est la capitale et plus grande ville de Pologne, sur la Vistule.", 1, ["geo","capitales","europe"]),
  q("Quelle est la capitale de la Suisse ?", ["Zurich","Genève","Lausanne","Berne"], 3, "Berne est la capitale fédérale de la Suisse, bien que Zurich soit la plus grande ville.", 2, ["geo","capitales","europe"]),
  q("Quelle est la capitale de l'Autriche ?", ["Salzbourg","Graz","Vienne","Innsbruck"], 2, "Vienne est la capitale de l'Autriche, berceau de la musique classique (Mozart, Beethoven…).", 1, ["geo","capitales","europe"]),
  q("Quelle est la capitale du Maroc ?", ["Casablanca","Marrakech","Fès","Rabat"], 3, "Rabat est la capitale politique du Maroc. Casablanca est la plus grande ville.", 2, ["geo","capitales","monde"]),
  q("Quelle est la capitale du Japon ?", ["Osaka","Kyoto","Tokyo","Hiroshima"], 2, "Tokyo est la capitale du Japon et l'une des plus grandes mégapoles du monde.", 1, ["geo","capitales","monde"]),
  q("Quelle est la capitale de la Chine ?", ["Shanghai","Pékin","Guangzhou","Shenzhen"], 1, "Pékin (Beijing) est la capitale de la Chine, siège du gouvernement depuis des siècles.", 1, ["geo","capitales","monde"]),
  q("Quelle est la capitale du Brésil ?", ["São Paulo","Rio de Janeiro","Brasília","Salvador"], 2, "Brasília est la capitale fédérale du Brésil, construite de toutes pièces en 1960.", 2, ["geo","capitales","monde"]),
  q("Quelle est la capitale de l'Australie ?", ["Sydney","Melbourne","Brisbane","Canberra"], 3, "Canberra est la capitale de l'Australie. Sydney et Melbourne se sont disputé ce titre.", 2, ["geo","capitales","monde"]),
  q("Quelle est la capitale du Canada ?", ["Toronto","Vancouver","Montréal","Ottawa"], 3, "Ottawa est la capitale du Canada, en Ontario, sur la rivière des Outaouais.", 2, ["geo","capitales","monde"]),
  q("Quelle est la capitale de l'Argentine ?", ["São Paulo","Santiago","Buenos Aires","Lima"], 2, "Buenos Aires est la capitale de l'Argentine, sur le Río de la Plata.", 1, ["geo","capitales","monde"]),
  q("Quelle est la capitale de l'Inde ?", ["Mumbai","Kolkata","Chennai","New Delhi"], 3, "New Delhi est la capitale de l'Inde, construite au début du XXe siècle.", 1, ["geo","capitales","monde"]),
  q("Quelle est la capitale de la Russie ?", ["Saint-Pétersbourg","Moscou","Novossibirsk","Kazan"], 1, "Moscou est la capitale de la Russie depuis le XIVe siècle (sauf 1712–1918 où Saint-Pétersbourg était la capitale).", 1, ["geo","capitales","monde","europe"]),
  q("Quelle est la capitale de l'Égypte ?", ["Alexandrie","Louxor","Le Caire","Assouan"], 2, "Le Caire est la capitale de l'Égypte et la plus grande ville d'Afrique.", 1, ["geo","capitales","monde"]),
  q("Quelle est la capitale du Mexique ?", ["Guadalajara","Monterrey","Mexico","Cancún"], 2, "Mexico (Ciudad de México) est la capitale du Mexique, l'une des plus grandes villes du monde.", 1, ["geo","capitales","monde"]),

  // ════════════════════════════════════════════════════════════════════
  // GÉOGRAPHIE — DRAPEAUX
  // ════════════════════════════════════════════════════════════════════
  q("À quel pays appartient ce drapeau : 🇫🇷 ?", ["Italie","France","Pays-Bas","Luxembourg"], 1, "Le drapeau tricolore bleu-blanc-rouge est le drapeau de la France depuis la Révolution de 1789.", 1, ["geo","drapeaux","europe"]),
  q("À quel pays appartient ce drapeau : 🇩🇪 ?", ["Belgique","Allemagne","Autriche","Hongrie"], 1, "Le drapeau allemand est noir-rouge-or, couleurs du mouvement démocratique du XIXe siècle.", 1, ["geo","drapeaux","europe"]),
  q("À quel pays appartient ce drapeau : 🇯🇵 ?", ["Chine","Corée du Sud","Japon","Singapour"], 2, "Le drapeau japonais (Hinomaru) représente un disque rouge sur fond blanc, symbolisant le soleil levant.", 1, ["geo","drapeaux","monde"]),
  q("À quel pays appartient ce drapeau : 🇧🇷 ?", ["Argentine","Colombie","Brésil","Venezuela"], 2, "Le drapeau brésilien est vert avec un losange jaune et un cercle bleu étoilé.", 1, ["geo","drapeaux","monde"]),
  q("À quel pays appartient ce drapeau : 🇨🇦 ?", ["États-Unis","Australie","Canada","Nouvelle-Zélande"], 2, "Le drapeau canadien arbore une feuille d'érable rouge sur fond blanc entre deux bandes rouges.", 1, ["geo","drapeaux","monde"]),
  q("À quel pays appartient ce drapeau : 🇬🇧 ?", ["Australie","Irlande","Nouvelle-Zélande","Royaume-Uni"], 3, "L'Union Jack (drapeau britannique) combine les croix de Saint-Georges, Saint-André et Saint-Patrick.", 1, ["geo","drapeaux","europe"]),
  q("À quel pays appartient ce drapeau : 🇮🇹 ?", ["France","Mexique","Italie","Irlande"], 2, "Le drapeau italien est vert-blanc-rouge, inspiré du tricolore français mais avec le vert à la place du bleu.", 1, ["geo","drapeaux","europe"]),
  q("À quel pays appartient ce drapeau : 🇨🇳 ?", ["Vietnam","Chine","URSS","Corée du Nord"], 1, "Le drapeau chinois est rouge avec une grande étoile jaune et quatre petites, symbolisant le Parti communiste.", 1, ["geo","drapeaux","monde"]),
  q("À quel pays appartient ce drapeau : 🇺🇸 ?", ["Australie","France","États-Unis","Royaume-Uni"], 2, "Le drapeau américain a 50 étoiles (un par État) et 13 bandes (les premières colonies).", 1, ["geo","drapeaux","monde"]),
  q("À quel pays appartient ce drapeau : 🇪🇸 ?", ["Portugal","Colombie","Espagne","Venezuela"], 2, "Le drapeau espagnol est rouge-jaune-rouge, avec les armoiries royales au centre.", 1, ["geo","drapeaux","europe"]),
  q("À quel pays appartient ce drapeau : 🇸🇦 ?", ["Irak","Iran","Arabie saoudite","Pakistan"], 2, "Le drapeau saoudien est vert avec la Shahada (profession de foi musulmane) et un sabre.", 2, ["geo","drapeaux","monde"]),
  q("À quel pays appartient ce drapeau : 🇧🇪 ?", ["Allemagne","Belgique","Pays-Bas","Luxembourg"], 1, "Le drapeau belge est noir-jaune-rouge (bandes verticales), inspiré du drapeau du Brabant.", 2, ["geo","drapeaux","europe"]),
  q("À quel pays appartient ce drapeau : 🇨🇭 ?", ["Autriche","Danemark","Suisse","Vatican"], 2, "Le drapeau suisse est rouge avec une croix blanche. C'est l'un des deux seuls drapeaux carrés.", 2, ["geo","drapeaux","europe"]),
  q("À quel pays appartient ce drapeau : 🇦🇺 ?", ["Nouvelle-Zélande","Australie","Royaume-Uni","Canada"], 1, "Le drapeau australien comporte l'Union Jack, l'étoile du Commonwealth et la Croix du Sud.", 2, ["geo","drapeaux","monde"]),
  q("À quel pays appartient ce drapeau : 🇲🇦 ?", ["Algérie","Tunisie","Maroc","Libye"], 2, "Le drapeau marocain est rouge avec une étoile verte à cinq branches (l'étoile de Salomon).", 2, ["geo","drapeaux","monde"]),
  q("À quel pays appartient ce drapeau : 🇵🇱 ?", ["Autriche","Croatie","Pologne","Russie"], 2, "Le drapeau polonais est blanc et rouge (bandes horizontales), couleurs de l'armoirie nationale.", 1, ["geo","drapeaux","europe"]),
  q("Combien d'étoiles y a-t-il sur le drapeau européen 🇪🇺 ?", ["13","15","12","27"], 2, "Le drapeau de l'UE a toujours 12 étoiles dorées, symbole de perfection et d'unité — pas une par pays.", 2, ["geo","drapeaux","europe"]),

  // ════════════════════════════════════════════════════════════════════
  // ANGLAIS
  // ════════════════════════════════════════════════════════════════════
  q("Comment dit-on 'bonjour' en anglais ?", ["Good night","Hello","Goodbye","Please"], 1, "'Hello' ou 'Hi' signifie 'bonjour/salut'. 'Good morning' = bonjour le matin. 'Good night' = bonne nuit.", 1, ["debutant","langues","anglais","salutations"]),
  q("Comment dit-on 'merci' en anglais ?", ["Please","Sorry","Thank you","Excuse me"], 2, "'Thank you' = merci. 'Please' = s'il vous plaît. 'Sorry' = désolé. 'Excuse me' = excusez-moi.", 1, ["debutant","langues","anglais","salutations","vocab"]),
  q("Comment dit-on 'chat' en anglais ?", ["Dog","Bird","Cat","Horse"], 2, "'Cat' = chat. 'Dog' = chien. 'Bird' = oiseau. 'Horse' = cheval.", 1, ["debutant","langues","anglais","animaux","vocab"]),
  q("Comment dit-on 'rouge' en anglais ?", ["Blue","Green","Red","Yellow"], 2, "'Red' = rouge. 'Blue' = bleu. 'Green' = vert. 'Yellow' = jaune.", 1, ["debutant","langues","anglais","couleurs","vocab"]),
  q("Quelle est la traduction de 'the dog eats' ?", ["Le chien mange","Le chat mange","Le chien court","Le chien dort"], 0, "'The dog' = le chien. 'Eats' = mange (3e personne du singulier de 'to eat').", 1, ["debutant","langues","anglais","vocab","phrases"]),
  q("Comment dit-on 'maison' en anglais ?", ["School","House","Car","Book"], 1, "'House' = maison. 'School' = école. 'Car' = voiture. 'Book' = livre.", 1, ["debutant","langues","anglais","vocab"]),
  q("Que signifie 'What is your name?' ?", ["Quel âge as-tu ?","Où habites-tu ?","Comment t'appelles-tu ?","Comment vas-tu ?"], 2, "'What' = quoi/quel. 'Your name' = ton nom. Réponse : 'My name is…'", 1, ["debutant","langues","anglais","phrases","salutations"]),
  q("Comment compte-t-on de 1 à 3 en anglais ?", ["Un, deux, trois","One, two, three","Ein, zwei, drei","Uno, dos, tres"], 1, "Les chiffres en anglais : one (1), two (2), three (3), four (4), five (5).", 1, ["debutant","langues","anglais","nombres"]),
  q("Que signifie 'I am hungry' ?", ["J'ai soif","J'ai faim","Je suis fatigué","Je suis heureux"], 1, "'I am' = je suis/j'ai. 'Hungry' = faim. 'Thirsty' = soif. 'Tired' = fatigué.", 1, ["debutant","langues","anglais","phrases","vocab"]),
  q("Comment dit-on 'frère' en anglais ?", ["Sister","Mother","Brother","Father"], 2, "'Brother' = frère. 'Sister' = sœur. 'Father' = père. 'Mother' = mère.", 1, ["debutant","langues","anglais","famille","vocab"]),
  q("Que signifie 'apple' en français ?", ["Orange","Banane","Pomme","Poire"], 2, "'Apple' = pomme. 'Orange' = orange. 'Banana' = banane. 'Pear' = poire.", 1, ["debutant","langues","anglais","nourriture","vocab"]),
  q("Comment dit-on 'au revoir' en anglais ?", ["Hello","Thank you","Sorry","Goodbye"], 3, "'Goodbye' ou 'Bye' = au revoir. 'See you later' = à plus tard.", 1, ["debutant","langues","anglais","salutations"]),
  q("Que signifie 'How old are you?' ?", ["Comment vas-tu ?","Quel âge as-tu ?","Où habites-tu ?","Qu'est-ce que tu fais ?"], 1, "'How old' = quel âge. Réponse : 'I am 10 years old' = J'ai 10 ans.", 1, ["debutant","langues","anglais","phrases"]),
  q("Quel est le pluriel de 'child' en anglais ?", ["Childs","Children","Childes","Child"], 1, "'Child' (enfant) a un pluriel irrégulier : 'children'. Comme 'man' → 'men', 'woman' → 'women'.", 2, ["inter","langues","anglais","vocab"]),
  q("Que signifie 'I would like a glass of water, please' ?", ["Je veux du jus","Je voudrais un verre d'eau, s'il vous plaît","Où sont les toilettes ?","L'addition, s'il vous plaît"], 1, "'Would like' est la forme polie de 'want' (vouloir). 'A glass of water' = un verre d'eau.", 2, ["inter","langues","anglais","phrases","nourriture"]),

  // ════════════════════════════════════════════════════════════════════
  // ALLEMAND
  // ════════════════════════════════════════════════════════════════════
  q("Comment dit-on 'bonjour' en allemand ?", ["Guten Abend","Hallo","Auf Wiedersehen","Bitte"], 1, "'Hallo' = salut. 'Guten Morgen' = bonjour (matin). 'Guten Tag' = bonjour (journée). 'Guten Abend' = bonsoir.", 1, ["debutant","langues","allemand","salutations"]),
  q("Comment dit-on 'merci' en allemand ?", ["Bitte","Danke","Entschuldigung","Ja"], 1, "'Danke' = merci. 'Danke schön' = merci beaucoup. 'Bitte' = s'il vous plaît / de rien.", 1, ["debutant","langues","allemand","salutations","vocab"]),
  q("Comment dit-on 'chat' en allemand ?", ["Hund","Vogel","Katze","Pferd"], 2, "'Katze' = chat. 'Hund' = chien. 'Vogel' = oiseau. 'Pferd' = cheval.", 1, ["debutant","langues","allemand","animaux","vocab"]),
  q("Comment dit-on 'un' en allemand ?", ["Zwei","Drei","Null","Eins"], 3, "Les chiffres : eins (1), zwei (2), drei (3), vier (4), fünf (5).", 1, ["debutant","langues","allemand","nombres"]),
  q("Que signifie 'Wie heißt du?' ?", ["Quel âge as-tu ?","Où habites-tu ?","Comment t'appelles-tu ?","Comment vas-tu ?"], 2, "'Wie heißt du?' = Comment t'appelles-tu ? Réponse : 'Ich heiße…' = Je m'appelle…", 1, ["debutant","langues","allemand","salutations","phrases"]),
  q("Comment dit-on 'rouge' en allemand ?", ["Blau","Grün","Rot","Gelb"], 2, "'Rot' = rouge. 'Blau' = bleu. 'Grün' = vert. 'Gelb' = jaune.", 1, ["debutant","langues","allemand","couleurs","vocab"]),
  q("Comment dit-on 'maison' en allemand ?", ["Schule","Auto","Haus","Buch"], 2, "'Haus' = maison. 'Schule' = école. 'Auto' = voiture. 'Buch' = livre.", 1, ["debutant","langues","allemand","vocab"]),
  q("Que signifie 'Ich bin müde' ?", ["J'ai faim","Je suis heureux","Je suis fatigué","J'ai soif"], 2, "'Ich bin' = je suis. 'Müde' = fatigué. 'Hungrig' = affamé. 'Durstig' = assoiffé.", 1, ["debutant","langues","allemand","phrases","vocab"]),
  q("Comment dit-on 'père' en allemand ?", ["Mutter","Schwester","Bruder","Vater"], 3, "'Vater' = père. 'Mutter' = mère. 'Bruder' = frère. 'Schwester' = sœur.", 1, ["debutant","langues","allemand","famille","vocab"]),
  q("Que signifie 'Ich spreche kein Deutsch' ?", ["Je parle allemand","Je ne parle pas allemand","J'apprends l'allemand","Je comprends l'allemand"], 1, "'Ich spreche' = je parle. 'Kein' = aucun/pas de. 'Deutsch' = allemand.", 2, ["inter","langues","allemand","phrases"]),

  // ════════════════════════════════════════════════════════════════════
  // ESPAGNOL
  // ════════════════════════════════════════════════════════════════════
  q("Comment dit-on 'bonjour' en espagnol ?", ["Buenas noches","Hola","Adiós","Por favor"], 1, "'Hola' = salut/bonjour. 'Buenos días' = bonjour (matin). 'Buenas noches' = bonne nuit.", 1, ["debutant","langues","espagnol","salutations"]),
  q("Comment dit-on 'merci' en espagnol ?", ["Por favor","Lo siento","Gracias","Perdón"], 2, "'Gracias' = merci. 'Por favor' = s'il vous plaît. 'Lo siento' = je suis désolé.", 1, ["debutant","langues","espagnol","salutations","vocab"]),
  q("Comment dit-on 'chien' en espagnol ?", ["Gato","Pájaro","Perro","Caballo"], 2, "'Perro' = chien. 'Gato' = chat. 'Pájaro' = oiseau. 'Caballo' = cheval.", 1, ["debutant","langues","espagnol","animaux","vocab"]),
  q("Comment dit-on 'rouge' en espagnol ?", ["Azul","Verde","Rojo","Amarillo"], 2, "'Rojo' = rouge. 'Azul' = bleu. 'Verde' = vert. 'Amarillo' = jaune.", 1, ["debutant","langues","espagnol","couleurs","vocab"]),
  q("Que signifie '¿Cómo te llamas?' ?", ["Quel âge as-tu ?","Comment vas-tu ?","Comment t'appelles-tu ?","Où habites-tu ?"], 2, "'¿Cómo te llamas?' = Comment t'appelles-tu ? Réponse : 'Me llamo…' = Je m'appelle…", 1, ["debutant","langues","espagnol","salutations","phrases"]),
  q("Comment compte-t-on de 1 à 3 en espagnol ?", ["One, two, three","Ein, zwei, drei","Uno, dos, tres","Un, deux, trois"], 2, "En espagnol : uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez.", 1, ["debutant","langues","espagnol","nombres"]),
  q("Que signifie 'Tengo hambre' ?", ["J'ai soif","J'ai faim","Je suis fatigué","J'ai chaud"], 1, "'Tener' = avoir. 'Hambre' = faim. 'Sed' = soif. 'Frío/calor' = froid/chaud.", 1, ["debutant","langues","espagnol","phrases","vocab"]),
  q("Comment dit-on 'mère' en espagnol ?", ["Padre","Hermano","Hermana","Madre"], 3, "'Madre' = mère. 'Padre' = père. 'Hermano' = frère. 'Hermana' = sœur.", 1, ["debutant","langues","espagnol","famille","vocab"]),
  q("Que signifie 'Me gusta el chocolate' ?", ["Je déteste le chocolat","J'aime le chocolat","Je mange du chocolat","Je veux du chocolat"], 1, "'Me gusta' = j'aime (littéralement 'ça me plaît'). 'No me gusta' = je n'aime pas.", 2, ["inter","langues","espagnol","phrases","nourriture"]),
  q("Comment dit-on 'eau' en espagnol ?", ["Leche","Pan","Agua","Vino"], 2, "'Agua' = eau. 'Leche' = lait. 'Pan' = pain. 'Vino' = vin.", 1, ["debutant","langues","espagnol","nourriture","vocab"]),

  // ════════════════════════════════════════════════════════════════════
  // ITALIEN
  // ════════════════════════════════════════════════════════════════════
  q("Comment dit-on 'bonjour' en italien ?", ["Buonasera","Ciao","Arrivederci","Per favore"], 1, "'Ciao' = salut (informel). 'Buongiorno' = bonjour (formel). 'Buonasera' = bonsoir.", 1, ["debutant","langues","italien","salutations"]),
  q("Comment dit-on 'merci' en italien ?", ["Per favore","Scusi","Grazie","Prego"], 2, "'Grazie' = merci. 'Prego' = de rien/s'il vous plaît. 'Scusi' = excusez-moi.", 1, ["debutant","langues","italien","salutations","vocab"]),
  q("Comment dit-on 'chat' en italien ?", ["Cane","Uccello","Gatto","Cavallo"], 2, "'Gatto' = chat. 'Cane' = chien. 'Uccello' = oiseau. 'Cavallo' = cheval.", 1, ["debutant","langues","italien","animaux","vocab"]),
  q("Comment dit-on 'rouge' en italien ?", ["Blu","Verde","Rosso","Giallo"], 2, "'Rosso' = rouge. 'Blu' = bleu. 'Verde' = vert. 'Giallo' = jaune.", 1, ["debutant","langues","italien","couleurs","vocab"]),
  q("Que signifie 'Come ti chiami?' ?", ["Quel âge as-tu ?","Comment vas-tu ?","Comment t'appelles-tu ?","Où habites-tu ?"], 2, "'Come ti chiami?' = Comment t'appelles-tu ? Réponse : 'Mi chiamo…' = Je m'appelle…", 1, ["debutant","langues","italien","salutations","phrases"]),
  q("Comment compte-t-on de 1 à 3 en italien ?", ["Un, deux, trois","Uno, dos, tres","Uno, due, tre","Ein, zwei, drei"], 2, "En italien : uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci.", 1, ["debutant","langues","italien","nombres"]),
  q("Que signifie 'Ho fame' ?", ["J'ai soif","J'ai faim","Je suis fatigué","J'ai chaud"], 1, "'Ho' = j'ai (du verbe avere). 'Fame' = faim. 'Sete' = soif. 'Sonno' = sommeil.", 1, ["debutant","langues","italien","phrases","vocab"]),
  q("Comment dit-on 'pizza' en français ? 😄", ["Tarte","Galette","Pizza","Crêpe"], 2, "Pizza est un mot italien entré dans toutes les langues ! En Italie, la pizza napolitaine est un patrimoine culturel de l'UNESCO.", 1, ["debutant","langues","italien","nourriture","vocab"]),
  q("Comment dit-on 'beau/belle' en italien ?", ["Brutto","Grande","Bello","Piccolo"], 2, "'Bello/bella' = beau/belle. 'Brutto' = laid. 'Grande' = grand. 'Piccolo' = petit.", 1, ["debutant","langues","italien","vocab"]),
  q("Que signifie 'Dove si trova la stazione?' ?", ["Où sont les toilettes ?","Où se trouve la gare ?","Combien ça coûte ?","A quelle heure part le train ?"], 1, "'Dove' = où. 'Si trova' = se trouve. 'La stazione' = la gare.", 2, ["inter","langues","italien","phrases"]),

  // ════════════════════════════════════════════════════════════════════
  // CHINOIS (MANDARIN)
  // ════════════════════════════════════════════════════════════════════
  q("Comment dit-on 'bonjour' en chinois (mandarin) ?", ["Zàijiàn","Xièxie","Nǐ hǎo","Qǐng"], 2, "'Nǐ hǎo' (你好) = bonjour/salut. 'Nín hǎo' = bonjour (formel). 'Nǐ' = tu, 'hǎo' = bien.", 1, ["debutant","langues","chinois","salutations"]),
  q("Comment dit-on 'merci' en chinois ?", ["Nǐ hǎo","Zàijiàn","Xièxie","Duìbuqǐ"], 2, "'Xièxie' (谢谢) = merci. 'Xièxie nǐ' = merci à toi. 'Bú kèqì' = de rien.", 1, ["debutant","langues","chinois","salutations","vocab"]),
  q("Comment dit-on 'au revoir' en chinois ?", ["Nǐ hǎo","Zàijiàn","Xièxie","Hǎo"], 1, "'Zàijiàn' (再见) = au revoir. 'Zài' = encore/à nouveau, 'jiàn' = voir.", 1, ["debutant","langues","chinois","salutations"]),
  q("Comment dit-on 'un' en chinois ?", ["Èr","Sān","Yī","Sì"], 2, "Les chiffres : yī (1), èr (2), sān (3), sì (4), wǔ (5), liù (6), qī (7), bā (8), jiǔ (9), shí (10).", 1, ["debutant","langues","chinois","nombres"]),
  q("Que signifie 'Nǐ jiào shénme míngzi?' ?", ["Quel âge as-tu ?","Comment vas-tu ?","Comment t'appelles-tu ?","Où habites-tu ?"], 2, "'Nǐ jiào shénme míngzi?' (你叫什么名字?) = Comment t'appelles-tu ? Réponse : 'Wǒ jiào…' = Je m'appelle…", 1, ["debutant","langues","chinois","salutations","phrases"]),
  q("Comment dit-on 'chien' en chinois ?", ["Māo","Niǎo","Gǒu","Mǎ"], 2, "'Gǒu' (狗) = chien. 'Māo' (猫) = chat. 'Niǎo' (鸟) = oiseau. 'Mǎ' (马) = cheval.", 1, ["debutant","langues","chinois","animaux","vocab"]),
  q("Que signifie 'Wǒ ài nǐ' ?", ["Je te déteste","Je te remercie","Je t'aime","Je te connais"], 2, "'Wǒ' (我) = je/moi. 'Ài' (爱) = aimer. 'Nǐ' (你) = tu/toi. Très célèbre expression !", 1, ["debutant","langues","chinois","phrases","vocab"]),
  q("Comment dit-on 'eau' en chinois ?", ["Chá","Niúnǎi","Shuǐ","Kāfēi"], 2, "'Shuǐ' (水) = eau. 'Chá' (茶) = thé. 'Niúnǎi' (牛奶) = lait. 'Kāfēi' (咖啡) = café.", 1, ["debutant","langues","chinois","nourriture","vocab"]),
  q("Combien y a-t-il de tons en mandarin standard ?", ["2","3","4","6"], 2, "Le mandarin a 4 tons (+ un ton neutre) : 1er ton (plat), 2e (montant), 3e (descendant-montant), 4e (descendant). Le même son avec un ton différent = mot différent !", 2, ["inter","langues","chinois","vocab"]),
  q("Que signifie 'Nǐ chī le ma?' ?", ["As-tu soif ?","As-tu mangé ?","As-tu dormi ?","As-tu étudié ?"], 1, "'Chī' = manger. 'Le' = particule du passé. 'Ma' = particule interrogative. Expression courante de politesse en Chine.", 2, ["inter","langues","chinois","phrases","nourriture"]),

  // ════════════════════════════════════════════════════════════════════
  // ARABE
  // ════════════════════════════════════════════════════════════════════
  q("Comment dit-on 'bonjour' en arabe ?", ["Shukran","Marhaba","Ma'a salama","Afwan"], 1, "'Marhaba' (مرحبا) = bonjour/salut. 'Ahlan' = bienvenue. 'As-salamu alaykum' = salutation formelle.", 1, ["debutant","langues","arabe","salutations"]),
  q("Comment dit-on 'merci' en arabe ?", ["Afwan","Shukran","Marhaba","Naam"], 1, "'Shukran' (شكراً) = merci. 'Shukran jazilan' = merci beaucoup. 'Afwan' = de rien.", 1, ["debutant","langues","arabe","salutations","vocab"]),
  q("Comment dit-on 'un' en arabe ?", ["Ithnayn","Thalatha","Wahid","Arba'a"], 2, "Les chiffres arabes : wahid (1), ithnayn (2), thalatha (3), arba'a (4), khamsa (5).", 1, ["debutant","langues","arabe","nombres"]),
  q("Comment dit-on 'au revoir' en arabe ?", ["Marhaba","Shukran","Ma'a salama","Naam"], 2, "'Ma'a salama' (مع السلامة) = au revoir (littéralement 'avec la paix').", 1, ["debutant","langues","arabe","salutations"]),
  q("Que signifie 'Kayfa haluk?' ?", ["Comment t'appelles-tu ?","Où habites-tu ?","Comment vas-tu ?","Quel âge as-tu ?"], 2, "'Kayfa haluk?' (كيف حالك؟) = Comment vas-tu ? Réponse : 'Bikhair, shukran' = Bien, merci.", 1, ["debutant","langues","arabe","salutations","phrases"]),
  q("Comment s'écrit l'arabe ?", ["De gauche à droite","De droite à gauche","De haut en bas","De bas en haut"], 1, "L'arabe s'écrit et se lit de droite à gauche, comme l'hébreu et le persan. C'est un alphabet de 28 lettres.", 1, ["debutant","langues","arabe","vocab"]),
  q("Comment dit-on 'eau' en arabe ?", ["Laban","Shay","Ma'","Qahwa"], 2, "'Ma'' (ماء) = eau. 'Shay' (شاي) = thé. 'Qahwa' (قهوة) = café. 'Laban' = lait.", 1, ["debutant","langues","arabe","nourriture","vocab"]),
  q("Que signifie 'Inshallah' ?", ["Merci beaucoup","Si Dieu le veut","Bienvenue","Bonne chance"], 1, "'Inshallah' (إن شاء الله) = 'Si Dieu le veut', expression très utilisée dans les pays arabophones pour parler d'événements futurs.", 2, ["inter","langues","arabe","phrases","vocab"]),
  q("Combien de pays ont l'arabe comme langue officielle ?", ["8","15","22","30"], 2, "L'arabe est la langue officielle de 22 pays, principalement au Moyen-Orient et en Afrique du Nord. C'est une des 6 langues officielles de l'ONU.", 2, ["inter","langues","arabe","vocab"]),
  q("Comment dit-on 'chat' en arabe ?", ["Kalb","Hirr/Qitta","Tayr","Faras"], 1, "'Qitta' ou 'Hirr' (قطة) = chat. 'Kalb' (كلب) = chien. 'Tayr' (طير) = oiseau. 'Faras' (فرس) = cheval.", 2, ["inter","langues","arabe","animaux","vocab"]),

  // ════════════════════════════════════════════════════════════════════
  // POLONAIS
  // ════════════════════════════════════════════════════════════════════
  q("Comment dit-on 'bonjour' en polonais ?", ["Do widzenia","Cześć","Dziękuję","Proszę"], 1, "'Cześć' = salut (informel). 'Dzień dobry' = bonjour (formel). 'Dobry wieczór' = bonsoir.", 1, ["debutant","langues","polonais","salutations"]),
  q("Comment dit-on 'merci' en polonais ?", ["Proszę","Przepraszam","Dziękuję","Tak"], 2, "'Dziękuję' (prononcé 'djenkouyé') = merci. 'Dziękuję bardzo' = merci beaucoup. 'Proszę' = s'il vous plaît / de rien.", 1, ["debutant","langues","polonais","salutations","vocab"]),
  q("Comment dit-on 'au revoir' en polonais ?", ["Cześć","Dziękuję","Do widzenia","Proszę"], 2, "'Do widzenia' = au revoir (formel). 'Cześć' est aussi utilisé pour dire au revoir en informel.", 1, ["debutant","langues","polonais","salutations"]),
  q("Comment dit-on 'un' en polonais ?", ["Dwa","Trzy","Jeden","Cztery"], 2, "Les chiffres : jeden (1), dwa (2), trzy (3), cztery (4), pięć (5).", 1, ["debutant","langues","polonais","nombres"]),
  q("Que signifie 'Jak masz na imię?' ?", ["Quel âge as-tu ?","Comment vas-tu ?","Comment t'appelles-tu ?","Où habites-tu ?"], 2, "'Jak masz na imię?' = Comment t'appelles-tu ? Réponse : 'Mam na imię…' = Je m'appelle…", 1, ["debutant","langues","polonais","salutations","phrases"]),
  q("Comment dit-on 'chat' en polonais ?", ["Pies","Ptak","Kot","Koń"], 2, "'Kot' = chat. 'Pies' = chien. 'Ptak' = oiseau. 'Koń' = cheval.", 1, ["debutant","langues","polonais","animaux","vocab"]),
  q("Comment dit-on 'rouge' en polonais ?", ["Niebieski","Zielony","Czerwony","Żółty"], 2, "'Czerwony' = rouge. 'Niebieski' = bleu. 'Zielony' = vert. 'Żółty' = jaune.", 1, ["debutant","langues","polonais","couleurs","vocab"]),
  q("Que signifie 'Nie rozumiem' ?", ["Je comprends","Je parle polonais","Je ne comprends pas","Je suis perdu"], 2, "'Nie' = ne/pas (négation). 'Rozumiem' = je comprends. Très utile quand on apprend une langue !", 1, ["debutant","langues","polonais","phrases","vocab"]),
  q("Comment dit-on 'eau' en polonais ?", ["Mleko","Herbata","Woda","Kawa"], 2, "'Woda' = eau. 'Herbata' = thé. 'Kawa' = café. 'Mleko' = lait.", 1, ["debutant","langues","polonais","nourriture","vocab"]),
  q("Combien de lettres a l'alphabet polonais ?", ["26","32","36","28"], 1, "L'alphabet polonais a 32 lettres. Il utilise l'alphabet latin avec des signes diacritiques spéciaux : ą, ć, ę, ł, ń, ó, ś, ź, ż.", 2, ["inter","langues","polonais","vocab"]),

  // ════════════════════════════════════════════════════════════════════
  // PHYSIQUE
  // ════════════════════════════════════════════════════════════════════
  q("Quelle est l'unité de la force ?", ["Le volt","Le newton","Le watt","Le litre"], 1, "Une force se mesure en newtons (N), en hommage au physicien Isaac Newton.", 1, ["cm2","physique","mecanique"]),
  q("Pourquoi une balle retombe-t-elle vers le sol ?", ["À cause du magnétisme","À cause de la gravité","À cause de la lumière","À cause du son"], 1, "La gravité attire les objets vers le centre de la Terre.", 1, ["cm1","physique","mecanique"]),
  q("Si une voiture parcourt 120 km en 2 h, sa vitesse moyenne est :", ["40 km/h","60 km/h","100 km/h","240 km/h"], 1, "Vitesse = distance ÷ temps. 120 ÷ 2 = 60 km/h.", 2, ["cm2","physique","mecanique","calcul"]),
  q("Que dit le principe d'inertie ?", ["Un objet garde son état de mouvement si aucune force ne le change","Un objet chaud devient toujours lumineux","Un objet léger ne tombe jamais","Un objet immobile n'a pas de masse"], 0, "Sans force qui le freine, l'accélère ou le dévie, un objet conserve son mouvement.", 3, ["college","physique","mecanique"]),
  q("Dans une balançoire à bascule, quel objet aide à faire tourner ?", ["Un levier","Une lentille","Une pile","Un prisme"], 0, "Une balançoire à bascule fonctionne comme un levier autour d'un point d'appui.", 1, ["cm2","physique","mecanique"]),
  q("Dans un milieu transparent homogène, la lumière se propage :", ["En zigzag","En ligne droite","En cercle","Uniquement vers le haut"], 1, "Dans l'air calme ou dans le vide, la lumière se propage en ligne droite.", 1, ["cm1","physique","optique"]),
  q("Quelle couleur obtient-on en décomposant la lumière blanche avec un prisme ?", ["Une seule couleur verte","Un arc-en-ciel de couleurs","Du noir","Du gris"], 1, "Un prisme sépare la lumière blanche en plusieurs couleurs, comme dans un arc-en-ciel.", 1, ["cm2","physique","optique"]),
  q("Quelle loi décrit la réflexion sur un miroir plan ?", ["L'angle d'incidence est égal à l'angle de réflexion","La lumière ralentit toujours","La lumière devient sonore","L'image disparaît"], 0, "Sur un miroir plan, le rayon repart avec le même angle que celui avec lequel il arrive.", 2, ["college","physique","optique"]),
  q("Une lentille convergente sert souvent à :", ["Éloigner la lumière de tous les côtés","Faire converger des rayons lumineux","Créer de l'électricité","Mesurer la température"], 1, "Une lentille convergente rassemble des rayons lumineux vers un foyer.", 2, ["college","physique","optique"]),
  q("Pour qu'une ampoule s'allume avec une pile, le circuit doit être :", ["Ouvert","Fermé","Cassé","Sans fil"], 1, "Un circuit fermé laisse passer le courant électrique.", 1, ["cm1","physique","electricite"]),
  q("Quel matériau conduit bien l'électricité ?", ["Le plastique","Le bois sec","Le cuivre","Le verre"], 2, "Les métaux comme le cuivre conduisent bien le courant électrique.", 1, ["cm2","physique","electricite"]),
  q("L'intensité du courant électrique se mesure en :", ["Ampères","Mètres","Grammes","Degrés Celsius"], 0, "L'intensité d'un courant se mesure en ampères (A).", 2, ["college","physique","electricite"]),
  q("La tension électrique se mesure en :", ["Ohms","Volts","Newtons","Secondes"], 1, "La tension aux bornes d'un dipôle se mesure en volts (V).", 2, ["college","physique","electricite"]),
  q("La résistance électrique se mesure en :", ["Ohms","Watts","Litres","Kilogrammes"], 0, "La résistance se mesure en ohms, symbole Ω.", 2, ["college","physique","electricite"]),
  q("À pression normale, l'eau pure bout vers :", ["0 °C","37 °C","100 °C","200 °C"], 2, "Au niveau de la mer, l'eau pure bout vers 100 °C.", 1, ["cm1","physique","thermodynamique"]),
  q("Quand on chauffe une cuillère métallique dans une soupe, la chaleur se transmet surtout par :", ["Conduction","Évaporation","Réflexion","Magnétisme"], 0, "Dans un solide, la chaleur se transmet principalement par conduction.", 2, ["college","physique","thermodynamique"]),
  q("Quelle grandeur indique l'agitation moyenne des particules d'un corps ?", ["La température","La couleur","La forme","La vitesse du son"], 0, "Plus les particules sont agitées en moyenne, plus la température est élevée.", 2, ["college","physique","thermodynamique"]),
  q("Le noyau d'un atome contient surtout :", ["Des protons et des neutrons","Des planètes","Des photons","De l'air"], 0, "Le noyau atomique contient des protons et des neutrons. Les électrons sont autour du noyau.", 2, ["college","physique","physique_moderne"]),
  q("Un photon est associé à :", ["La lumière","La gravité terrestre","La pression de l'eau","La respiration"], 0, "En physique moderne, la lumière peut être décrite comme composée de photons.", 3, ["lycee","physique","physique_moderne","optique"]),
  q("Selon la relativité restreinte, quelle vitesse est une limite fondamentale dans le vide ?", ["La vitesse d'un avion","La vitesse de la lumière","La vitesse d'un train","La vitesse du son"], 1, "La vitesse de la lumière dans le vide est une limite fondamentale : environ 300 000 km/s.", 3, ["lycee","physique","physique_moderne"]),

  // ════════════════════════════════════════════════════════════════════
  // ASTRONOMIE
  // ════════════════════════════════════════════════════════════════════
  q("Le Soleil est :", ["Une planète","Une étoile","Une galaxie","Une comète"], 1, "Le Soleil est une étoile : une énorme boule de gaz très chaude qui produit de la lumière.", 1, ["cm1","astro","etoiles","systeme_solaire"]),
  q("Quelle planète est la plus proche du Soleil ?", ["Vénus","Terre","Mercure","Mars"], 2, "Mercure est la planète la plus proche du Soleil.", 1, ["cm1","astro","systeme_solaire"]),
  q("Quelle est la plus grande planète du Système solaire ?", ["Terre","Jupiter","Mars","Neptune"], 1, "Jupiter est la plus grande planète du Système solaire.", 1, ["cm1","astro","systeme_solaire"]),
  q("La Lune est :", ["Une étoile","Le satellite naturel de la Terre","Une planète naine","Une galaxie"], 1, "La Lune tourne autour de la Terre : c'est son satellite naturel.", 1, ["cm1","astro","systeme_solaire"]),
  q("La Terre met environ combien de temps pour tourner autour du Soleil ?", ["24 heures","7 jours","1 mois","1 an"], 3, "La révolution de la Terre autour du Soleil dure environ 365 jours, soit un an.", 1, ["cm1","astro","systeme_solaire"]),
  q("Pourquoi y a-t-il des saisons sur Terre ?", ["Parce que la Terre est plus proche du Soleil en été partout","Parce que l'axe de la Terre est incliné","Parce que la Lune chauffe la Terre","Parce que le Soleil change de taille"], 1, "Les saisons viennent surtout de l'inclinaison de l'axe de la Terre pendant sa révolution.", 2, ["cm2","astro","systeme_solaire","phenomenes"]),
  q("Lors d'une éclipse de Soleil, quel astre passe entre la Terre et le Soleil ?", ["Mars","La Lune","Jupiter","Vénus"], 1, "Une éclipse de Soleil se produit quand la Lune passe entre la Terre et le Soleil.", 2, ["cm2","astro","phenomenes","systeme_solaire"]),
  q("Une année-lumière mesure :", ["Un temps","Une distance","Une température","Une masse"], 1, "Une année-lumière est la distance parcourue par la lumière en un an.", 2, ["college","astro","etoiles","galaxies"]),
  q("Notre galaxie s'appelle :", ["Andromède","La Voie lactée","Orion","Sirius"], 1, "Le Système solaire se trouve dans la galaxie appelée la Voie lactée.", 1, ["cm2","astro","galaxies"]),
  q("Une galaxie est :", ["Un groupe immense d'étoiles, de gaz et de poussières","Une seule planète très grande","Un type de fusée","Un morceau de Lune"], 0, "Une galaxie contient des milliards d'étoiles ainsi que du gaz et de la poussière.", 2, ["college","astro","galaxies"]),
  q("Quelle galaxie spirale est la grande voisine de la Voie lactée ?", ["Andromède","Alpha du Centaure","Sirius","Europe"], 0, "Andromède est une grande galaxie spirale proche de la Voie lactée.", 2, ["college","astro","galaxies"]),
  q("Une nébuleuse est souvent :", ["Un nuage de gaz et de poussières dans l'espace","Une planète brûlante","Un trou dans l'atmosphère","Un satellite artificiel"], 0, "Les nébuleuses sont des nuages interstellaires où peuvent naître des étoiles.", 2, ["college","astro","etoiles","galaxies"]),
  q("Quelle étoile est la plus proche de la Terre après le Soleil ?", ["Sirius","Proxima du Centaure","Bételgeuse","Véga"], 1, "Proxima du Centaure est l'étoile connue la plus proche du Système solaire.", 3, ["college","astro","etoiles"]),
  q("Une supernova est :", ["L'explosion très brillante d'une étoile","Une petite planète glacée","Un instrument de mesure","Une phase de la Lune"], 0, "Une supernova est une explosion stellaire extrêmement lumineuse.", 3, ["lycee","astro","etoiles","phenomenes"]),
  q("Quel programme a envoyé les premiers humains sur la Lune ?", ["Apollo","Ariane","Voyager","Spoutnik"], 0, "Le programme Apollo de la NASA a permis le premier alunissage habité en 1969.", 1, ["cm2","astro","exploration_spatiale"]),
  q("Comment s'appelle la station habitée qui orbite autour de la Terre ?", ["ISS","GPS","Hubble","Voyager 1"], 0, "L'ISS, Station spatiale internationale, est un laboratoire en orbite autour de la Terre.", 1, ["cm2","astro","exploration_spatiale"]),
  q("Les sondes Voyager sont célèbres parce qu'elles :", ["Explorent le fond des océans","Ont étudié les planètes géantes et voyagent très loin","Transportent des touristes","Sont posées sur Mars"], 1, "Voyager 1 et 2 ont exploré les planètes géantes et continuent leur voyage au-delà des régions externes du Système solaire.", 2, ["college","astro","exploration_spatiale","systeme_solaire"]),
  q("Une exoplanète est :", ["Une planète hors du Système solaire","Une étoile morte","Une lune de Jupiter","Un type de météorite"], 0, "Une exoplanète est une planète qui tourne autour d'une autre étoile que le Soleil.", 2, ["college","astro","etoiles","exploration_spatiale"]),
  q("Un trou noir est une région où :", ["La gravité est si forte que même la lumière ne peut pas s'échapper","Il n'y a jamais de matière","La température est toujours de 0 °C","Les planètes deviennent transparentes"], 0, "Un trou noir est défini par une gravité extrêmement forte, au-delà de son horizon des événements.", 3, ["lycee","astro","phenomenes","physique_moderne"]),
  q("Le modèle du Big Bang décrit :", ["La naissance d'une fusée","L'évolution de l'Univers depuis un état très dense et chaud","Une collision entre deux lunes","La rotation de la Terre"], 1, "Le Big Bang est le modèle scientifique décrivant l'évolution de l'Univers à partir d'un état très dense et chaud.", 3, ["lycee","astro","galaxies","phenomenes"]),
];

// ── FILTER FUNCTION ───────────────────────────────────────────────────────────
// Returns questions that have ALL the selected tags (AND logic)
export function filterQuestions(selectedTags) {
  if (!selectedTags || selectedTags.length === 0) return ALL_QUESTIONS;
  return ALL_QUESTIONS.filter(q =>
    selectedTags.every(tag => q.tags.includes(tag))
  );
}
