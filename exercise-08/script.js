const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Headphones", price: 150 },
    { name: "Mouse", price: 50 }
];

// 1. forEach -> "everything"
console.log("forEach Result");
products.forEach((product) => {
    console.log(product.name);
});

// 2. map -> "prices"
console.log("map prices Result");
const allPrices = products.map((product) => {
    return product.price;
});
console.log(allPrices); 

// 3. filter ->under 500
console.log("filter prices under 500 Result");
const cheapProducts = products.filter((product) => {
    return product.price < 500;
});
console.log(cheapProducts);

// 4. find -> "Phone"
console.log("find Phone Result");
const matchedProduct = products.find((product) => {
    return product.name === "Phone";
});
console.log(matchedProduct);