module.exports = {user}

const user = (newMonthBal,itemsTotal,creditTotal)=>{
    let newBalance = newMonthBal + itemsTotal - creditTotal;
    return newBalance;


}



const Alex = {
    "accountNo"   : "4600847668",
    "newMonthBal" : "50000",
    "itemsTotal"  : "40000",
    "creditTotal" : "50000",
    "creditLimit" :  "30000"
}
let newBalance = user(Alex.newMonthBal,Alex.itemsTotal,Alex.creditTotal)

if(newBalance > Alex.creditLimit){
    console.log("Dear user, you have exceeded your credit limit")
}else{
    console.log("Good to shop!")
}
