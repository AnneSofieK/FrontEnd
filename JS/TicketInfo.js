$(document).ready(function () {
    //Checks if the information already has been filled out
    if(sessionStorage.getItem("controlNo") != null) //TODO add new info
    {
        document.getElementById("controlNo").value = sessionStorage.getItem("controlNo");
        document.getElementById("exampleFormControlSelect1").value = sessionStorage.getItem("reasonCode");
        document.getElementById("plateCountry").innerText = sessionStorage.getItem("plateCountry");
        document.getElementById("licensePlate").value = sessionStorage.getItem("licensePlate");
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
        //Saving controlNo
        sessionStorage.setItem("ticketNo", document.getElementById("controlNo").value);

        //Saving reasonCode
        let r = document.getElementById("exampleFormControlSelect1");
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
        document.getElementById("licensePlate")
    ];

    validateElements(elements);
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
