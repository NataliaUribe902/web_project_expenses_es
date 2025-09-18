let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";
const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
function calculateTotalExpenses() {
  totalExpensesValue = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    totalExpensesValue += expenseEntries[i][1];
  }
  return totalExpensesValue;
}
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}
function updateBalanceColor() {
  const balance = calculateBalance();

  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}
function calculateCategoryExpenses(category) {
  let categoryTotal = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      categoryTotal += expenseEntries[i][1];
    }
  }

  return categoryTotal;
}
function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  const categoriesData = [];
  for (let i = 0; i < categories.length; i++) {
    const total = calculateCategoryExpenses(categories[i]);
    categoriesData.push([categories[i], total]);
  }
  let largestCategory = categoriesData[0][0];
  let largestTotal = categoriesData[0][1];

  for (let i = 1; i < categoriesData.length; i++) {
    if (categoriesData[i][1] > largestTotal) {
      largestCategory = categoriesData[i][0];
      largestTotal = categoriesData[i][1];
    }
  }

  return largestCategory;
}
function addExpenseEntry(newEntry) {
  expenseEntries.push(newEntry);
  totalExpensesValue += newEntry[1];
}
