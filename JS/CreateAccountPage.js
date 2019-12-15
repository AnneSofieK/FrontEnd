$(document).ready(function () {

    //Sets the email to the already registered email
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
            let data = {username: username.value, password: password.value};
            $.ajax({
                url: "http://localhost:5000/users/registerCustomerUser",
                type: 'POST',
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                success: function () {
                    createCustomer(true);
                },
                error: function(){
                    document.getElementById("loginPassword").value = "";
                    alert("Account already exists, login or create new account");
                }
            });
        }
    });
});

