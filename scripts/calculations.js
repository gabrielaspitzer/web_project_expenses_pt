let budgetValue = 0; // Initialize budget value to 0
let totalExpensesValue = 0; // Initialize total expenses value to 0
let balanceColor = "green"; // Initialize balance color to green (default)

let expenseEntries = [
  // Array to store expense entries, each entry is an array with category and amount
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  // Loop through each expense entry to calculate the total expenses value
  totalExpensesValue += expenseEntries[i][1];
}

function calculateAverageExpense() {
  // Function to calculate the average expense
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  // Function to calculate the remaining balance by subtracting total expenses from the budget
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  // Function to update the balance color based on the remaining balance
  const balance = calculateBalance();
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < 0.25 * budgetValue) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  // Function to calculate the total expenses for a specific category
  let total = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      total += expenseEntries[i][1];
    }
  }
  return total;
}

function calculateLargestCategory() {
  // Function to determine which category has the largest total expenses
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  const categoriesTotals = []; // Empty array to store total expenses for each category

  for (let i = 0; i < categories.length; i++) {
    // Loop through each category
    const categoryTotal = calculateCategoryExpenses(categories[i]); // Calculate total expenses for the current category
    categoriesTotals.push([categories[i], categoryTotal]); // Add category and total to the array
  }

  let largestTotal = 0; // Initialize largest total to 0
  let largestCategory = ""; // Initialize largest category to an empty string

  for (let i = 0; i < categoriesTotals.length; i++) {
    // Loop through the categories totals to find the largest total and corresponding category
    if (categoriesTotals[i][1] > largestTotal) {
      largestTotal = categoriesTotals[i][1]; // Update largest total
      largestCategory = categoriesTotals[i][0]; // Update largest category
    }
  }

  return largestCategory;
}

function addExpenseEntry(values) {
  totalExpensesValue += values[1]; // Update total expenses with the new entry
  expenseEntries.push(values); // Add the new entry to the expense entries array
}
