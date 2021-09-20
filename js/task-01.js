const categoriesRef = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(element => {
  const categoryTitle = element.querySelector('h2').textContent;
  const categoryCountEl = element.querySelectorAll('li').length;
  console.log(
    `Категория: ${categoryTitle}\nКоличество элементов: ${categoryCountEl}`,
  );
});
