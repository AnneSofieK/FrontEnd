$(document).ready(function () {
    //Checks if the information already has been filled out
    if(sessionStorage.getItem("controlNo") != null)
    {
        document.getElementById("controlNo").value = sessionStorage.getItem("controlNo");

        document.getElementById("exampleFormControlSelect1").value = sessionStorage.getItem("reasonCode");

        document.getElementById("plateCountry").innerText = sessionStorage.getItem("plateCountry");
        document.getElementById("licensePlate").value = sessionStorage.getItem("licensePlate");
    }
});
