document.getElementById('submit-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    if(userEmail ==='baperbank@gmail.com' && userPassword === 'secret'){
        window.location.href = 'balance.html';
    }
    else{
        alert('toke tejjo sontan korlam')
    }

    
})