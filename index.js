// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);*/
/*let names = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        console.log(`Thank you ${name[i]} for the wonderful birthday gift!`)
                debugger;
    }
    return name;
}


writeCards(name);*/
let names = ['Guadalupe', 'Ollie', 'Aki'];
function writeCards(names) {
    
    let thankYouMessages = [];

    
    names.forEach(name => {
        
        let message = `Thank you, ${name}, for the wonderful surprise gift!`;
        
        thankYouMessages.push(message);
    });

    // Return a thank you messages
    return thankYouMessages;
}

function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}