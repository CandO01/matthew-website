

function clickSignUp(){
    const signUp = document.getElementById('signup1');
    if(signUp.innerHTML === 'Sign Up'){
        signUp.innerHTML = alert('Thank you! Your account has been created successfully');
        signUp.innerHTML = 'Signed In';
    }else{
        signUp.innerHTML = 'Sign Up';
    }
}