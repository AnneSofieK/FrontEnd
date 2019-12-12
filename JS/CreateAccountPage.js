$(document).ready(function () {

    if(sessionStorage.getItem("Email") !== null)
    {
        document.getElementById("loginEmail").value = sessionStorage.getItem("Email");
    }
    else
    {
        document.getElementById("loginEmail").value = sessionStorage.getItem("driverEmail");
    }


    $(".registerNowbtn").click(function () {

        let username = document.getElementById("loginEmail");
        let password = document.getElementById("loginPassword");

        if(validate(password))
        {
            let data = {firstname: "customer", lastname: "customer", username: username.value, password: password.value, role: "Customer"};
            $.ajax({
                url: "http://localhost:5000/users/register",
                type: 'POST',
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                success: function () {
                    sendClaim();
                },
                error: function(){
                    document.getElementById("loginPassword").value = "";
                    alert("Account already exists, login or create new account");
                }
            });
        }
    });
});

