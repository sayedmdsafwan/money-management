// const saveInput = document.getElementById('save');

function getInput(inputId) {
    const inputVal = document.getElementById(inputId);
    const inputText = inputVal.value;
    const inputAmount = parseFloat(inputText);
    return inputAmount;
}

document.getElementById("calculate").addEventListener("click", function () {
    const incomeAmount = getInput("income");
    const foodPrice = getInput("food");
    const rentPrice = getInput("rent");
    const clothPrice = getInput("clothes");
    if (incomeAmount < 0 || foodPrice < 0 || rentPrice < 0 || clothPrice < 0) {
        alert("Please give positive value");
    } else {
        const totalExpense = foodPrice + rentPrice + clothPrice;
        if (totalExpense > incomeAmount) {
            alert("total expenses exceeds total income. Put a value that is lower than total income");
        } else {
            document.getElementById("total-expenses").innerText = totalExpense;
            const balance = incomeAmount - totalExpense;
            document.getElementById("balance").innerText = balance;
        }
    }
});

document.getElementById("savings").addEventListener("click", function () {
    const incomeAmount = getInput("income");
    const savingsPercent = getInput("save");
    const savingsTotal = (incomeAmount / 100) * savingsPercent;
    document.getElementById("saving-amount").innerText = savingsTotal;
});
