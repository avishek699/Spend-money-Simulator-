let totalMoney = 254.7e9; // 254.7 billion dollars
let purchaseCount = 0;

function purchaseItem(price, countId) {
    if (totalMoney >= price) {
        totalMoney -= price;
        purchaseCount++;
        document.getElementById('totalMoney').innerText = `$${totalMoney.toFixed(2)}`;
        document.getElementById(countId).innerText = `Purchases: ${purchaseCount}`;

        // Update total money in the popup
        document.getElementById('totalMoneyPopupValue').innerText = `$${totalMoney.toFixed(2)}`;

        // Show the popup
        showTotalMoneyPopup();
    } else {
        alert("You cannot purchase this at current time");
    }
}

function showTotalMoneyPopup() {
    const totalMoneyPopup = document.getElementById('totalMoneyPopup');
    totalMoneyPopup.style.display = 'block';

    // Hide the popup after 3 seconds (adjust as needed)
    setTimeout(() => {
        totalMoneyPopup.style.display = 'none';
    }, 6000);
}