let dishesId = [
  'soups',
  'nigiris',
  'makis',
  'insideouts',
  'desserts',
  'drinks',
];

let dishes = [
  {
    type: 'Soups',
    extraInfo: '',
    names: "['Misosuppe','Lachssuppe']",
    infos:
      "['typisch gewürzt, verfeinert mit Tofu, Seetang und Frühlingszwiebeln','mit Algen, Frühlingszwiebeln und Lachsfilet-Stücken']",
    prices: "['3.6','4.6']",
  },
  {
    type: 'Nigiris',
    extraInfo: 'Pro Portion werden jeweils 2 Stück Nigiris serviert.',
    names: "['Nigiri Sake Flamed','Nigiri Sake']",
    infos:
      "['mit flambiertem Lachs, Sweet Sauce, Sesam und Frühlingszwiebeln on Top','mit Lachs']",
    prices: "['4.3','4.1']",
  },
  {
    type: 'Makis',
    extraInfo: 'Pro Portion werden jeweils 6 Stück Makis serviert.',
    names:
      "['Kappa','Wakame','Rucola','Avocado','Tofu','Sake Avocado','Salmon','Sake','California','Chicken','Ebi','Crispy Ebi','Salmon Avocado','Sake Spicy']", //  Maki ... (6 Stück)
    infos:
      "['mit Gurke, Frischkäse und Sesam','mit Algensalat, Möhrenstreifen und Sesam','mit Rucola, Frischkäse und Sesam','mit Avocado','mit frittiertem Tofu, Yoko's Cocktail-Mayonnaise und Frühlingszwiebeln','mit Lachs und Avocado','mit gegrillter Lachshaut (salmon skin), Sweet Sauce und Sesam','mit Lachsrolle','mit Surimi und Avocado','mit Chicken, Frühlingszwiebel und Frischkäse','mit Black Tiger Garnelenrolle','mit in Tempura gebackenen Black Tiger Garnelen und Yoko Cocktailmayonnaise','mit gegrillter Lachshaut (salmon skin) und Avocado','mit Lachs, Frühlingszwiebeln und scharfer Sauce']",
    prices:
      "['3.4','3.7','3.6','3.9','3.4','4.6','4.3','4.1','3.7','3.9','4.7','4.2','4.6','4.3']",
  },
  {
    type: 'Inside Out Rolls',
    extraInfo:
      'Pro Portion werden jeweils 8 Stück Rolls mit einer Umhüllung nach Wahl serviert.',
    names:
      "['Tofu Roll','Alaska Roll','California Roll','Philadelphia Roll','Salmon Roll','Rucola Roll','Fitness Roll','Crispy Ebi Roll','Crispy Ebi Roll - Sweet-Chili','Crispy Ebi Roll mit Spicy Mango Sauce (8 Stück)']",
    infos:
      "['mit frittiertem Räuchertofu, Rucola, Gurke und Yoko's Cocktail-Mayonnaise','mit Lachs und Avocado','mit Surimi und Avocado','mit Lachs, Gurke und Frischkäse','mit gegrillter Lachshaut (salmon skin), Gurke, Frühlingszwiebel und Yoko Cocktailmayonnaise','mit Lachs, Rucola und Frischkäse','mit Rucola, Frischkäse, Möhren und Avocado','mit in Tempura gebackenen Black Tiger Garnelen, Rucola, Avocado und Yoko Cocktailmayonnaise','mit in Tempura gebackener Black Tiger Garnele, Rucola, Avocado, Yoko-Cocktailmayonnaise und Sweet-Chilisauce als Topping','mit in Tempura gebackener Black Tiger Garnele, Rucola, Avocado, Yoko Cocktailmayonnaise und Spicy Mango Sauce als Topping']",
    prices: "['4.4','6.2','5.9','6.3','6.1','6.8','5.1','7.3','7.9','7.9']",
  },
  {
    type: 'Dessert',
    extraInfo: '',
    names: "['Gebackene Banane (4 Stück)','Gyoza Apfel']",
    infos:
      "['mit Honig','frittierte Teigtaschen mit Apfelfüllung und Vanille Sauce']",
    prices: "['3.6','5.1']",
  },
  {
    type: 'Alkoholfreie Getränke',
    extraInfo: 'Alle Getränkepreise werden inklusive Pfand aufgeführt.',
    names:
      "['Coca Cola 1,0l (MEHRWEG)','Coca Cola Light 1,0l (MEHRWEG)','Fanta 1,0l (MEHRWEG)','Sprite 1,0l (MEHRWEG)','Mineralwasser mit Kohlensäure 1,0l (MEHRWEG)','Hausgemachter Mango Lassi 0,3l']",
    infos: "['','','','','','']",
    prices: "['3.1','3.1','3.1','3.1','2.9','3.1']",
  },
];
