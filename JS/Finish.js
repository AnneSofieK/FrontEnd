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
    if(document.getElementById("account-check").checked){
       location.href = "CreateAccountPage.html";
    }
    else{
        createCustomer(false);
    }
}

function addImg(){
    var pictures = document.getElementById("pictures");
    pictures.insertAdjacentHTML("beforeend",'<div class="col-3 imgUp"><img class="imagePreview"></div>');
}