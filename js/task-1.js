const categories = document.querySelectorAll('ul#categories > li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent.trim();
  const listItems = category.querySelectorAll('li');

  console.log(`Category: ${categoryTitle} \nElements: ${listItems.length}`);
});
