/**
 * Created by herczkumihalybalazs on 2016.05.19..
 */



window.onload = function () {
    document.getElementById("nameInput").addEventListener("keyup", validateContactData);
    document.getElementById("emailInput").addEventListener("keyup", validateContactData);
    document.getElementById("messageInput").addEventListener("keyup", validateContactData);
    document.getElementById("submit_button").addEventListener("click", sendMessage);
    document.getElementById("submit_button").disabled = true;
};

function validateNameInput() {
    var formName = document.getElementById("nameInput");
    var nameIsValid = new RegExp("^[a-zA-Z]{3,30}$").test(formName.value);
    if (!nameIsValid) {
        formName.style.border = "3px solid red";
    }
    else {
        formName.style.border = "3px solid green";
        return true;
    }
}

function validateEmailInput() {
    var formEmail = document.getElementById("emailInput");
    var emailIsValid = new RegExp("^.+(\.hu|\.com)$").test(formEmail.value);
    if (!emailIsValid) {
        formEmail.style.border = "3px solid red";
    }
    else {
        formEmail.style.border = "3px solid green";
        return true;
    }
}

function validateTextInput() {
    var formMessage = document.getElementById("messageInput");
    var messageIsValid = new RegExp("^[a-z]{20,500}$").test(formMessage.value);
    if (!messageIsValid) {
        formMessage.style.border = "3px solid red";
    }
    else {
        formMessage.style.border = "3px solid green";
        return true;
    }
}

function validateContactData() {
    validateNameInput();
    validateEmailInput();
    validateTextInput();

    if (validateNameInput() && validateEmailInput() && validateTextInput()) {
        document.getElementById("submit_button").disabled = false;
    }
}
function sendMessage() {
    var name =document.getElementById("nameInput").value;
    var email =document.getElementById("emailInput").value;
    var message = document.getElementById("messageInput").value;
    alert("Name: " + name + "\nEmail:" + email + "\nMessage: " + message + "\nYour message was sent!");
}
