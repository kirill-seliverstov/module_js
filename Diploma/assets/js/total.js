let totalBody = document.querySelector('.total__body');

let modal = document.querySelector('.modal');

let btnEditModal = document.querySelector('.js-edit-modal');
let btnCancelModal = document.querySelector('.js-cancel-modal');

let editOperationSum = document.querySelector('.modal__sum');
let editOperationCategory = document.querySelector('.modal__category');
let editOperationDate = document.querySelector('.modal__date');

let editIndexElement = null;

let btnCancelFilter = document.querySelector('.js-cancel-filter');

let paramsFitlers = {
    category: '',
    sum: '',
    date: '',
    operation: ''
}

btnEditModal.addEventListener("click", function(e){
    e.preventDefault();

    total[editIndexElement].sum = editOperationSum.value
    total[editIndexElement].category = editOperationCategory.value
    total[editIndexElement].date = editOperationDate.value

    filterTotal(total);
    closeModal();
});

btnCancelModal.addEventListener("click", function(e){
    e.preventDefault();

    closeModal();
});

function renderTotal(arrTotal) {
    let allCell = '';

    arrTotal.forEach((operation, index) => {
        allCell += `
            <tr>
                <td class="total__cell">${ index + 1 }</td>
                <td class="total__cell">${ operation.category }</td>
                <td class="total__cell">${ operation.sum }</td>
                <td class="total__cell">${ operation.date }</td>
                <td class="total__cell">${ operation.status }</td>
                <td class="total__cell">
                    <button class="button" onclick="editCell(${index})">Edit</button>
                    <button class="button" onclick="deleteCell(${index})">Delete</button>
                </td>
            </tr>
        `
    })
    totalBody.innerHTML = allCell;
}

function deleteCell(index) {
    total.splice(index, 1);

    renderTotal(total);
}

function editCell(index) {
    editIndexElement = index;
    let operation = total[index];

    editOperationSum.value = operation.sum;
    editOperationCategory.value = operation.category;
    editOperationDate.value = operation.date;

    openModal();
}

function openModal() {
    modal.classList.remove('modal--hidden')
}

function closeModal() {
    modal.classList.add("modal--hidden");

    editOperationSum.value = "";
    editOperationCategory.value = "";
    editOperationDate.value = "";

    editIndexElement = null;
}

function renderTotalCategoryes(className) {
    let selectCategories = document.querySelector(`.${className}`);
    
    selectCategories.innerHTML = '<option value="">All categories</option>';

    categories.forEach(function(category) {
        let option = document.createElement('option');

        option.value = category;
        option.textContent = category;

        selectCategories.appendChild(option);
    })

}

// Filters
document.querySelector(".filter-category").oninput = function(){
    paramsFitlers.category = this.value;
    filterTotal();
}

document.querySelector(".filter-sum").oninput = function(){
    paramsFitlers.sum = this.value;
    filterTotal();
}

document.querySelector(".filter-date").oninput = function(){
    paramsFitlers.date = this.value;
    filterTotal();
}

document.querySelector(".filter-operation").oninput = function(){
    paramsFitlers.operation = this.value;
    filterTotal();
}

function filterTotal(){
    let totalFilers = total.filter((el) => {
        return (el.category === paramsFitlers.category || !paramsFitlers.category) &&
        (el.sum.includes(paramsFitlers.sum) || !paramsFitlers.sum) &&
        (el.date.includes(paramsFitlers.date) || !paramsFitlers.date) &&
        (el.status === paramsFitlers.operation || !paramsFitlers.operation)
    })

    renderTotal(totalFilers);
}

