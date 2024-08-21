class FinanceManager {
    constructor() {
        this.income = [];
        this.expenses = [];
    }

    addIncome(description, amount) {
        this.income.push({ description, amount });
        console.log(`Income added: ${description} - $${amount}`);
    }

    // Method to add an expense entry
    addExpense(description, amount, category) {
        this.expenses.push({ description, amount, category });  // Add an expense entry as an object
        console.log(`Expense added: ${description} - $${amount} (${category})`);
    }

    
    getTotalIncome(){
        return this.expenses.reduce((total,item)=> total+item.amount,0)
    }

    getTotalExpenses(){
        return this.expenses.reduce((total,item)=>total+item.amount,0)
    }

    getBalance(){
        return this.getTotalIncome() - this.getTotalExpenses()
    }
}


const fm = new FinanceManager(); // Create an instance of the FinanceManager class
fm.addIncome("Salary", 5000); // Add some income
fm.addIncome("Freelance Work", 1200); // Add more income
fm.addExpense("Rent", 1200, "Housing"); // Add an expense
fm.addExpense("Groceries", 300, "Food"); // Add another expense

console.log("Total Income:", fm.getTotalIncome()); // Should output: 6200
console.log("Total Expenses:", fm.getTotalExpenses()); // Should output: 1500
console.log("Remaining Balance:", fm.getBalance()); // Should output: 4700
