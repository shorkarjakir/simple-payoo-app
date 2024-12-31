document.getElementById("add-money-btn").addEventListener("click", function(data){
    data.preventDefault();

    const amount = document.getElementById("input-amount").value;
    const pin = document.getElementById("type-pin").value;
    const avaialableBalance = document.getElementById("Available-balance").innerText;

    if(pin == '1234'){
        const amountValue = parseFloat(amount);
        const avaialableBalanceValue = parseFloat(avaialableBalance);
        const newBalance = amountValue + avaialableBalanceValue;
        document.getElementById("Available-balance").innerText = newBalance;
    }
    else{
        alert("Type pin 1234");
    }

    document.getElementById("input-amount").value = "";
    document.getElementById("type-pin").value = "";
    
        
});