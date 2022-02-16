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
    if (
        incomeAmount < 0 ||
        isNaN(incomeAmount) ||
        foodPrice < 0 ||
        isNaN(foodPrice) ||
        rentPrice < 0 ||
        isNaN(rentPrice) ||
        clothPrice < 0 ||
        isNaN(clothPrice)
    ) {
        alert("Please give positive integer value");
    } else {
        const totalExpense = foodPrice + rentPrice + clothPrice;
        if (totalExpense > incomeAmount) {
            alert(
                "total expenses exceeds total income. Put a value that is lower than total income"
            );
        } else {
            document.getElementById("total-expenses").innerText = totalExpense;
            const balance = incomeAmount - totalExpense;
            document.getElementById("balance").innerText = balance;
        }
    }
});

document.getElementById("savings").addEventListener("click", function () {
    // line added
    const incomeAmount = getInput("income");
    const foodPrice = getInput("food");
    const rentPrice = getInput("rent");
    const clothPrice = getInput("clothes");
    const savingsPercent = getInput("save");
    if (
        incomeAmount < 0 ||
        isNaN(incomeAmount) ||
        foodPrice < 0 ||
        isNaN(foodPrice) ||
        rentPrice < 0 ||
        isNaN(rentPrice) ||
        clothPrice < 0 ||
        isNaN(clothPrice)
    ) {
        alert("Please give positive value");
    } else {
        const totalExpense = foodPrice + rentPrice + clothPrice;
        if (totalExpense > incomeAmount) {
            alert(
                "total expenses exceeds total income. Put a value that is lower than total income"
            );
        } else {
            const balance = incomeAmount - totalExpense;
            const savingsTotal = (incomeAmount / 100) * savingsPercent;
            if (
                savingsTotal > balance ||
                isNaN(savingsTotal) ||
                savingsTotal < 0
            ) {
                alert(
                    "please enter a positive value which will not exceed the total balance"
                );
            } else {
                const savingAmount = document.getElementById("saving-amount");
                savingAmount.innerText = savingsTotal;
                const savingAmountVal = parseFloat(savingAmount.innerText);
                const finalBalance = balance - savingAmountVal;
                document.getElementById("rest-balance").innerText =
                    finalBalance;
            }
        }
    }
});
