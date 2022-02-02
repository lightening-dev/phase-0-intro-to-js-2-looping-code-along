
//const name = ["Guadalupe", "Ollie", "Aki"]
//const eventName = ["surprise"]
function writeCards(namesArray, eventName) {

    let thankYouCards = [];

    for (let i = 0; i < namesArray.length; i++) { 
         
       thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
        
    }

    return thankYouCards;
}

 
function countDown(callCount) {


while (callCount > 0) { 
    
    console.log(callCount) 
    callCount --
}

console.log (callCount)

}