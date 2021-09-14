let addCategoryButton = document.querySelector('#js-add-category')
let categoryName = document.querySelector('#js-category-name');
let listOfCategories = document.querySelector('#js-list-of-categories');

let statusEditCategory = false;

addCategoryButton.addEventListener('click', addCategory);
listOfCategories.addEventListener('click', funcCategory);

function addCategory(e) {
    e.preventDefault();

    // Добавление категории в глобальную переменную
    
    if(validateCategoty(categoryName.value)) {
        return
    }
    
    categories.push(categoryName.value);
    
    renderCategory();

    categoryName.value = '';
}

function renderCategory() {
    listOfCategories.innerHTML = '';

    categories.forEach(function(category) {
        listOfCategories.appendChild(templateCategoryItem(category));
    });

    renderExpensesCategories();
}

// Валидация категорий
function validateCategoty (category) {
    let hasErrors = false;

    if(category === "") {
        hasErrors = true;
    } else if(categories.includes(category)) {
        hasErrors = true;
    }

    return hasErrors;
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

    categoryAbilities.className = 'categories__abilities';

    categoryItem.appendChild(categoryAbilities);

    let deleteItem = document.createElement('button');
    
    deleteItem.className = 'categories__delete button';
    deleteItem.textContent = 'x';
    deleteItem.style.marginRight = '7px';

    categoryAbilities.appendChild(deleteItem);

    let renameItem = document.createElement('button');

    renameItem.className = 'categories__rename button';
    renameItem.textContent = 'rename';

    categoryAbilities.appendChild(renameItem);

    return categoryItem;
}

function funcCategory(e){
    let target = e.target;

    if(target.classList.contains('categories__rename') && !statusEditCategory){
        editCategory(target.parentElement.parentElement)
        statusEditCategory = true;
    }

    if(target.classList.contains('categories__delete')){
        deleteCategory(target.parentElement.parentElement)
    }
}

function editCategory(parentElement){
    let pCategory = parentElement.querySelector('.categories__name');
    let oldCategory = pCategory.textContent;

    let categoryItem = document.createElement('div');
    categoryItem.className = 'categories__item';

    let inputItem = document.createElement('input');
    inputItem.className = 'categories__name input';
    inputItem.value = oldCategory;

    categoryItem.appendChild(inputItem);

    let editItem = document.createElement('button');
    editItem.className = 'categories__edit button';
    editItem.textContent = 'Done';

    categoryItem.appendChild(editItem);

    listOfCategories.replaceChild(categoryItem, parentElement);

    editItem.addEventListener('click', function(){
        categories.forEach(function(category, index){
            
            if(category === oldCategory){
                categories[index] = inputItem.value;

                renderCategory();
            }
        })

        statusEditCategory = false;
    })
}

function deleteCategory(parentElement) {
    let pCategory = parentElement.querySelector('.categories__name');
    let category = pCategory.textContent;

    const permission = confirm(`Do you really want to delete \'${category}\'?`);

    if(permission) {
        categories.splice(categories.indexOf(category), 1);

        renderCategory();
    }
}