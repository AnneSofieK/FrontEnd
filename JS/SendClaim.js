function sendClaim() {

    let ticketNo = parseInt(sessionStorage.getItem("ticketNo"));
    let fineSum = sessionStorage.getItem("fineSum");
    let date = sessionStorage.getItem("date");
    let reason = sessionStorage.getItem("reasonCode");
    let obsStart = sessionStorage.getItem("obsStart");
    let obsEnd = sessionStorage.getItem("obsEnd");
    let status = "Claim received";
    let customerID = parseInt(sessionStorage.getItem("customerID"));
    let cvr = parseInt(sessionStorage.getItem("cvr"));
    let isManuel = false;
    let zip = parseInt(sessionStorage.getItem("parkingZip"));
    let streetName = sessionStorage.getItem("parkingStreet");

    let data = {ticketNo: ticketNo, fineSum: fineSum, date: date, reason: reason, obsStart: obsStart, obsEnd: obsEnd,
        status: status, customerID: customerID, cvr: cvr, isManuel: isManuel, zip: zip, streetName: streetName};

    $.ajax({
        url: "http://localhost:5000/cases",
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function () {
            location.href="ClaimSent.html";
        },
        error: function(){
            alert("Something went wrong, try again");
        }
    });
}

function createCustomer(createAccountIsChecked) {

    var name = sessionStorage.getItem("driverName") + " " + sessionStorage.getItem("driverSurname");
    var email = sessionStorage.getItem("driverEmail");
    var phoneNo = parseInt(sessionStorage.getItem("driverPhoneNo"));
    var streetName = sessionStorage.getItem("driverAddress");
    var zip = parseInt(sessionStorage.getItem("driverPC"));

    if(sessionStorage.getItem("Firstname") !== null)
    {
        name = sessionStorage.getItem("Firstname")+" "+sessionStorage.getItem("Surname");
        email = sessionStorage.getItem("Email");
        phoneNo = parseInt(sessionStorage.getItem("PhoneNo"));
        streetName = sessionStorage.getItem("Address");
        zip = parseInt(sessionStorage.getItem("PC"));
    }

    let data = {Name: name, Email: email, PhoneNo: phoneNo, StreetName: streetName, username: email, zip: zip};

    $.ajax({
        url: "http://localhost:5000/customers",
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            sessionStorage.setItem("customerID", data.customerID);
            if(createAccountIsChecked){
                location.href = "CreateAccountPage.html"
            }
            else{
                sendClaim();
            }
        },
        error: function(){
            alert("Something went wrong, try again");
        }
    });
}