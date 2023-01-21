"use strict";

(function(){

    function DisplayHomePage(){
        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html"
        });
    }

    let MainContent = document.getElementsByTagName("main");
    let MainParagraph = document.createElement("p");

    MainParagraph.setAttribute("id", "MainParagraph");
    MainParagraph.setAttribute("class", "mt-3");
    MainParagraph.textContent = "This is the Main Paragraph"

    MainContent.appendChild(MainParagraph)

    let FirstString = "This is";
    let SecondString = `${FirstString} the Main Paragraph`;
    MainParagraph.textContent = SecondString;

    let Article = document.createElement("article");
    let ArticleParagraph = `<p id="ArticleParagraph" class='"mt-3">This is my article paragraph</p>`;
    Article.setAttribute("class", "container")
    Article.innerHTML = ArticleParagraph;
    DocumentBody.appendChild(article);

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

    }

    function DisplayContactPage(){
        let ContactUsButton = document.getElementById("ContactUsBtn");
        ContactUsButton.addEventListener("click", function()
        {
            location.href = "contact.html"
        });
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
    window.addEventListener("load", Start)
})();