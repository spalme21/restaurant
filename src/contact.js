function loadContacts() {
    const main = document.querySelector("#main");
    main.textContent = "";

    const h2 = document.createElement("h2");
    h2.textContent = "Contact Us";
    main.appendChild(h2);

    const contacts = document.createElement("div");
    contacts.setAttribute("id", "contacts");

    const phone = document.createElement("p");
    phone.textContent = "PHONE NUMBER";
    contacts.appendChild(phone);

    const address = document.createElement("p");
    address.textContent = "ADDRESS";
    contacts.appendChild(address);

    main.appendChild(contacts);
};

export default loadContacts;