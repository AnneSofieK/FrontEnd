$(document).ready(function () {
    $(".dropdown-menu a").click(function(){
        $("#plateCountry").text($(this).text());
    });
});

function saveTicketInfo()
{
    if(validateControlNo() && validateLicensePlate()) {
        //Saving controlNo
        sessionStorage.setItem("controlNo", document.getElementById("controlNo").value);

        //Saving reasonCode
        let r = document.getElementById("exampleFormControlSelect1");
        let reasonCode = r.options[r.selectedIndex];
        sessionStorage.setItem("reasonCodeText", reasonCode.text);
        sessionStorage.setItem("reasonCode", reasonCode.value);

        //Saving license plate
        sessionStorage.setItem("plateCountry", document.getElementById("plateCountry").innerText);
        sessionStorage.setItem("licensePlate", document.getElementById("licensePlate").value);

        //Go to step 3 in form
        location.href = "DriverInfo.html";
    }
}

function validateControlNo() {
    let controlNo = document.getElementById("controlNo");

    if(/^\d{7}(?:\d{2})?$/.test(controlNo.value))
    {
        controlNo.style.borderColor = "lightgrey";
        return true;
    }
    else
    {
        controlNo.style.borderColor = "red";
        return false;
    }
}

function validateLicensePlate(){
    let licensePlate = document.getElementById("licensePlate");
    let reg;

    switch (document.getElementById("plateCountry").innerText) {
        case "DK":
            reg = /^[a-zA-Z]{2}\d{5}$/;
            break;
        case "D":
            reg = /^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}[0-9]{1,4}[H]{0,1}/;
            break;
        case "S":
            reg = /^[A-Za-z]{3}[0-9]{2}[A-Za-z0-9]{1}$/;
            break;
        default:
            break;
    }

    if(reg.test(licensePlate.value))
    {
        licensePlate.style.borderColor = "lightgrey";
        return true;
    }
    else
    {
        licensePlate.style.borderColor = "red";
        return false;
    }
}
