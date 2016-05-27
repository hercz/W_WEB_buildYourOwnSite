/**
 * Created by herczkumihalybalazs on 2016.05.19..
 */


$(function() {
    $("#nameInput").on("change", function () {
        sendMessage();
    })
})


function validateContactData() {
    var formName = document.getElementById("nameInput").value;
    var formEmail = document.getElementById("emailInput").value;
    var formMessage = document.getElementById("messageInput").value;


    // (?=[\s]{1,})(?=[\w\s]{3,}) working elswhere, but here not, but this is better

    var nameIsValid = new RegExp("^[a-zA-Z]{3,}$").test(formName);
    var emailIsValid = new RegExp("^.+(\.hu|\.com)$").test(formEmail);
    var messageIsValid = new RegExp("^[a-z]{20,500}$").test(formMessage);


    if (nameIsValid && emailIsValid && messageIsValid) {
        sendMessage(formName, formEmail, formMessage);
    }
    else {
        document.getElementById("submit_button").disabled = true;
    }
    function sendMessage(name, email, message) {
        alert("Name: " + name + "\nEmail:" + email + "\nMessage: " + message + "\nYour message was sent!");
    }
}