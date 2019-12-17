$(document).ready(function(){
    $("#loginbtn").click(function () {

        const username = document.getElementById("LoginUsername").value;
        const password = document.getElementById("LoginPassword").value;

        let data = {username: username, password: password};

        $.ajax({
            url: "https://localhost:44324/users/authenticate",
            type: 'POST',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                sessionStorage.setItem("token",data.token);
                sessionStorage.setItem("username",username);
                location.href="AccountPage.html";
            },
            error: function(e){
                document.getElementById("LoginUsername").value = "";
                document.getElementById("LoginPassword").value = "";
                document.getElementById("loginMsg").innerHTML = "Username or password is wrong, try again";
            }
        });
    });
});

function removeErrorMsg() {
    document.getElementById("loginMsg").innerHTML = "";
}

