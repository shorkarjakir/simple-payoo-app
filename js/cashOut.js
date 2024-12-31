document.getElementById('add-money-cashout-btn').addEventListener('click', function(data){
    data.preventDefault();

    const amount = document.getElementById('input-cashout-amount').value;
    const pin = document.getElementById('type-cashout-pin').value;
    const availableBalance = document.getElementById('Available-balance').innerText;

    if(pin === '1234'){
        const amountValue = parseFloat(amount);
        const availableBalanceValue = parseFloat(availableBalance);
        const newBalance = availableBalanceValue - amountValue;
        document.getElementById('Available-balance').innerText = newBalance;
    }
    else{
        alert('Type pin 1234');
    }

    document.getElementById('input-cashout-amount').value = '';
    document.getElementById('type-cashout-pin').value = '';
});