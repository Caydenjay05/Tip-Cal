// Tip Calculator JavaScript Code
document.getElementById("calculateButton").onclick = function () // Calculate tip amount   

{
    let bill = document.getElementById("billAmount").value;// Get bill amount from input field
    let tipPercent = document.getElementById("tipPercentage").value;

    let tip = bill * (tipPercent / 100);// Calculate tip amount

    document.getElementById("result").textContent =
        "Tip Amount: $" + tip.toFixed(2);// Display tip amount in result div
};