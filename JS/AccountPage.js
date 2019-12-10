$(document).ready(function(){

    <!-- display user information -->
    $.ajax({
        type: "GET",
        dataType: "json",
        url:"http://localhost:5000/customers/getSpecificCustomer/"+sessionStorage.getItem("username")
    }).then(function (data) {
        sessionStorage.setItem("name", data.name);
        document.getElementById("login").append(data.name);
        document.getElementById("username").append(data.name);
        document.getElementById("email").append(data.email);
        document.getElementById("phoneno").append(data.phoneNo);
        document.getElementById("address").append(data.streetName);
        document.getElementById("zip").append(data.zip+" "+data.city);
        getCases(data.customerID);
    });
});

function getCases(customerID) {
    <!-- get all user cases -->
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:5000/cases/getspecific/" + customerID
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
        "      <p>Alskærvej 4</p>\n" +
        "      <p class='date'></p>\n" +
        "   </div>\n" +
        "</td>";

    $(document.getElementsByClassName("header")[i]).append(data.caseID);
    $(document.getElementsByClassName("status")[i]).append(data.status);
    $(document.getElementsByClassName("boxheader")[i]).append(data.zip+" "+data.city);
    $(document.getElementsByClassName("date")[i]).append(getDate(data.date));

    if(data.caseID == 2) /* TODO change according to status */
        {
            $(document.getElementsByClassName("progressbar")[i]).val(3);
        }
}

function getDate(date) {

}

function deleteAccount() {
    if(confirm("Your account will be deleted"))
    {
        $.ajax({
            url: "http://localhost:5000/users/DeleteCustomerUser/"+sessionStorage.getItem("username"),
            type: 'DELETE',
            success: function(result) {
                sessionStorage.removeItem("token");
                location.href = "HomePage.html";
            }
        });
    }
}