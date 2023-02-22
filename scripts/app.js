"use strict";

(function () {


    function Start() {
        console.log("App Started!")
        switch (document.title) {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Projects":
                DisplayProjectsPage();
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

    function DisplayHomePage() {

        const Para3Text = "This website is a part of our WEBD6201 course at Durham College. On this website, you" +
            " will find tabs dedicated to personal projects, services provided, as well as more about the authors of this website.";

        // Get the element where the text needs to be inserted
        const Para3 = document.getElementById("Paragraph3");
        // Set the text to the element
        Para3.innerHTML = Para3Text;
        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click", function () {
            location.href = "about.html"
        });
    }

    function DisplayProjectsPage() {
        // Store the text to be inserted in variables
        const title1text = '"WEBD6201 Assignment 1" Andrew Graham & Sebastian Castelan';

        // Get the element where the text needs to be inserted
        const title1 = document.getElementById("Title1");

        // Set the text to the element
        title1.innerHTML = title1text;
        // Store the text to be inserted in variables
        const title2text = '"Drufolio" Andrew Graham';

        // Get the element where the text needs to be inserted
        const title2 = document.getElementById("Title2");

        // Set the text to the element
        title2.innerHTML = title2text;
        const title3text = '"Drucumentation" Andrew Graham';

        // Get the element where the text needs to be inserted
        const title3 = document.getElementById("Title3");

        // Set the text to the element
        title3.innerHTML = title3text;

        // Store the text to be inserted in variables
        const Para1text = "In our time at Durham College, we have picked up various skills that can be considered very useful in a professional\n" +
            "        environment. Some of those skills include custom programming, web design, and being able to follow specified instructions\n" +
            "       exactly as described by an instructor, or in this case, a client.";

        // Get the element where the text needs to be inserted
        const Para1 = document.getElementById("Paragraph1");

        // Set the text to the element
        Para1.innerHTML = Para1text;

        // Store the text to be inserted in variables
        const Para2text = "This project is my stepping stone into Web Development, as well as getting familiar with GitHub in a personal\n" +
            "    project environment, as opposed to a professional industry environment in which the repository was already set up.";

        // Get the element where the text needs to be inserted
        const Para2 = document.getElementById("Paragraph2");

        // Set the text to the element
        Para2.innerHTML = Para2text;
        const Para3Text = "This project works hand-in-hand with Drucumentation as a stepping stone into Web Development. This website"+
        " is essentially where I share my thoughts, opinions, as well as history/lore about some of my hobbies and past times," +
            " such as video games, and fragrances.";

        // Get the element where the text needs to be inserted
        const Para3 = document.getElementById("Paragraph3");
        // Set the text to the element
        Para3.innerHTML = Para3Text;
        let ProductsButton = document.getElementById("ProductsBtn");
        ProductsButton.addEventListener("click", function () {
            location.href = "projects.html"
        });
    }

    function DisplayServicesPage() {

        // Store the text to be inserted in variables
        const Para1text = "This is the website that you're looking at right now. This will be the stepping stone into greatness,\n" +
            "    and this is a project that I believe will give us what we need to succeed in Web Development in the future.";

        // Get the element where the text needs to be inserted
        const Para1t = document.getElementById("Paragraph1");

        // Set the text to the element
        Para1t.innerHTML = Para1text;

        // Store the text to be inserted in variables
        const Para2text = "With web development being such a finicky thing, it's no doubt that everybody has a different vision in mind for their projects." +
        " With that being said, in our time at Durham College, we've mastered the art of custom programming, and are able to fulfill anything that"+
        " may be requested.";

        // Get the element where the text needs to be inserted
        const Para2t = document.getElementById("Paragraph2");

        // Set the text to the element
        Para2t.innerHTML = Para2text;
        const Para3Text = "The Web Development courses offered at Durham College have given the graduates and current students alike the ability to"+
        " design websites in their own free time. Sebastian and I are no different. That said, this is my personal project, 'Drufolio'. It is"+
        " essentially a blog-style portfolio that links to my other website 'Drucumentation', as well as shows all my social medias, and an introductory blurb.";

        // Get the element where the text needs to be inserted
        const Para3 = document.getElementById("Paragraph3");
        // Set the text to the element
        Para3.innerHTML = Para3Text;
        const Para4Text = "As students, we're no strangers to having to fulfill requirements and instructions assigned by professors. In the"+
        " real world, this is no different. As an employee, you are expected to fulfill your various duties. As students, we've mastered" +
       " this, and we can follow instructions EXACTLY as they're said, and we do not allow room for error.";

        // Get the element where the text needs to be inserted
        const Para4 = document.getElementById("Paragraph4");
        // Set the text to the element
        Para4.innerHTML = Para4Text;
        let ServicesButton = document.getElementById("ServicesBtn");
        ServicesButton.addEventListener("click", function () {
            location.href = "services.html"
        })
    }

    function DisplayAboutUsPage() {
// Store the text to be inserted in variables
        const Para1text = "Hello. My name is Andrew, and I am a 2nd year Computer Programming & Analysis student currently enrolled at Durham College."+
            " I've always had a profound interest in anything tech related, and I've been wanting to pursue a career in Software Development since 15.";

        // Get the element where the text needs to be inserted
        const Para1te = document.getElementById("Paragraph1");

        // Set the text to the element
        Para1te.innerHTML = Para1text;

        // Store the text to be inserted in variables
        const Para2text = "Hello. My name is Sebastian, and I am a 2nd year Computer Programming & Analysis student currently enrolled at Durham College."+
        "Technology has always fascinated me, ever since my youth. In my earlier teenage years, I always dreamed of becoming a Software Developer,"+
        "but in later years I've discovered my true passion lies in Cyber Security and Data Networking. When my time at Durham College is over,"+
        "I hope to continue my education in university, majoring in CyberSecurity.";

        // Get the element where the text needs to be inserted
        const Para2t = document.getElementById("Paragraph2");

        // Set the text to the element
        Para2t.innerHTML = Para2text;
        const Para3Text = "The Web Development courses offered at Durham College have given the graduates and current students alike the ability to"+
            " design websites in their own free time. Sebastian and I are no different. That said, this is my personal project, 'Drufolio'. It is"+
            " essentially a blog-style portfolio that links to my other website 'Drucumentation', as well as shows all my social medias, and an introductory blurb.";

    }

    function DisplayContactPage() {
        let ContactUsButton = document.getElementById("ContactUsBtn");
        ContactUsButton.addEventListener("click", function () {
            location.href = "contact.html"
        });
    }


    window.addEventListener("load", Start)
    const navbar = document.querySelector('#navbar');
    const copyright = document.querySelector('#copyright');

    navbar.style.position = 'fixed';
    navbar.style.bottom = '0';
    navbar.style.width = '100%';
    navbar.style.backgroundColor = 'lightgray';
    navbar.style.display = 'flex';
    navbar.style.justifyContent = 'space-around';

    const links = navbar.querySelectorAll('a');

    links.forEach((link) => {
        link.style.display = 'inline-block';
        link.style.padding = '10px';
        link.style.color = 'black';
    });
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    document.getElementById("copyright").innerHTML = `Copyright &copy; ${year} All rights reserved.`;
    const form = document.querySelector('#contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('#name').value;
        const number = form.querySelector('#number').value;
        const email = form.querySelector('#email').value;
        const message = form.querySelector('#message').value;

        console.log({name, number, email, message});

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    });


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

})();