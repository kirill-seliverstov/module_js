let newCategory = document.querySelector('.js-category');
let btnNewCategory = document.querySelector('.js-add-category');

let listCategory = document.querySelector('.categoryes__list');

let statusEditCategory = false;

btnNewCategory.addEventListener('click', addCategory);
listCategory.addEventListener('click', funcCategory);

function addCategory (e) {
    e.preventDefault();

    let value =  newCategory.value;

    // Валидация новой категирии
    if(validateCategoty(value)) {
        return
    }

    // Добавление категории в глобальную переменную
    categoryes.push(newCategory.value)

    // Перерендер всех категорий
    renderCategory();

    // Очистка поля ввода
    newCategory.value = '';
}

function validateCategoty (category) {
    let hasErrors = false;

    if(category === "") {
        hasErrors = true;
    } else if(categoryes.includes(category)) {
        hasErrors = true;
    }

    return hasErrors;
}

// Рендер листа категорий
function renderCategory () {
    listCategory.innerHTML = '';

    categoryes.forEach(function(category) {
        listCategory.appendChild(templateItemCategory(category))
    })

    renderExpensesCategoryes();
    renderTotalCategoryes('modal__category');
    renderTotalCategoryes('filter-category');
}

// Создание элемаента категории
function templateItemCategory(name){
    let wrapperItem = document.createElement('div');
    wrapperItem.className = 'categoryes__item';

    let textItem = document.createElement('p');
    textItem.className = 'categoryes__name';
    textItem.textContent = name;

    wrapperItem.appendChild(textItem);

    let controlItem = document.createElement('div');
    controlItem.className = 'categoryes__control';

    let renameItem = document.createElement('button');
    renameItem.className = 'categoryes__rename button';
    renameItem.textContent = 'Rename';

    controlItem.appendChild(renameItem);

    let deleteItem = document.createElement('button');
    deleteItem.className = 'categoryes__delete button';
    deleteItem.textContent = 'Delete';

    controlItem.appendChild(deleteItem);

    wrapperItem.appendChild(controlItem);

    return wrapperItem;
}

function funcCategory(e){
    let target = e.target;

    if(target.classList.contains('categoryes__rename') && !statusEditCategory){
        editCategory(target.parentElement.parentElement)
        statusEditCategory = true;
    }

    if(target.classList.contains('categoryes__delete')){
        deleteCategory(target.parentElement.parentElement)
    }
}

function editCategory(parentElement){
    let pCategory = parentElement.querySelector('.categoryes__name');
    let oldCategory = pCategory.textContent;

    let wrapperItem = document.createElement('div');
    wrapperItem.className = 'categoryes__item';

    let inputItem = document.createElement('input');
    inputItem.className = 'categoryes__name';
    inputItem.value = oldCategory;

    wrapperItem.appendChild(inputItem);

    let editItem = document.createElement('button');
    editItem.className = 'categoryes__edit button';
    editItem.textContent = 'Edit';

    wrapperItem.appendChild(editItem);

    listCategory.replaceChild(wrapperItem, parentElement);

    editItem.addEventListener('click', function(){
        categoryes.forEach(function(category, index){
            
            if(category === oldCategory){
                categoryes[index] = inputItem.value;

                renderCategory();
            }
        })

        statusEditCategory = false;
    })
}

function deleteCategory(parentElement){
    let pCategory = parentElement.querySelector('.categoryes__name');
    let category = pCategory.textContent;

    const permission = confirm(`Удалить категорию ${category}?`);

    if(permission){
        categoryes.splice(categoryes.indexOf(category), 1);

        renderCategory();
    }
}