document.getElementById('form').addEventListener("change", EnableLoginButton);
document.getElementById("username").addEventListener("keyup", EnableLoginButton);
document.getElementById("password").addEventListener("keyup", EnableLoginButton);

function EnableLoginButton(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let loginButton = document.getElementById('Log in');

    if(username.length >= 6 && password.length >= 6){
        loginButton.disabled = false;
    }
}


//Meha, etu funkcii pochemu to ne rabotayut. :(  U menya pohodu JQuery version stariy
document.getElementById('Log in').on("submit", function(event) {
    alert("Do stuff");
    event.preventDefault();
});

document.getElementById('Log in').bind("submit", function(event) {
    alert("Do stuff");
    event.preventDefault();
}); 

document.getElementById('Log in').addEventListener("submit", function(event) {
    alert("Do stuff");
    event.preventDefault();
});