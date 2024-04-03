let expenses = [];
    let totalExpense = 0;

    function addExpense(){
        const expenseInput = document.getElementById("expenseInput")
        const purposeInput = document.getElementById("purposeInput");
        const amount = parseFloat(expenseInput.value);
        const purpose = purposeInput.value.trim();

        if (isNaN(amount) || amount <= 0){
            alert("please enter a valid positive number");
            return;
        }

        expenses.push({amount, purpose});
        totalExpense += amount;

        updateExpenseList();
        updateTotalExpenses();

        expenseInput.value = '';
        purposeInput.value = '';
    }


    function updateExpenseList(){
        const expenseList = document.getElementById("expenseList");
        expenseList.innerHTML = '';

        expenses.forEach((expense, index) => {
             const listItem = document.createElement("li");
             listItem.textContent = `Expense ${index + 1}: $${expense.amount} - ${expense.purpose}`;
             expenseList.appendChild(listItem);
        });

        
    }
    function updateTotalExpenses(){
            const totalExpensesElement = document.getElementById("totalExpense");
            totalExpensesElement.textContent = totalExpense;
        }