function sendClaim() {

    let name, email, phoneNo, streetName, username, zip;

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