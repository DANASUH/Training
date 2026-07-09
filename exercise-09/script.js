async function getUsers() {
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const users = await response.json();
        
        console.log("Real data pulled from internet:", users);
        
        console.log("Users Names");
        users.forEach((user) => {
            console.log(user.name);
        });

    } catch (error) {
        console.log("Something went wrong with the fetch:", error);
    }
}

getUsers();