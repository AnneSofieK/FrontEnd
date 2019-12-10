$(document).ready(function () {

    document.getElementById("loginEmail").value = sessionStorage.getItem("driverEmail");

    $(".registerNowbtn").click(function () {

        let username = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        if(emailValidation() && passwordValidation())
        {
            let data = {firstname: "customer", lastname: "customer", username: username, password: password, role: "Customer"};
            $.ajax({
                url: "http://localhost:5000/users/register",
                type: 'POST',
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                success: function () {
                    createCustomer(username);
                },
                error: function(){
                    document.getElementById("loginEmail").value = "";
                    document.getElementById("loginPassword").value = "";
                    alert("Account already exists, login or create new account");
                }
            });
        }
    });
});

function emailValidation()
{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("loginEmail").value)) {
        document.getElementById("loginEmail").style.borderColor = "lightgrey";
        return true;
    }
    else
    {
        document.getElementById("loginEmail").style.borderColor = "red";
        return false;
    }
}

function passwordValidation()
{
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(document.getElementById("loginPassword").value))
    {
        document.getElementById("loginPassword").style.borderColor = "lightgrey";
        return true;
    }
    else
    {
        document.getElementById("loginPassword").style.borderColor = "red";
        return false;
    }
}

function createCustomer(username) {

    //Todo get info from session data
    let data = {Name: "Hans Hansen", Email: username, PhoneNo: 25252525, StreetName: "Købmagergade 87", username: username, zip: 6470};

    $.ajax({
        url: "http://localhost:5000/customers",
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function () {
            sendClaim();
        },
        error: function(){
            document.getElementById("loginEmail").value = "";
            document.getElementById("loginPassword").value = "";
            alert("Something went wrong, try again");
        }
    });
}

function sendClaim() {
    let data = {Name: "Hans Hansen", Email: username, PhoneNo: 25252525, StreetName: "Købmagergade 87", username: username, zip: 6470};

    $.ajax({
        url: "http://localhost:5000/customers", //TODO change url
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function () {
            location.href="ClaimSent.html";
        },
        error: function(){
            document.getElementById("loginEmail").value = "";
            document.getElementById("loginPassword").value = "";
            alert("Something went wrong, try again");
        }
    });
}