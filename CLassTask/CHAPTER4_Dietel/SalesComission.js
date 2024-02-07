const prompt = require("prompt-sync")()

function salesCommission(){
    let salesPersonEarning = 0.0;
    let priceOfItem;
    let stop = "";
    let totalItemPrice = 0;
    let percentage = 0.09;
    let counter = 1;

    while(stop != "yes"){
        let input = prompt("Enter item " + counter + " price: ");
        totalItemPrice = totalItemPrice + input;
        counter+=1;

        stop = prompt(" Do you wish to continue ?:")
        if( input == "yes"){
            console.log(" Go ahead with the input ")
    
        }else{
            "Bye for now !"
        }
    }

     salesPersonEarning  = totalItemPrice  *  priceOfItem
     return salesPersonEarning;


}