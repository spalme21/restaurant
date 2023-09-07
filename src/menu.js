import Burger from "./images/burger.jpg";

function loadMenu() {
    const main = document.querySelector("#main");
    main.textContent = "";

    const h2 = document.createElement("h2");
    h2.textContent = "Burgers";
    main.appendChild(h2);

    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.appendChild(createBurger(
        "Classic", 
        "American Cheese, Lettuce, Tomato, Onion, Pickle"));
    menu.appendChild(createBurger(
        "Mushroom & Swiss", 
        "Swiss Cheese, Sauteed Mushrooms"));
    menu.appendChild(createBurger(
        "Steakhouse",
        "Bleu Cheese, Grilled Onions, Steak Sauce"
    ));
    menu.appendChild(createBurger(
        "Luau",
        "Cheddar Cheese, Grilled Pineapple, Pulled Pork, BBQ Sauce"
    ));
    menu.appendChild(createBurger(
        "Fiesta",
        "Pepper Jack Cheese, Guacamole, Pico de Gallo, Fried Jalapenos"
    ));
    menu.appendChild(createBurger(
        "Breakfast",
        "American Cheese, Bacon, Hash Browns, Fried Egg"
    ));
    main.appendChild(menu);
}

function createBurger(name, description) {
    const burger = document.createElement("div");
    burger.classList.add("menu-item");

    const img = new Image();
    img.src = Burger;
    img.alt = "Burger";
    burger.appendChild(img);

    const container = document.createElement("div");
    container.classList.add("container");
    const burgerName = document.createElement("h4");
    burgerName.textContent = name;
    container.appendChild(burgerName);
    const burgerDescription = document.createElement("p");
    burgerDescription.textContent = description;
    container.appendChild(burgerDescription);

    burger.appendChild(container);
    return burger;
}

export default loadMenu;