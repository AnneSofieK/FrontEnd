$(document).ready(function () {
    //Checks if the information already has been filled out
    if(sessionStorage.getItem("controlNo") != null) //TODO add new info
    {
        document.getElementById("controlNo").value = sessionStorage.getItem("controlNo");
        document.getElementById("reasonCode").value = sessionStorage.getItem("reasonCode");
        document.getElementById("plateCountry").innerText = sessionStorage.getItem("plateCountry");
        document.getElementById("licensePlate").value = sessionStorage.getItem("licensePlate");
        document.getElementById("cvr").value = sessionStorage.getItem("cvr");
        document.getElementById("date").value = sessionStorage.getItem("date");
        document.getElementById("sum").value = sessionStorage.getItem("sum");
        document.getElementById("observationStart").value = sessionStorage.getItem("observationStart");
        document.getElementById("observationEnd").value = sessionStorage.getItem("observationEnd");
        document.getElementById("parkingAddress").value = sessionStorage.getItem("parkingAddress");
        document.getElementById("parkingPC").value = sessionStorage.getItem("parkingPC");
        allTicketInfoIsValid()
    }

    //Setting the text on the dropdown button to the selected dropdown-item
    $(".dropdown-menu a").click(function(){
        $("#plateCountry").text($(this).text());
    });
});

//Click function for next button on step 2 in the form
function saveTicketInfo()
{
    if(allTicketInfoIsValid()) //TODO add all new info so it can be saved
    {
        //Saving all ticket info
        sessionStorage.setItem("controlNo", document.getElementById("controlNo").value);
        sessionStorage.setItem("cvr", document.getElementById("cvr").value);
        sessionStorage.setItem("date", document.getElementById("date").value);
        sessionStorage.setItem("sum", document.getElementById("sum").value);
        sessionStorage.setItem("observationStart", document.getElementById("observationStart").value);
        sessionStorage.setItem("observationEnd", document.getElementById("observationEnd").value);
        sessionStorage.setItem("parkingAddress", document.getElementById("parkingAddress").value);
        sessionStorage.setItem("parkingPC", document.getElementById("parkingPC").value);

        //Saving reasonCode
        let r = document.getElementById("reasonCode");
        let reasonCode = r.options[r.selectedIndex];
        sessionStorage.setItem("reasonCode", reasonCode.value);

        //Saving license plate
        sessionStorage.setItem("plateCountry", document.getElementById("plateCountry").innerHTML);
        sessionStorage.setItem("licensePlate", document.getElementById("licensePlate").value);

        //Go to step 3 in form
        location.href = "DriverInfo.html";
    }
}

function allTicketInfoIsValid() { //TODO add ticket info elements
    let elements = [
        document.getElementById("controlNo"),
        document.getElementById("cvr"),
        document.getElementById("date"),
        document.getElementById("sum"),
        document.getElementById("licensePlate"),
        document.getElementById("observationStart"),
        document.getElementById("observationEnd"),
        document.getElementById("parkingAddress"),
        document.getElementById("parkingPC")
    ];

    return validateElements(elements);
}

function changeRegex(element) {
    let reg;

    switch (element.innerText) {
        case "DK":
            reg = "^[a-zA-Z]{2}\\d{5}$";
            break;
        case "D":
            reg = "^[A-ZÄÖÜ]{1,3}\\-[ ]{0,1}[A-Z]{0,2}[0-9]{1,4}[H]{0,1}$";
            break;
        case "S":
            reg = "^[A-Za-z]{3}[0-9]{2}[A-Za-z0-9]{1}$";
            break;
        default:
            break;
    }
    document.getElementById("licensePlate").pattern = reg;
}
