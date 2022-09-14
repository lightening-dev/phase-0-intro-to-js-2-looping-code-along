
const names = ["John", "Jeff", "Jerry"];

const eventName = "Birthday"


function writeCards(names, eventName) {
    
    let newNames = [];
    
    for (let i = 0; i < names.length; i ++) {
        
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);}

        return newNames; 
   
   
    }

    
    
    function countDown() { 
        let x = 10;
        while (x >= 0) {
            console.log(x --);
        }


    }
