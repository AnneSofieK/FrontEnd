$(document).ready(function () {

    let controlNo = document.getElementById("controlNo");
    controlNo.innerText = sessionStorage.getItem("controlNo");

    let licensePlate = document.getElementById("licensePlate");
    licensePlate.innerText = sessionStorage.getItem("licensePlate");

    let reasonCode = document.getElementById("reasonCode");
    reasonCode.innerText = sessionStorage.getItem("reasonCode");
    
});