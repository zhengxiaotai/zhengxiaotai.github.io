$(document).ready(function() {
    /* 
    Public js for both reservation.html and reservation_login.html, the page that will open 
    depends on login status.
    */
    username = localStorage.getItem("username");
    if (window.location.pathname.endsWith("reservation.html") && username != null && username != "") {
        window.location.href = "reservation_login.html";
    }
    if (window.location.pathname.endsWith("reservation_login.html") && (username == null || username == "")) {
        window.location.href = "reservation.html";
    }
});

/* 
Button click under select date step. Hide the button and display select room step.
*/
$("#select-date-btn").click(function() {
    if ($("#startdate").val() == "" || $("#enddate").val() == "") {
        alert("Please Select Date!")
        return;
    }    
    if ($("#startdate").val() > $("#enddate").val()) {
        alert("Start date must early than end date!")
        return;
    }
    $("#select-room").css("display", "block");
    $("#select-room-btn").css("display", "block");
    $("#select-date-btn").css("display", "none");
});
/* 
Button click under select room step. Hide the button and display pay deposit step.
*/
$("#select-room-btn").click(function() {
    $("#pay-deposit").css("display", "block");
    $("#pay-deposit-btn").css("display", "block");
    $("#select-room-btn").css("display", "none");
});
/* 
Onchange event of the room select dropdown. Alter the price span and the room image.
*/
$("#room").change(function() {
    if ($("#room").val() == "single") {
        $("#price").html("100");
        $("#room-img img").attr("src", "images/room-single.jpg");
    }
    else {
        $("#price").html("150");
        $("#room-img img").attr("src", "images/room-couple.jpg");
    }
    genereateFee();
});
/* 
Button click under pay deposit step. Check input in this step and save all info in previous step 
with a generated reservation_id (used for checking whether user have a reservation and display it 
in userinfo page). Redirect to success page to see reservation detail.
*/
$("#pay-deposit-btn").click(function() {
    if ($("#realname").val() == "" || $("#realname").val() == "") {
        alert("Please enter you name!")
        return;
    }
    if ($("#tel").val() == "" || $("#tel").val() == "") {
        alert("Please enter you phone number!")
        return;
    }
    // Generate reservation_id. Current timestamp + 6 random characters to ensure the uniqueness.
    var reservationId = new Date().getTime() + randomString(6);
    localStorage.setItem("reservationId", reservationId);
    localStorage.setItem("startDate", $("#startdate").val());
    localStorage.setItem("endDate", $("#enddate").val());
    localStorage.setItem("room", $("#room").find("option:selected").text());
    localStorage.setItem("deposit", $("#deposit").html());
    localStorage.setItem("totalFee", $("#fee").html());
    localStorage.setItem("realName", $("#realname").val());
    localStorage.setItem("tel", $("#tel").val());
    window.location.href = "reservation_success.html";
});
/* 
Recalculate total fee when any input value has changed in any step, 
and display it in the pay deposit step.
*/
function genereateFee() {
    start = $("#startdate").val();
    end = $("#enddate").val();
    days = 0;
    if (start != null && start != "" && end != null && end != "") {
        days = (new Date(end).getTime() - new Date(start).getTime()) / (1000*60*60*24);
    }
    dayFee = parseInt($("#price").html());
    totalFee = dayFee * days;
    $("#deposit").html(dayFee);
    $("#fee").html(totalFee);
}
/* 
Generate a random string with specific number of characters and integer exclude 0,1,O,L for similarity.
*/
function randomString(n) {
    var base = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    result = "";
    for (i = 0; i < n; i++) {
        result += base.charAt(Math.floor(Math.random() * base.length));
    }
    return result;
}