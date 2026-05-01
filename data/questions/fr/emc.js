export function emcQuestions(q) {
  return [
    // EMC — Règles, droits, institutions, écologie, vivre ensemble
    q("CP : Une règle de classe sert à :", ["Vivre ensemble plus calmement","Empêcher d'apprendre","Changer la météo","Faire disparaître les livres"], 0, "Les règles aident chacun à apprendre et à respecter les autres.", 1, ["cp","emc","regles","vivre_ensemble"]),
    q("CE1 : Attendre son tour de parole montre :", ["Du respect","De la triche","Une punition","Une météo"], 0, "Attendre son tour permet à chacun de s'exprimer.", 1, ["ce1","emc","regles","vivre_ensemble"]),
    q("CE2 : Une règle commune doit être :", ["Connue et respectée par tous","Secrète","Changée toutes les minutes","Réservée à une seule personne"], 0, "Une règle commune fonctionne si elle est claire et partagée.", 1, ["ce2","emc","regles"]),
    q("Collège : Le règlement intérieur d'un collège définit :", ["Les droits et devoirs dans l'établissement","La météo de l'année","Les capitales du monde","Les planètes"], 0, "Le règlement intérieur fixe les règles de vie dans l'établissement.", 3, ["college","emc","regles","droits"]),

    q("CP : Tous les enfants ont le droit :", ["D'apprendre","De conduire une voiture","De décider toutes les lois seuls","De ne jamais respecter personne"], 0, "L'éducation est un droit important pour les enfants.", 1, ["cp","emc","droits"]),
    q("CE1 : Un droit va souvent avec :", ["Un devoir","Un volcan","Une couleur","Une addition"], 0, "Dans la vie collective, les droits s'accompagnent de devoirs envers les autres.", 1, ["ce1","emc","droits","vivre_ensemble"]),
    q("Collège : La liberté d'expression permet :", ["D'exprimer ses idées dans le respect de la loi","D'insulter sans limite","De voler un objet","De refuser tous les droits"], 0, "La liberté d'expression existe avec des limites, comme le respect d'autrui et de la loi.", 3, ["college","emc","droits"]),
    q("Lycée : Dans la DDHC, l'article 1 affirme surtout que les hommes :", ["Naissent libres et égaux en droits","Doivent tous exercer le même métier","Sont soumis au roi de droit divin","Peuvent abolir toute loi individuelle"], 0, "Raisonnement : la DDHC fonde l'égalité juridique moderne en affirmant que les hommes naissent et demeurent libres et égaux en droits.", 5, ["lycee","emc","droits","histoire","revolution"]),

    q("CE2 : Le maire dirige :", ["La commune","Le continent","La galaxie","L'océan"], 0, "Le maire est élu pour administrer une commune.", 1, ["ce2","emc","institutions"]),
    q("CM1 : Le président de la République est élu par :", ["Les citoyens électeurs","Les volcans","Les fleuves","Les étoiles"], 0, "En France, le président est élu au suffrage universel direct.", 2, ["cm1","emc","institutions","republique"]),
    q("Collège : Le Parlement vote principalement :", ["Les lois","Les saisons","Les montagnes","Les planètes"], 0, "Le Parlement discute et vote les lois.", 3, ["college","emc","institutions"]),
    q("Lycée : La séparation des pouvoirs distingue notamment :", ["Exécutif, législatif et judiciaire","Administration, entreprises et associations","Commune, département et région seulement","Majorité, opposition et médias"], 0, "Raisonnement : la séparation des pouvoirs évite qu'un seul pouvoir concentre toutes les décisions ; elle distingue la fabrication de la loi, son application et le contrôle par la justice.", 5, ["lycee","emc","institutions"]),

    q("CP : Trier ses déchets peut aider à :", ["Recycler","Salir exprès","Gaspiller l'eau","Casser les plantes"], 0, "Le tri facilite le recyclage de certains déchets.", 1, ["cp","emc","ecologie","environnement"]),
    q("CE1 : Éteindre la lumière en sortant d'une pièce permet d'économiser :", ["De l'énergie","Des cailloux","Des nuages","Des mots"], 0, "Éteindre une lumière inutile évite de gaspiller de l'énergie.", 1, ["ce1","emc","ecologie"]),
    q("CE2 : Protéger la nature, c'est aussi protéger :", ["Les êtres vivants et leurs milieux","Seulement les ordinateurs","Les multiplications","Les panneaux"], 0, "La protection de la nature concerne les êtres vivants et leurs habitats.", 1, ["ce2","emc","ecologie","environnement"]),
    q("Collège : Le développement durable cherche à concilier :", ["Environnement, économie et société","Seulement la vitesse","Seulement la mode","Seulement le passé"], 0, "Le développement durable prend en compte les besoins environnementaux, économiques et sociaux.", 3, ["college","emc","ecologie","environnement"]),

    q("CP : Aider un camarade qui tombe, c'est faire preuve de :", ["Solidarité","Moquerie","Danger","Silence obligatoire"], 0, "La solidarité consiste à aider les autres.", 1, ["cp","emc","vivre_ensemble"]),
    q("CE1 : Pour résoudre un désaccord, on peut d'abord :", ["Parler calmement","Crier plus fort","Pousser","Cacher le problème"], 0, "Parler calmement aide à comprendre le point de vue de chacun.", 1, ["ce1","emc","vivre_ensemble"]),
    q("CE2 : Respecter une différence, c'est :", ["Accepter que chacun ne soit pas pareil","Se moquer","Interdire de parler","Toujours être d'accord"], 0, "Respecter les différences aide à mieux vivre ensemble.", 1, ["ce2","emc","vivre_ensemble","droits"]),
    q("Collège : La laïcité garantit notamment :", ["La liberté de conscience","L'interdiction de penser","La fin des règles","Le choix des notes"], 0, "La laïcité protège la liberté de conscience et la neutralité de l'État.", 3, ["college","emc","vivre_ensemble","droits","republique"]),
  ];
}
