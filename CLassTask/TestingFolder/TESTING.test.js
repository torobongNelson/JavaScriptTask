// describes what the name of the test is and has the call back function which is called arrow function

//const {sum, multiply,division,multiplyElementsByTwo} = require('./Prompt')
const {user} = require('../CHAPTER4_Dietel/CreditCardValidator')
// test('sum a and b',()=>{
//     let a = 2;
//     let b = 4;
//     let result = sum(a,b)//passing a function
//     expect(result).toBe(6)

// });

// test('multiply elements in an array',()=>{
//     const array = [1,2,3,4]
//     const result = multiplyElementsByTwo(array);
//     expect(result).toEquals([2,4,6,8]);// we use toEquals for objects(e.g -array)
// })


// test('multiply numbers',()=>{
//     let num1 = 2
//     let num2 = 2
//     let product = multiply(num1,num2)
//     expect(product).toBe(4)

// });

// test('division',()=>{
//     let number1 = 20
//     let number2 = 2
//     let result = division(number1,number2)
//     expect(result).toBe(10)
//     //tobe is called a matcher
//     //tobe is used for primitive types
// });





//CHAPTER FOUR EXERCISES IN DIETEL

test('user',()=>{
    let newMonthBal   = 50000
    let itemsTotal    = 40000
    let creditTotal   = 50000
    let total = user(newMonthBal,itemsTotal,creditTotal)
    expect(total).toEqual(40000)


})

