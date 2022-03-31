document.getElementById('form').addEventListener("change", EnableLoginButton);
document.getElementById("username").addEventListener("keyup", EnableLoginButton);
document.getElementById("password").addEventListener("keyup", EnableLoginButton);

function EnableLoginButton(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let loginButton = document.getElementById('login');

    if(username.length >= 6 && password.length >= 6){
        loginButton.disabled = false;
    }
}

/** 
 * Listen to the submit event instead.
 * This will handle click and enter.
 * https://stackoverflow.com/questions/14542062/eventlistener-enter-key
 * */ 
$('#form').on("submit", displayAlertAfterFormSubmission);

function displayAlertAfterFormSubmission(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    alert(`Username: ${username} \nPassword: ${password}`);
    event.preventDefault();
}