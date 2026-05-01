export function technologyQuestions(q) {
  return [
    // TECHNOLOGIE — Algorithmique, logique, sécurité numérique, objets techniques
    q("CP : Un algorithme est comme :", ["Une suite d'étapes","Une couleur","Un animal","Une planète"], 0, "Un algorithme décrit des étapes à suivre dans un ordre.", 1, ["cp","techno","algorithmique"]),
    q("CE1 : Pour se brosser les dents, la première étape est souvent :", ["Prendre la brosse à dents","Ranger le cartable","Éteindre la Lune","Lire la fin"], 0, "Un algorithme met les actions dans un ordre logique.", 1, ["ce1","techno","algorithmique"]),
    q("CE2 : Dans un programme, une boucle sert à :", ["Répéter des instructions","Colorier l'écran uniquement","Supprimer la pile","Mesurer la pluie"], 0, "Une boucle répète une ou plusieurs instructions.", 1, ["ce2","techno","algorithmique"]),
    q("Collège : Une condition en programmation permet de :", ["Choisir une action selon un cas","Toujours répéter sans arrêt","Casser l'ordinateur","Changer la masse"], 0, "Une condition exécute une action si une situation est vraie.", 3, ["college","techno","algorithmique","logique"]),

    q("CP : Si une lampe est allumée, alors elle n'est pas :", ["Éteinte","Jaune","Ronde","Posée"], 0, "Allumée et éteinte sont deux états opposés pour une lampe.", 1, ["cp","techno","logique"]),
    q("CE1 : Vrai ou faux : 3 est plus grand que 5.", ["Faux","Vrai","Les deux","Impossible"], 0, "3 est plus petit que 5, donc la phrase est fausse.", 1, ["ce1","techno","logique","maths"]),
    q("CE2 : Si tous les carrés ont 4 côtés, alors un carré a :", ["4 côtés","3 côtés","5 côtés","0 côté"], 0, "On applique la règle donnée : un carré a 4 côtés.", 1, ["ce2","techno","logique","geometrie"]),
    q("Collège : L'opérateur logique ET est vrai si :", ["Les deux conditions sont vraies","Une seule condition est vraie","Toutes les conditions sont fausses","Il n'y a aucune condition"], 0, "A ET B est vrai seulement si A est vrai et B est vrai.", 3, ["college","techno","logique"]),

    q("CP : Sur Internet, il vaut mieux ne pas donner :", ["Son adresse","Son dessin préféré","La couleur du ciel","Un calcul"], 0, "Une adresse personnelle est une information privée.", 1, ["cp","techno","securite_numerique"]),
    q("CE1 : Un bon mot de passe doit être :", ["Difficile à deviner","Son prénom seul","1234","Le mot password"], 0, "Un mot de passe doit être difficile à deviner.", 1, ["ce1","techno","securite_numerique"]),
    q("CE2 : Si un message bizarre demande ton mot de passe, il faut :", ["Demander à un adulte","Répondre vite","Envoyer le mot de passe","Cliquer partout"], 0, "Il faut demander à un adulte de confiance avant de répondre.", 1, ["ce2","techno","securite_numerique"]),
    q("Collège : Le phishing cherche surtout à :", ["Voler des informations personnelles","Améliorer la batterie","Dessiner une image","Mesurer la vitesse"], 0, "Le phishing utilise de faux messages pour récupérer des informations sensibles.", 3, ["college","techno","securite_numerique"]),

    q("CP : Un vélo est un :", ["Objet technique","Animal","Nuage","Nombre"], 0, "Un vélo est fabriqué par les humains pour répondre à un besoin.", 1, ["cp","techno","objets_techniques"]),
    q("CE1 : Une roue sert souvent à :", ["Faciliter le déplacement","Éclairer une pièce","Mesurer le temps","Faire pousser une plante"], 0, "La roue aide les objets à rouler et à se déplacer.", 1, ["ce1","techno","objets_techniques"]),
    q("Collège : Dans un objet technique, une fonction d'usage répond à la question :", ["À quoi sert-il ?","De quelle couleur est-il ?","Quel âge a-t-il ?","Est-il vivant ?"], 0, "La fonction d'usage explique le service rendu par l'objet.", 3, ["college","techno","objets_techniques"]),
    q("Lycée : Dans une boucle automatisée, le capteur sert surtout à :", ["Transformer une grandeur physique en signal exploitable","Exécuter directement l'action mécanique finale","Choisir seul la consigne du système","Stocker l'énergie nécessaire au fonctionnement"], 0, "Raisonnement : le capteur mesure une grandeur de l'environnement et la convertit en information utilisable par la partie commande.", 5, ["lycee","techno","objets_techniques","algorithmique"]),
  ];
}
