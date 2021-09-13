let btnNewExpense = document.querySelector('.js-add-expenses-button');

let newExpenseSum = document.querySelector('.expenses__sum');
let newExpenseCategory = document.querySelector('.expenses__category');
let newExpenseDate = document.querySelector('.expenses__date');

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

    total.push(newExpenses);

    console.log(total);
}

function renderExpensesCategories() {
    let selectCategories = document.querySelector('.expenses__category');

    selectCategories.innerHTML = '<option value="">Select category</option>'

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

