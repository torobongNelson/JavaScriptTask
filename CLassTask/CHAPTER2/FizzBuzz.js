let userInput = number(prompt("Enter a digit"));



if(userInput % 3 == 0){
    console.log("fizz");

}else if(userInput % 5){
    console.log("buzz");

}else if(userInput % 3 && 5){
    console.log("fizz buzz")

}else{
    console.log("input are either divisible by 5 or 3 ")
}