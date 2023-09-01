const content = document.querySelector("#content");

function updateDisplay() {
    content.innerHTML = "";
    content.appendChild(createHeader());
    content.appendChild(createBody());
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
    ul.appendChild(createButton("about"));
    ul.appendChild(createButton("menu"));
    ul.appendChild(createButton("contact"));
    navbar.appendChild(ul);
    return navbar;
}

function createButton(page) {
    const li  = document.createElement("li");
    const button = document.createElement("button");
    button.setAttribute("id", page);
    button.setAttribute("type", "button");
    button.textContent = page.charAt(0).toUpperCase() + page.slice(1);
    // add event listener
    li.appendChild(button);
    return li;
}

function createBody() {
    const body = document.createElement("div");
    body.setAttribute("id", "body");
    return body; 
}

updateDisplay();