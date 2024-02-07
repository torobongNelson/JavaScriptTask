const prompt = require("prompt-sync")();

    
    function driversReport (){
        driverInput = 0
        while(driverInput != -1){
            let miles_driven = prompt("enter miles driven") ;
            let gallons_used  = prompt("enter gallons used");
            let total = miles_driven / gallons_used;
            
        }
        return total;

    }
    




