$(document).ready(function () {
    //Checks if the information already has been filled out
    if(sessionStorage.getItem("controlNo") != null)
    {
        document.getElementById("controlNo").value = sessionStorage.getItem("controlNo");

        document.getElementById("exampleFormControlSelect1").value = sessionStorage.getItem("reasonCode");

        document.getElementById("plateCountry").innerText = sessionStorage.getItem("plateCountry");
        document.getElementById("licensePlate").value = sessionStorage.getItem("licensePlate");
    }

    //Setting the text on the dropdown button to the selected dropdown-item
    $(".dropdown-menu a").click(function(){
        $("#plateCountry").text($(this).text());
    });
});

//Click function for next button on step 2 in the form
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
        controlNo.classList.remove("is-invalid");
        controlNo.classList.add("is-valid");
        return true;
    }
    else
    {
        controlNo.classList.add("is-invalid");
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
        licensePlate.classList.remove("is-invalid");
        licensePlate.classList.add("is-valid");
        return true;
    }
    else
    {
        licensePlate.classList.add("is-invalid");
        return false;
    }
}
