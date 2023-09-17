const arrob_dish = {
  "dish_id" : [1,2,3],
  "dish_name" : ["Paksiw na Bangus","Menudo","Mechado"],
  "dish_price" : [60,65,70],
  "ingredients" : [
      "1 1/2 lbs. milkfish cleaned and sliced crosswise into serving pieces,3 thumbs ginger crushed, 5 cloves garlic crushed, 1/2 cup white vinegar, 1 cup water,1 piece onion sliced, 1 piece Chinese eggplant chopped, 5 pieces okra , 2 pieces long green pepper, 1 teaspoon whole peppercorn, Salt to taste",
      "1/4 cup cooking oil, 2 pcs potatoes, medium sized, cut in cubes, 1 pc carrot, medium sized, cut in cubes, 6 cloves garlic, minced, 1 pc onion, minced, 250 grams pork kasim, cut into small cubes, 250 grams pork liempo, cut into small cubes, 250 grams pork liver, cut in small cubes, 1 (250 g) pack tomato sauce, 2 pcs Knorr Pork Broth Cube, 1 1/2 cups water, 1 tsp sugar, ground black pepper to taste, 2 tbsp raisins, 1 cup cubed red and green bell pepper, Optional: 2 bunches Bok-choi, sliced",
      "3 cloves garlic crushed, 1 piece large onion sliced, 2 lbs beef chuck cubed, 8 ounces tomato sauce, 1 cup water ,3 tbsp cooking oil, 1 slice lemon with rind, 1 piece large potato sliced, 1/4 cup soy sauce, 1/2 tsp. ground black pepper, 2 pieces bay leaves laurelsalt to taste"
      ]
};

for(let i=0 ;i<arrob_dish.dish_id.length;i++){
  console.log("ID :"+arrob_dish.dish_id[i]);
  console.log("NAME :"+arrob_dish.dish_name[i]);
  console.log("PRICE:"+arrob_dish.dish_price[i]);
  console.log("INGREDIENTS:");
  console.log(arrob_dish.ingredients[i]);
}