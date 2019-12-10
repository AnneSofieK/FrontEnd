$(document).ready(function () {

    let controlNo = document.getElementById("controlNo");
    controlNo.innerText = sessionStorage.getItem("controlNo");

    let licensePlate = document.getElementById("licensePlate");
    licensePlate.innerText = sessionStorage.getItem("licensePlate");

    let reasonCode = document.getElementById("reasonCode");
    reasonCode.innerText = sessionStorage.getItem("reasonCode");

    let driverName = document.getElementById("driverName");
    driverName.innerText = sessionStorage.getItem("driverName");
    
    let driverSurname = document.getElementById("driverSurname");
    driverSurname.innerText = sessionStorage.getItem("driverSurname");

    let address = document.getElementById("address");
    address.innerText = sessionStorage.getItem("address");

    let postCode = document.getElementById("postCode");
    postCode.innerText = sessionStorage.getItem("postCode");

    let city = document.getElementById("city");
    city.innerText = sessionStorage.getItem("city");

    let email = document.getElementById("email");
    email.innerText = sessionStorage.getItem("email");
});

function send_Claim() {
    let checkAccount = document.getElementById("account-check");
    if(checkAccount.checked == true){
        location.href = "CreateAccountPage.html";
    }
    else{
        location.href = "ClaimSent.html";
    }
}