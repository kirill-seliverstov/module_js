let btnNewExpense = document.querySelector('.js-add-expenses-button');

let listOfExpenses = document.querySelector('.expenses__list');
let newExpenseSum = document.querySelector('.expenses__sum');
let newExpenseCategory = document.querySelector('.expenses__category');
let newExpenseDate = document.querySelector('.expenses__date');

let selectCategories = document.querySelector('.expenses__category');

btnNewExpense.addEventListener('click', addExpense);

function addExpense(e) {
    e.preventDefault();

    let valueSum = newExpenseSum.value;
    let valueCategory = newExpenseCategory.value;
    let valueDate = newExpenseDate.value;

    let newExpenses = {
        sum: valueSum,
        category: valueCategory,
        date: valueDate,
    };

    expenses.push(newExpenses);

    renderExpenses();

    newExpenseSum.value = '';
}

function renderExpensesCategories() {
    selectCategories.innerHTML = '<option value="">Select category</option>';

    categories.forEach(function(category) {
        let option = document.createElement('option');

        option.value = category;
        option.textContent = category;

        selectCategories.appendChild(option);
    });
}

function renderExpensesDate() {
    let dateExpenses = document.querySelector('.expenses__date');

    dateExpenses.value = new Date().toISOString().slice(0, 10);
};

// Рендер расходов
function renderExpenses() {
    listOfExpenses.innerHTML = '';

    expenses.forEach(function(expense) {
        listOfExpenses.appendChild(templateExpenseItem(expense));
    });
};

function templateExpenseItem(expense) {
    let expenseItem = document.createElement('div');
    expenseItem.className = 'expenses__item';

    for(let key in expense) {
        let expensesSumOfMoney = document.createElement('p');

        if(key == 'sum') {
            expensesSumOfMoney.textContent = expense[key];
            expenseItem.appendChild(expensesSumOfMoney);
        }

        let expenseName = document.createElement('p');

        if(key == 'category') {
            expenseName.textContent = expense[key];
            expenseItem.appendChild(expenseName);
        }

        let expensesDate = document.createElement('p');

        if(key == 'date') {
            expensesDate.textContent = expense[key];
            expenseItem.appendChild(expensesDate);
        }
        
    }

    return expenseItem;
}
