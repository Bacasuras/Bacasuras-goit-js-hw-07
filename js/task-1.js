const categories = document.querySelectorAll('h2');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(categories => {
  const nextUl = categories.nextElementSibling;

  if (nextUl && nextUl.tagName === 'UL') {
    const listItems = nextUl.querySelectorAll('li');

    console.log(`Category: ${categories.textContent.trim()} \nElements: ${listItems.length}`);
  }
});
