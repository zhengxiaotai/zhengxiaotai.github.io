$(document).ready(function() {
    // Load reservation info from localStorage and display on the page
    $("#date").html(localStorage.getItem("startDate") + " to " + localStorage.getItem("endDate"));
    $("#room").html(localStorage.getItem("room"));
    $("#totalFee").html(localStorage.getItem("totalFee"));
    $("#reservationId").html(localStorage.getItem("reservationId"));
});