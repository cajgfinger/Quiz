export function geographyQuestions(q) {
  return [
    // GÉOGRAPHIE — FRANCE
    // ════════════════════════════════════════════════════════════════════
    q("Quel est le plus long fleuve de France ?", ["La Seine","Le Rhône","La Loire","La Garonne"], 2, "La Loire (1 006 km) naît au mont Gerbier-de-Jonc et se jette dans l'Atlantique à Saint-Nazaire.", 2, ["cm1","geo","fleuves"]),
    q("Quel océan borde la côte ouest de la France ?", ["Pacifique","Indien","Arctique","Atlantique"], 3, "L'Atlantique borde toute la façade ouest, de Dunkerque jusqu'à Hendaye.", 2, ["cm1","geo","mers","fleuves"]),
    q("Quelle mer borde le sud-est de la France ?", ["Mer du Nord","Manche","Mer Méditerranée","Mer Adriatique"], 2, "La Méditerranée borde le sud-est. La Manche est au nord.", 2, ["cm1","geo","mers"]),
    q("Par quelles villes passe le Rhône avant de se jeter en mer ?", ["Lyon et Avignon","Paris et Lyon","Bordeaux et Toulouse","Grenoble et Nice"], 0, "Le Rhône passe par Lyon puis Avignon avant de se jeter en Méditerranée en Camargue.", 2, ["cm1","geo","fleuves"]),
    q("Combien y a-t-il de régions en France métropolitaine ?", ["13","16","18","22"], 0, "Depuis 2016 : 13 régions métropolitaines. Avec l'outre-mer : 18 au total.", 2, ["cm1","geo","regions"]),
    q("Dans quelle région se trouve Lyon ?", ["Provence-Alpes-Côte d'Azur","Occitanie","Auvergne-Rhône-Alpes","Bourgogne-Franche-Comté"], 2, "Lyon est la préfecture de la région Auvergne-Rhône-Alpes.", 2, ["cm1","geo","regions"]),
    q("Quel est le chef-lieu du département du Rhône ?", ["Grenoble","Saint-Étienne","Lyon","Villefranche-sur-Saône"], 2, "Lyon est le chef-lieu du Rhône (69) et 3e ville de France.", 2, ["cm1","geo","departements"]),
    q("Quel est le chef-lieu des Bouches-du-Rhône ?", ["Toulon","Nice","Marseille","Aix-en-Provence"], 2, "Marseille (13) est la 2e ville de France et le 1er port de Méditerranée.", 2, ["cm1","geo","departements"]),
    q("Quel est le chef-lieu de la Haute-Garonne ?", ["Pau","Bordeaux","Montpellier","Toulouse"], 3, "Toulouse (31), 4e ville de France, est la 'Ville Rose' et capitale de l'Occitanie.", 2, ["cm1","geo","departements"]),
    q("Quel est le chef-lieu du Nord ?", ["Amiens","Rouen","Lille","Reims"], 2, "Lille est le chef-lieu du Nord (59) et de la région Hauts-de-France.", 2, ["cm1","geo","departements"]),
    q("Quel est le chef-lieu du Bas-Rhin ?", ["Colmar","Metz","Strasbourg","Mulhouse"], 2, "Strasbourg (67) est le siège du Parlement européen.", 2, ["cm2","geo","departements"]),
    q("Quel est le chef-lieu de la Gironde ?", ["Bayonne","Bordeaux","Pau","Périgueux"], 1, "Bordeaux (33) est préfecture de Nouvelle-Aquitaine, célèbre pour ses vins.", 2, ["cm2","geo","departements"]),
    q("Quel est le chef-lieu de la Seine-Maritime ?", ["Le Havre","Rouen","Caen","Cherbourg"], 1, "Rouen (76). Le Havre est une sous-préfecture. Caen = chef-lieu du Calvados.", 2, ["cm2","geo","departements"]),
    q("Quel est le chef-lieu du Finistère ?", ["Brest","Lorient","Quimper","Rennes"], 2, "Quimper (29). Brest et Lorient sont des sous-préfectures. Rennes = Ille-et-Vilaine.", 2, ["cm2","geo","departements"]),
    q("Quel est le chef-lieu du Var ?", ["Nice","Marseille","Toulon","Cannes"], 2, "Toulon (83) est une importante base navale. Nice = Alpes-Maritimes.", 2, ["cm2","geo","departements"]),
    q("Quel est le chef-lieu du Puy-de-Dôme ?", ["Le Puy-en-Velay","Moulins","Clermont-Ferrand","Aurillac"], 2, "Clermont-Ferrand (63). Le Puy = Haute-Loire, Moulins = Allier, Aurillac = Cantal.", 2, ["cm2","geo","departements"]),
    q("Quel est le plus haut sommet de France ?", ["Le Puy de Dôme","Le Mont-Ventoux","Le Mont-Blanc","Le Pic du Midi"], 2, "Le Mont-Blanc (4 808 m) est aussi le plus haut sommet d'Europe occidentale.", 2, ["cm2","geo","relief"]),
    q("Dans quel département se trouve le Mont-Saint-Michel ?", ["Finistère","Calvados","Manche","Ille-et-Vilaine"], 2, "Le Mont-Saint-Michel est dans la Manche (50), classé à l'UNESCO.", 2, ["cm2","geo","relief","departements"]),
    q("4e-3e : Quel pays est coloré sur cette carte simplifiée de l'Europe ?", ["L'Italie","L'Allemagne","L'Espagne","Le Royaume-Uni"], 0, "Méthode : la forme allongée au sud de l'Europe, en péninsule dans la Méditerranée, correspond à l'Italie. On élimine l'Allemagne, plus centrale, et l'Espagne, plus à l'ouest.", 4, ["cycle4","geo","cartes","europe"], { type: "map", highlight: "italy" }),
    
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
    q("Quel pays correspond au drapeau tricolore affiché ?", ["Italie","France","Pays-Bas","Luxembourg"], 1, "Le drapeau tricolore bleu-blanc-rouge est le drapeau de la France depuis la Révolution de 1789.", 1, ["geo","drapeaux","europe"], { type: "flag", flag: "🇫🇷" }),
    q("À quel pays appartient ce drapeau : 🇩🇪 ?", ["Belgique","Allemagne","Autriche","Hongrie"], 1, "Le drapeau allemand est noir-rouge-or, couleurs du mouvement démocratique du XIXe siècle.", 1, ["geo","drapeaux","europe"]),
    q("Quel pays correspond au drapeau avec un disque rouge ?", ["Chine","Corée du Sud","Japon","Singapour"], 2, "Le drapeau japonais (Hinomaru) représente un disque rouge sur fond blanc, symbolisant le soleil levant.", 1, ["geo","drapeaux","monde"], { type: "flag", flag: "🇯🇵" }),
    q("À quel pays appartient ce drapeau : 🇧🇷 ?", ["Argentine","Colombie","Brésil","Venezuela"], 2, "Le drapeau brésilien est vert avec un losange jaune et un cercle bleu étoilé.", 1, ["geo","drapeaux","monde"]),
    q("À quel pays appartient ce drapeau : 🇨🇦 ?", ["États-Unis","Australie","Canada","Nouvelle-Zélande"], 2, "Le drapeau canadien arbore une feuille d'érable rouge sur fond blanc entre deux bandes rouges.", 1, ["geo","drapeaux","monde"]),
    q("À quel pays appartient ce drapeau : 🇬🇧 ?", ["Australie","Irlande","Nouvelle-Zélande","Royaume-Uni"], 3, "L'Union Jack (drapeau britannique) combine les croix de Saint-Georges, Saint-André et Saint-Patrick.", 1, ["geo","drapeaux","europe"]),
    q("À quel pays appartient ce drapeau : 🇮🇹 ?", ["Hongrie","Mexique","Italie","Irlande"], 2, "Le drapeau italien est vert-blanc-rouge, avec trois bandes verticales.", 1, ["geo","drapeaux","europe"]),
    q("À quel pays appartient ce drapeau : 🇨🇳 ?", ["Vietnam","Chine","URSS","Corée du Nord"], 1, "Le drapeau chinois est rouge avec une grande étoile jaune et quatre petites, symbolisant le Parti communiste.", 1, ["geo","drapeaux","monde"]),
    q("À quel pays appartient ce drapeau : 🇺🇸 ?", ["Australie","Liberia","États-Unis","Royaume-Uni"], 2, "Le drapeau américain a 50 étoiles (un par État) et 13 bandes (les premières colonies).", 1, ["geo","drapeaux","monde"]),
    q("À quel pays appartient ce drapeau : 🇪🇸 ?", ["Portugal","Colombie","Espagne","Venezuela"], 2, "Le drapeau espagnol est rouge-jaune-rouge, avec les armoiries royales au centre.", 1, ["geo","drapeaux","europe"]),
    q("À quel pays appartient ce drapeau : 🇸🇦 ?", ["Irak","Iran","Arabie saoudite","Pakistan"], 2, "Le drapeau saoudien est vert avec la Shahada (profession de foi musulmane) et un sabre.", 2, ["geo","drapeaux","monde"]),
    q("À quel pays appartient ce drapeau : 🇧🇪 ?", ["Allemagne","Belgique","Pays-Bas","Luxembourg"], 1, "Le drapeau belge est noir-jaune-rouge (bandes verticales), inspiré du drapeau du Brabant.", 2, ["geo","drapeaux","europe"]),
    q("À quel pays appartient ce drapeau : 🇨🇭 ?", ["Autriche","Danemark","Suisse","Vatican"], 2, "Le drapeau suisse est rouge avec une croix blanche. C'est l'un des deux seuls drapeaux carrés.", 2, ["geo","drapeaux","europe"]),
    q("À quel pays appartient ce drapeau : 🇦🇺 ?", ["Nouvelle-Zélande","Australie","Royaume-Uni","Canada"], 1, "Le drapeau australien comporte l'Union Jack, l'étoile du Commonwealth et la Croix du Sud.", 2, ["geo","drapeaux","monde"]),
    q("À quel pays appartient ce drapeau : 🇲🇦 ?", ["Algérie","Tunisie","Maroc","Libye"], 2, "Le drapeau marocain est rouge avec une étoile verte à cinq branches (l'étoile de Salomon).", 2, ["geo","drapeaux","monde"]),
    q("À quel pays appartient ce drapeau : 🇵🇱 ?", ["Autriche","Croatie","Pologne","Russie"], 2, "Le drapeau polonais est blanc et rouge (bandes horizontales), couleurs de l'armoirie nationale.", 1, ["geo","drapeaux","europe"]),
    q("Combien d'étoiles y a-t-il sur le drapeau européen 🇪🇺 ?", ["13","15","12","27"], 2, "Le drapeau de l'UE a toujours 12 étoiles dorées, symbole de perfection et d'unité — pas une par pays.", 2, ["geo","drapeaux","europe"]),
    
    // ════════════════════════════════════════════════════════════════════
  ];
}
