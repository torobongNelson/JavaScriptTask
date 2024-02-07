// import prompt from ''
// let luigisdebt = 140;
// luigisdebt = luigisdebt - 35;
// console.log(luigisdebt)


//single let statement and multiple bindings
// let one = 1, two = 2;
// console.log(one + two);

// //The use of var for binding
// var name = "Ashanti"
// var age  =  27
// console.log("Ashanti" + " " +     age)


//The use of functions math.min - math.max
// console.log(Math.min(2,4) + 100)
// console.log(Math.max(20,10))

//prompting a user  

// let theNumber = Number(prompt("Pick a number"));  //CODE HAS AN ERROR FROM TEXT
// console.log("Your number is the square root of " +
// theNumber * theNumber);





// let userNumber = Number(prompt("Enter a number"));
// console.log(userNumber)
// if(!Number.isNaN(userNumber)){
//     console.log("the square root is" + userNumber * userNumber);

// }else{
//     console.log("you didn't give me a number")
// }


//loops
// let number = 0;
// while(number <= 12){
//     console.log(number)
//     number = number + 2;
// }

// let hash = "#";


// for (let num = 1; num <= 7; num++) {
//     console.log(hash.repeat(num));
//   }

//   for (let i = 1; i <= 7; i++) {
//     let line = '';
//     for (let j = 0; j < i; j++) {
//       line += '#';
//     }
//     console.log(line);
//   }




  for(let i = 1; i < 7; i++){
    let hash = '';

    for(let j = 0; j < i; j++ ){
        hash += '#'
    }
    console.log(hash)
  }
  
  

