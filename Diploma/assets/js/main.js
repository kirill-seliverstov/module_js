let addCategoryButton = document.querySelector('#js-add-category')
let categoryName = document.querySelector('#js-category-name');
let listOfCategories = document.querySelector('#js-list-of-categories');


addCategoryButton.addEventListener('click', addCategory);

function addCategory(e) {
    e.preventDefault();

    // Добавление категории в глобальную переменную
    categories.push(categoryName.value);

    console.log(categories);

    renderCategory();

    categoryName.value = '';
}

function renderCategory() {
    listOfCategories.innerHTML = '';

    categories.forEach(function(category) {
        listOfCategories.appendChild(templateCategoryItem(category));
    });
}

// Создание элемента категории 
function templateCategoryItem(name) {
    let categoryItem = document.createElement('div');
    categoryItem.className = 'categories__item';

    let categoryItemName = document.createElement('p');
    categoryItemName.className = 'categories__name';
    categoryItemName.textContent = name;

    categoryItem.appendChild(categoryItemName);

    let categoryAbilities = document.createElement('div');

    categoryItem.appendChild(categoryAbilities);

    let deleteItem = document.createElement('button');
    deleteItem.className = 'button';
    deleteItem.textContent = 'x';
    deleteItem.style.marginRight = '7px';

    categoryAbilities.appendChild(deleteItem);

    let renameItem = document.createElement('button');

    renameItem.className = 'button';
    renameItem.textContent = 'rename';

    categoryAbilities.appendChild(renameItem);

    return categoryItem;
}