/**
 * Post the claim information to the server
 */
function sendClaim() {

    //All claim info
    let ticketNo = parseInt(sessionStorage.getItem("controlNo"));
    let fineSum = parseInt(sessionStorage.getItem("sum"));
    let date = sessionStorage.getItem("date");
    let reason = sessionStorage.getItem("reasonCode");
    let obsStart = sessionStorage.getItem("observationStart");
    let obsEnd = sessionStorage.getItem("observationEnd");
    let status = "Claim received";
    let zip = parseInt(sessionStorage.getItem("parkingPC"));
    let street = sessionStorage.getItem("parkingAddress");
    let customerID = parseInt(sessionStorage.getItem("customerID"));
    let cvr = parseInt(sessionStorage.getItem("cvr"));
    let isManuel = false;

    //let licensePlate = sessionStorage.getItem("licensePlate");
    alert("customerID before posting claim: "+customerID);

    let data = {ticketNo: ticketNo, fineSum: fineSum, date: date, reason: reason, obsStart: obsStart, obsEnd: obsEnd,
        status: status, customerID: customerID, cvr: cvr, isManuel: isManuel, zipCode: zip, street: street};

    //creating claim in the database
    $.ajax({
        url: "https://localhost:44324/cases",
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function () {
            location.href="ClaimSent.html";
        },
        error: function(){
            alert("(Claim) Something went wrong, try again");
        }
    });
}

/**
 * Post the customer information to the server
 * @param createAccountIsChecked - Bool that informs if the customer wishes to create an account or not
 */
function createCustomer(createAccountIsChecked) {

    //All customer information
    var name = sessionStorage.getItem("driverName") + " " + sessionStorage.getItem("driverSurname");
    var email = sessionStorage.getItem("driverEmail");
    var phoneNo = parseInt(sessionStorage.getItem("driverPhoneNo"));
    var streetName = sessionStorage.getItem("driverAddress");
    var zip = parseInt(sessionStorage.getItem("driverPC"));
    var username = email;

    //If the driver was different from the customer filling out the form, the data is changed to the customer info
    if(sessionStorage.getItem("Firstname") !== null)
    {
        name = sessionStorage.getItem("Firstname")+" "+sessionStorage.getItem("Surname");
        email = sessionStorage.getItem("Email");
        phoneNo = parseInt(sessionStorage.getItem("PhoneNo"));
        streetName = sessionStorage.getItem("Address");
        zip = parseInt(sessionStorage.getItem("PC"));
        username = email;
    }

    if(!createAccountIsChecked)
    {
        username = null;
    }

    let data = {Name: name, Email: email, PhoneNo: phoneNo, StreetName: streetName, zipCode: zip, username: username};

    //Creating the customer in the database
    $.ajax({
        url: "https://localhost:44324/customers",
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            sessionStorage.setItem("customerID", data.customerId);
            sendClaim();
        },
        error: function(){
            alert("(Customer) Something went wrong, try again");
        }
    });
}