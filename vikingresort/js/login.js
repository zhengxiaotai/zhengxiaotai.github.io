$(document).ready(function() {
    // If already logged in, redirect to userinfo page.
    username = localStorage.getItem("username");
    if (username != null && username != "") {
        window.location.href = "userinfo.html";
    }
});

/* 
Check if username and password is blank, 
save user data and redirect to homepage.
*/
$("#signin").click(function() {
    var username = $("#username").val()
    var password = $("#password").val()
    if (username == "") {
        alert("Please Enter Username!")
        return;
    }
    if (password == "") {
        alert("Please Enter Password!")
        return;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    window.location.href = "index.html"
})