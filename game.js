// Step 1: Me kriju nje funksion per me gatu picen;
function cookPizza() {
    console.log("Cooking the pizza...");
    return new Promise (resolve => {
        setTimeout(() => {
            console.log("Pizza is ready!");
            resolve("Delicious Pizza");
        }, 5000); // 5 sekonda per pizza
    });
}

function playGames() {
    console.log("Playing games...");
}

function draw() {
    console.log("Drawing...");
}

function chat() {
    console.log("Chatting...");
}

async function pizzaParty() {
    console.log("Let's start the pizza party!") ;

const pizzaPromise = cookPizza();

playGames();

draw();

chat();

const pizza = await pizzaPromise;

console.log(`Yay! Time to eat ` + pizza + '!'); 
}

pizzaParty();