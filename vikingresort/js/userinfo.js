$(document).ready(function() {
    // Load user info from localStorage and display on the page
    username = localStorage.getItem("username");
    if (username == null || username == "") {
        window.location.href = "login.html";
    }
    $("#userName").html(localStorage.getItem("username"));
    $("#realName").html(localStorage.getItem("realName"));
    $("#tel").html(localStorage.getItem("tel"));
    reservationId = localStorage.getItem("reservationId");
    // If reservation_id exists, add an additional row to present reservation info and a link to the details.
    if (reservationId != null && reservationId != "") {
        var html =  "<p>" + 
                    "   <span class='form-label'>Trip: </span>" + 
                    "   <span><a href='reservation_success.html'>" + 
                        localStorage.getItem("startDate") + " ~ " + localStorage.getItem("endDate") + 
                    "   (upcoming)</a></span>" + 
                    "</p>";
        $("#userinfo").append(html);
    }
    // Customize user's login name on the title of the page.
    $(".title").html("Welcome, " + username + "!");
});