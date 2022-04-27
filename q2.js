getBudgets = [
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
];
function sumBudget(getBudgets) {
    sum = 0;
    getBudgets.forEach((element) => {
        sum += (element.budget)
    });
    return sum;
}
console.log(sumBudget(getBudgets));