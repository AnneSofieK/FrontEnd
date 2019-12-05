$(document).ready(function(){

    <!-- get all user cases -->
    $.ajax({
        type: "GET",
        dataType: "json",
        url:"http://jsonplaceholder.typicode.com/albums"
    }).then(function (data) {
        for (var i = 0; i < 3; i++)
        {
            addCase(data[i], i)
        }
        document.getElementById("case").innerHTML += "<td class=\"addCaseTR\">\n" +
            "                            <button class=\"addCasebtn\"><i class=\"fa fa-plus\"></i></button>\n" +
            "                        </td>";
    });

    function addCase(data, i)
    {
        document.getElementById("case").innerHTML +=
            "<td>\n" +
            "<p class=\"header\">Case </p>\n" +
            "<p class=\"statusheader\">Status</p>\n" +
            "<p class=\"status\">Waiting</p>\n" +
            "<label>Sent</label>\n" +
            "<label class=\"inprogress\">In progress</label>\n" +
            "<label>Clarified</label>\n" +
            "<p></p>\n" +
            "<progress value=\"1\" max=\"5\"></progress>\n" +
            "<p></p>" +
            "   <div class=\"infobox\">\n" +
            "      <p class=\"boxheader\">6400 Sønderborg</p>\n" +
            "      <p>Alskærvej 4</p>\n" +
            "      <p>22. November 2019</p>\n" +
            "   </div>\n" +
            "</td>";

        $(document.getElementsByClassName("header")[i]).append(data.id);
    }
});