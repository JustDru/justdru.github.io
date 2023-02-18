"use strict";

(function(){

    function TestFullName(){
        let messageArea = $("#messageArea")   ;

        let fullnamePattern = /^([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})$/;

        $("#fullName").on("blur", function () {
            let fullNameText = $(this).val();
            if(!fullnamePattern.test(fullNameText)) {
                $(this).trigger("focus")
                $(this).trigger("select");
                messageArea.addClass("alert alert-danger")
                messageArea.text("Please enter a valid first and last name (Firstname [Middle] Lastname");
                messageArea.show();
            }
            else {
                messageArea.removeAttr("class")
                messageArea.hide();
            }
        });
    }

    /**
     * @param {string} input_field_id
     * @param {RegExp} regular_expression
     * @param {string} error_message
     */
    function ValidateField(input_field_id, regular_expression, error_message) {
        let messageArea = $("messageArea").hide();

        $(input_field_id).on("blur", function () {
            let inputFieldText = $(this).val();
            if(!regular_expression.test(inputFieldText)) {
                $(this).trigger("focus").trigger("select")
                messageArea.addClass("alert alert-danger").text(error_message).show();
            }
            else {
                messageArea.removeAttr("class").hide();
            }
        });
    }

    function DisplayHomePage(){

        console.log("Home Page");

        $("AboutUsBtn").on("click", () => {
            location.href = "about.html"
        });

        $("main").append(`<p id="MainParagraph" class="mt-3"> This is my main paragraph</p>`);
        $("body").append(`<article class="container">
                <p id="ArticleParagraph" class="mt-3">This is my articled paragraph.</p>`)
    }

    let MainContent = document.getElementsByTagName("main");
    let MainParagraph = document.createElement("p");

    MainParagraph.setAttribute("id", "MainParagraph");
    MainParagraph.setAttribute("class", "mt-3");

    let FirstString = "This is";
    let SecondString = `${FirstString} the Main Paragraph`;
    MainParagraph.textContent = SecondString;

    let Article = document.createElement("article");
    Article.setAttribute("class", "container")
    Article.innerHTML = ArticleParagraph;

    function DisplayProductsPage(){
        let ProductsButton = document.getElementById("ProductsBtn");
        ProductsButton.addEventListener("click", function()
        {
            location.href = "products.html"
        });
    }

    function DisplayServicesPage(){
        let ServicesButton = document.getElementById("ServicesBtn");
        ServicesButton.addEventListener("click", function()
        {
            location.href = "services.html"
        })
    }

    function DisplayAboutUsPage(){
        $("AboutUsBtn").on("click", () => {
            location.href = "about.html"
        });
    }

    function DisplayContactPage(){
        let ContactUsButton = document.getElementById("ContactUsBtn");
        ContactUsButton.addEventListener("click", function()
        {
            location.href = "contact.html"
        });
        ContactFormValidation();
    }

    function ContactFormValidation() {
        ValidateField("#fullName", /^([A-Z][a-z]{1,3}\.?\s)?([A-Z][a-z]+)+([\s,-]([A-z][a-z]+))*$/,
            "Please enter a valid first and last name");

        ValidateField("#contactNumber", /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]\d{4}$/,
            "Please enter a valid phone contact number");

        ValidateField("#emailAddress", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,10}$/,
            "Please enter a valid email address");
    }

    function Start(){
        console.log("App Started!")
        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
                DisplayProductsPage();
                break;
            case "About Us":
                DisplayAboutUsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
        }
    }

    function DisplayContactPage() {
        console.log("Contact Us Page")

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function()
        {
            event.preventDefault();
            if(subscribeCheckbox.checked) {
                console.log("Checkbox checked!")
            }
        });
    }
    window.addEventListener("load", Start)
})();