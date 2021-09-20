const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const ingredientsArr = [];

ingredients.forEach(element => {
  const ingredient = document.createElement('li');
  ingredient.textContent = element;
  ingredientsArr.push(ingredient);
});

ingredientsRef.append(...ingredientsArr);
