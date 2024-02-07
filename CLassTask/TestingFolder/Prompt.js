const prompt = require("prompt-sync")();
// to prompt user , you must call require just like importing scanner

// const firstName = prompt("what is your name ? : ")
// console.log(firstName)


const sum = (a,b)=>{
    let ans = a + b;
    return ans;
}

const multiply = (num1,num2)=>{
    let product = num1 * num2;
    return product;
}

const multiplyElementsByTwo = (array)=>{
    let newArray ;
    for(let elements of array){
        let ans = elements * 2;
        newArray.push(ans)

    }
}

const division = (number1 , number2)=>{
    let divisor = number1 / number2;
    return divisor;
}

module.exports = {sum, multiply,divisor,multiplyElementsByTwo}
//the destructing function:
//allows you to extract values from arrays or properties from objects into distinct variables