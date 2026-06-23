// Tip Calculator JavaScript Code
document.getElementById("calculateButton").onclick = function () // Calculate tip amount   

{
    let bill = document.getElementById("billAmount").value;// Get bill amount from input field
    let tipPercent = document.getElementById("tipPercentage").value;

    let tip = bill * (tipPercent / 100);// Calculate tip amount
    let splitCount = document.getElementById("splitCount").value; // Get number of people to split the bill
    let totalPerPerson = (parseFloat(bill) + tip) / splitCount; // Calculate total amount per person
    
    

    document.getElementById("result").textContent =
        "Tip Amount: $" + tip.toFixed(2) + "\nTotal Per Person: $" + totalPerPerson.toFixed(2);// Display tip amount and total per person in result div
};
document.getElementById("calculateBillSplit").onclick = function () // Calculate bill split
{
    let bill = document.getElementById("billAmount").value;// Get bill amount from input field
    let amountofPeople = document.getElementById("numberOfPeople").value; // Get number of people to split the bill
    let totalPerPerson = bill / amountofPeople; // Calculate total amount per person

    document.getElementById("resultBill").textContent =
        "Total Per Person: $" + totalPerPerson.toFixed(2);// Display total per person in result div
}