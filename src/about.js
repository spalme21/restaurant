import Burgers from './images/about-burgers.jpg';

function loadHome() {
    const body = document.querySelector("#body");

    const img = new Image();
    img.src = Burgers;
    img.alt = "Burgers";

    body.appendChild(createParagraph(
        `Come to Burger Barn for the best burger's around! Whether you're 
        looking to try one of our unique, exotic specials, or just want to enjoy
        a tried and true classic, Burger Barn is the place for you! We use only
        the highest quality ingredients, and everything is made to order.`));
    body.appendChild(img);
}

function createParagraph(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
}

export default loadHome;