import loadHome from "./about";
import loadMenu from "./menu";
import loadContacts from "./contact";
import "./style.css";

function loadWebsite() {
    const body = document.querySelector('body');
    const content = document.createElement("div");
    content.classList.add("content");
    content.innerHTML = "";
    content.appendChild(createHeader());
    content.appendChild(createMain());
    body.appendChild(content);
    loadHome();
};

function createHeader() {
    const header = document.createElement("div");
    header.setAttribute("id", "header");
    const title = document.createElement("h1");
    title.textContent = "Burger Barn";
    header.appendChild(title);
    header.appendChild(createNavbar());
    return header;
}

function createNavbar() {
    const navbar = document.createElement("nav");
    const ul = document.createElement("ul");

    const about = createButton("about")
    about.addEventListener('click', loadHome);
    ul.appendChild(about);

    const menu = createButton("menu")
    menu.addEventListener("click", loadMenu);
    ul.appendChild(menu);

    const contact = createButton("contact")
    contact.addEventListener("click", loadContacts);
    ul.appendChild(contact);
    
    navbar.appendChild(ul);
    return navbar;
}

function createButton(page) {
    const li  = document.createElement("li");
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.textContent = page.charAt(0).toUpperCase() + page.slice(1);
    // add event listener
    li.appendChild(button);
    return li;
}

function createMain() {
    const main = document.createElement("div");
    main.setAttribute("id", "main");
    return main; 
}

loadWebsite();