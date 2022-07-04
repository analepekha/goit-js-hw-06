const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')

const arrOfIngredients = ingredients.map((ingredient) => {
  let item = document.createElement('li')
  item.innerHTML = ingredient;
  item.classList.add('item')
  return item
});
list.append(...arrOfIngredients)



