document.addEventListener('DOMContentLoaded', function(){
    $("#monthlyIncome").text(`$${user.income}`)
    $("#totalExpenses").text(`$${expenseData.totalExpenses}`)
    $("#balance").text(`$${user.income - expenseData.totalExpenses}`)
    handleMonthFilter()
    setCategoryDropdown()
    addExpenseHandler()
})

function setCategoryDropdown() {
    const categoryDropdown = document.getElementById("category");
    const expenseCategories = new Set(expenseData.expenses.map((expense) => expense.categoryName))
    expenseCategories.forEach(function (item) {
        const op = document.createElement("option");
        op.text = item;
        op.value = item;
        categoryDropdown.appendChild(op);
    });
}

function addExpenseHandler() {
    $(".expButton").click(function (event) {
        event.preventDefault(); // to stop page scrolling on showing modal window
        const mode = $(this).data("mode");
        if (mode === "edit") {
            const expense = $(this).data("expense");
            console.log(expense);
            $("#modalTitle").text("Edit Expense");
            $("#date").val(expense.date.split("T")[0]);
            $("#category").val(expense.categoryName);
            $("#description").val(expense.description);
            $("#amount").val(expense.amount);
            $("#expense-submit-btn").text("Save Changes");
            $("#expenseModal").modal("show");
        } else {
            $("#modalTitle").text("Add Expense");
            $("#expense-submit-btn").text("Submit");
            $("#expenseForm")[0].reset();  // Clear form fields if adding a new expense
            $("#expenseModal").modal("show");
        }
    });
}

function readExpensesByMonthFilter() {
    const monthYear = $("#monthFilter").val();
    return expenseData.expenses.filter(expense => {
        const date = new Date(expense.date);
        const expenseYear = date.getUTCFullYear();
        const expenseMonth = (date.getUTCMonth() + 1).toString().padStart(2, "0");
        return `${expenseYear}-${expenseMonth}` === monthYear;
    });
}

function calculateSummaryData(filteredMonthExpenses) {
    let totalExpensesPerMonth = 0
    let summaryData = new Map()
    filteredMonthExpenses.forEach(expense => {
        totalExpensesPerMonth += expense.amount
        const categoryName = expense.categoryName
        const categoryExpense = summaryData.has(categoryName) ? (summaryData.get(categoryName) + expense.amount) : expense.amount
        summaryData.set(categoryName, categoryExpense)
    })
    const result = []
    for (let [categoryName, amount]  of summaryData.entries()) {
        const percentage = (amount / totalExpensesPerMonth * 100).toPrecision(3).toString() + "%"
        result.push({categoryName: categoryName, percentage: percentage})
    }
    return result
}

function handleMonthFilter() {
    const filteredMonthExpenses = readExpensesByMonthFilter();
    const expenseSummaryData = calculateSummaryData(filteredMonthExpenses);
    Promise.allSettled([
        renderExpenseSummary(expenseSummaryData),
        renderExpenseData(filteredMonthExpenses)
    ])
}

function updateDateFormat(rawDate) {
    const date = new Date(rawDate);
    const month = date.toLocaleString("en-us", { month: "short" });
    const day = date.getDate();
    const dayOfWeek = date.toLocaleString("en-us", { weekday: "short" });
    return `${month} ${day}, ${dayOfWeek}`;
}

async function renderExpenseSummary(expenseSummaryData) {
    const summaryTableBody = document.querySelector("#expense-summary tbody");
    summaryTableBody.innerHTML = "";
    expenseSummaryData.forEach(function (expenseCat) {
        const row = document.createElement("tr");
        const categoryCell = document.createElement("td");
        categoryCell.textContent = expenseCat.categoryName;
        row.appendChild(categoryCell);
        const percentageCell = document.createElement("td");
        percentageCell.textContent = expenseCat.percentage;
        row.appendChild(percentageCell);
        summaryTableBody.appendChild(row);
    });
}

async function renderExpenseData(expenses) {
    const tableBody = document.querySelector("#expense-details tbody");
    tableBody.innerHTML = "";
    expenses.forEach(function (expense) {
        const row = document.createElement("tr");
        /**Date column**/
        const dateCell = document.createElement("td");
        dateCell.textContent = updateDateFormat(expense.date);
        dateCell.className = "text-nowrap";
        row.appendChild(dateCell);
        /**Description column**/
        const descriptionCell = document.createElement("td");
        descriptionCell.textContent = expense.description;
        row.appendChild(descriptionCell);
        /**Amount column**/
        const amountCell = document.createElement("td");
        amountCell.textContent = "$" + expense.amount;
        row.appendChild(amountCell);
        console.log(JSON.stringify(expense) )
        /**Edit and Delete icons**/
        const controlCell = document.createElement("td");
        controlCell.innerHTML =
            '<a href="#" class="me-2 edit expButton" data-mode="edit"' +
            " data-expense='" + JSON.stringify(expense) + "'>" +
            '<img src="./images/edit.png" alt="Edit" class="icon"/></a>' +
            '<a href="#" class="delete" data-bs-toggle="modal"' +
            ' data-bs-target="#deleteModal"><img src="./images/delete.png" alt="Delete" class="icon"/></a>';
        row.appendChild(controlCell);
        tableBody.appendChild(row);
    });

}