const cardsContainer = document.querySelector("#cards-container");
const searchInput = document.querySelector("#search-input");

let allUsers = [];

async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        allUsers = await response.json();
        displayCards(allUsers);
    } catch (error) {
        console.log("Error:", error);
    }
}

function displayCards(usersList) {
    cardsContainer.textContent = "";

    usersList.forEach((user) => {
        const card = document.createElement("div");
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = user.name;

        const emailParagraph = document.createElement("p");
        emailParagraph.textContent = "Email: " + user.email;


        card.appendChild(nameHeading);
        card.appendChild(emailParagraph);

        cardsContainer.appendChild(card);
    });
}

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    const filteredUsers = allUsers.filter((user) => {
        return user.name.toLowerCase().includes(searchText);
    });

    displayCards(filteredUsers);
});

fetchUsers();