const favoriteFoods = ["Sushi", "Ramen", "pizza"];
const people = [
    { name: "Dana", age: 23, city: "Qassim" },
    { name: "Nada", age: 25, city: "Riyadh" },
    { name: "Lana", age: 19, city: "Qassim" }
];

console.log("Task 1: Numbers 1-10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


console.log("Task 2: Favorite Foods");
for (const food of favoriteFoods) {
    console.log(food);
}

console.log("Task 3: People Names");
for (const person of people) {
    console.log(person.name);}
