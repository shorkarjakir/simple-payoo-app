document.getElementById('login-btn').addEventListener('click', function(data){
    data.preventDefault();
    
    const inputValue = document.getElementById('input-number').value;
    const inputNumber = document.getElementById('input-pin').value;

    if(inputValue === '7' && inputNumber === '1234'){
        window.location.href = './login.html';
    }
    else{
        alert('Please enter 7 and 1234 to login');
    };    
    
});