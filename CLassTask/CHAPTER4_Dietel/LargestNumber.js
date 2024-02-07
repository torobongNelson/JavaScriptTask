const prompt = require("prompt-sync")()


function salesRecord(number){

    let score = 0;
    let largestNumber = 0;
    let quantity = 0;


    while(score < 10){
        const quantitySold = prompt("Enter number of unit sold: ");
        quantity ++;

        if(number > quantitySold){
            console.log("Congratulations you scored the highest!");

        }else{
             largestNumber = quantitySold;
            "You didn't level up,try again next year."
        }
    }

       return largestNumber;

}
console.log(salesRecord(10))




