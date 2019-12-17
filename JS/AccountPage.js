$(document).ready(function(){

    alert(sessionStorage.getItem("token"));
    <!-- display user information -->
    $.ajax({
        type: "GET",
        dataType: "json",
        url:"https://localhost:44324/customers/getSpecificCustomer/"+sessionStorage.getItem("username"),
        headers: {"Authorization": 'Bearer '+sessionStorage.getItem("token")}
    }).then(function (data) {
        sessionStorage.setItem("name", data.name);
        document.getElementById("login").append(data.name);
        document.getElementById("username").append(data.name);
        document.getElementById("email").append(data.email);
        document.getElementById("phoneno").append(data.phoneNo);
        document.getElementById("address").append(data.streetname);
        document.getElementById("zip").append(data.zipCode+" "+data.city);
        sessionStorage.setItem("customerID", data.customerID);
        getCases();
    });
});

/**
 *
 * @param customerID
 */
function getCases() {
    <!-- get all user cases -->
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://localhost:44324/cases/getspecific/" + sessionStorage.getItem("customerID"),
        headers: {"Authorization": 'Bearer '+sessionStorage.getItem('token')}
    }).then(function (data) {
        for (let i = 0; i < data.length; i++) {
            addCase(data[i], i);
        }
        document.getElementById("case").innerHTML += "<td class=\"addCaseTR\">\n" +
            "<button class=\"addCasebtn\"><i class=\"fa fa-plus\"></i></button>\n" +
            "</td>";

        <!-- click function for add case btn -->
        $(document.getElementsByClassName("addCasebtn")).click(function () {
            location.href = "Attachments.html";
        });
    });
}

function addCase(data, i)
{
    document.getElementById("case").innerHTML +=
        "<td>\n" +
        "<p class=\"header\">Case </p>\n" +
        "<p class=\"statusheader\">Status</p>\n" +
        "<p class=\"status\"></p>\n" +
        "<label>Sent</label>\n" +
        "<label class=\"inprogress\">In progress</label>\n" +
        "<label>Clarified</label>\n" +
        "<p></p>\n" +
        "<progress class='progressbar' value=\"1\" max=\"5\"></progress>\n" +
        "<p></p>" +
        "   <div class=\"infobox\">\n" +
        "      <p class=\"boxheader\"></p>\n" +
        "      <p class='street'></p>\n" +
        "      <p class='date'></p>\n" +
        "   </div>\n" +
        "</td>";

    $(document.getElementsByClassName("header")[i]).append(data.caseID);
    $(document.getElementsByClassName("status")[i]).append(data.status);
    $(document.getElementsByClassName("street")[i]).append(data.street);
    $(document.getElementsByClassName("boxheader")[i]).append(data.zipCode+" "+data.city);
    $(document.getElementsByClassName("date")[i]).append(data.date);

    let value;
    switch (data.status) {
        case "Claim received":
            value = 1;
            break;
        case "Won":
        case "Lost":
            value = 5;
            break;
        default:
            value = 3;
    }
    $(document.getElementsByClassName("progressbar")[i]).val(value);
}

function deleteAccount() {
    if(confirm("Your account will be deleted"))
    {
        $.ajax({
            url: "https://localhost:44324/users/DeleteCustomerUser/"+sessionStorage.getItem("username"),
            type: 'DELETE',
            headers: {"Authorization": 'Bearer '+sessionStorage.getItem('token')},
            success: function() {
                sessionStorage.removeItem("token");
                location.href = "HomePage.html";
            }
        });
    }
}