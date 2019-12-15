$(document).ready(function () {
    document.getElementById("controlNo").innerText = sessionStorage.getItem("controlNo");
    document.getElementById("reasonCode").innerText = sessionStorage.getItem("reasonCode");
    document.getElementById("licensePlate").innerText = sessionStorage.getItem("licensePlate");
    document.getElementById("cvr").innerText = sessionStorage.getItem("cvr");
    document.getElementById("date").innerText = sessionStorage.getItem("date");
    document.getElementById("sum").innerText = sessionStorage.getItem("sum");
    document.getElementById("observationStart").innerText = sessionStorage.getItem("observationStart");
    document.getElementById("observationEnd").innerText = sessionStorage.getItem("observationEnd");
    document.getElementById("parkingAddress").innerText = sessionStorage.getItem("parkingAddress");
    document.getElementById("parkingPC").innerText = sessionStorage.getItem("parkingPC");
    document.getElementById("driverName").innerText = sessionStorage.getItem("driverName");
    document.getElementById("driverSurname").innerHTML = sessionStorage.getItem("driverSurname");
    document.getElementById("driverAddress").innerText = sessionStorage.getItem("driverAddress");
    document.getElementById("driverPC").innerText = sessionStorage.getItem("driverPC");
    document.getElementById("driverCity").innerText = sessionStorage.getItem("driverCity");
    document.getElementById("driverEmail").innerText = sessionStorage.getItem("driverEmail");

    var images = document.getElementsByClassName("imagePreview");
    var imagesS = JSON.parse(sessionStorage.getItem("images"));
    images[0].src = imagesS[0]; 

    if(images.length != imagesS.length){
        for (let i = 1; i < imagesS.length; i++) {
        addImg();
        images[i].src = imagesS[i]; 
        }
    }
});

function send_Claim() {
    createCustomer(document.getElementById("account-check").checked);
}

function addImg(){
    var pictures = document.getElementById("pictures");
    pictures.insertAdjacentHTML("beforeend",'<div class="col-3 imgUp"><img class="imagePreview"></div>');
}