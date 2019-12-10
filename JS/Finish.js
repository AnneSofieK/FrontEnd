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

    let driverAddress = document.getElementById("driverAddress");
    driverAddress.innerText = sessionStorage.getItem("driverAddress");

    let driverPC = document.getElementById("driverPC");
    driverPC.innerText = sessionStorage.getItem("driverPC");

    let driverCity = document.getElementById("driverCity");
    driverCity.innerText = sessionStorage.getItem("driverCity");

    let driverEmail = document.getElementById("driverEmail");
    driverEmail.innerText = sessionStorage.getItem("driverEmail");
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