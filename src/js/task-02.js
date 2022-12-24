const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const listArray = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li')
  item.textContent = ingredient;
  item.className = 'item';
  listArray.push(item);
})

listIngredients.append(...listArray);
console.log(listIngredients);

