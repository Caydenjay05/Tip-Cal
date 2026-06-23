// Tip Calculator JavaScript Code
document.getElementById("calculateButton").onclick = function () // Calculate tip amount   

{
    let bill = document.getElementById("billAmount").value;// Get bill amount from input field
    let tipPercent = document.getElementById("tipPercentage").value;

    let tip = bill * (tipPercent / 100);// Calculate tip amount
    let splitCount = document.getElementById("splitCount").value; // Get number of people to split the bill
    let totalPerPerson = (parseFloat(bill) + tip) / splitCount; // Calculate total amount per person

    document.getElementById("result").textContent =
        "Tip Amount: $" + tip.toFixed(2);// Display tip amount in result div
};