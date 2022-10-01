document.addEventListener('DOMContentLoaded', function (e){


    const btn = document.querySelector("button");
    const login = document.querySelector('.login');
    const password = document.querySelector('.password');

    btn.addEventListener("click", function(){
        if (login.value == '' || password.value == '')
        {
            console.log('Error: input fields are not filled');
            alert('Error: input fields are not filled');
        }
        else 
        {
            alert(`Login - ${login.value}\nPassword - ${password.value}`);
            console.log(`Login - ${login.value}\nPassword - ${password.value}`);
        }
    });
});