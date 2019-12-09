window.onload = function() {
    setLogin();
};

function setLogin(){
    document.getElementById("login").innerHTML = "";
    if(sessionStorage.getItem("token") == null)
    {
        document.getElementById("login").innerHTML = "Log in";
    }
    else
    {
        document.getElementById("login").innerHTML = sessionStorage.getItem("name");
    }
}

function LoginPath(){
    if(sessionStorage.getItem("token") == null)
    {
        location.href = "LoginPage.html";
    }
    else
    {
        location.href = "AccountPage.html"
    }
}