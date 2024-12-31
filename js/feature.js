document.getElementById('show-add-money-form').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cashout-money-form').classList.add('hidden');
});

document.getElementById('show-cashout-form').addEventListener('click', function(){
    document.getElementById('cashout-money-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
});