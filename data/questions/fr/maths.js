export function mathsQuestions(q) {
  return [
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
  ];
}
