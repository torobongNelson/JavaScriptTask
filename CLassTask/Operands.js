let left_operand  = 10;
let right_operand = 20;
let operator      = '+'


if(operator == '+'){
    ans = left_operand + right_operand
    console.log(ans) ;

}else if(operator == '-'){
    ans = left_operand - right_operand
    console.log(ans)
    
}else if(operator == '/'){
    ans = left_operand / right_operand
    console.log(ans)

}else if(operator == '%'){
    ans = left_operand % right_operand
    console.log(ans)
}else{
    "Enter the exact operator"
}


// function praise(left_operand,right_operand,operator){
//     if(operator=='+'){
//         ans = right_operand + left_operand
//     }
//     else if (operator=='-'){
//         ans = right_operand - left_operand  
//     }
//     else if(operator=='*'){
//         ans = right_operand * left_operand
//     }
//     else if(operator=='/'){
//         ans = right_operand / left_operand
//     }

//     return ans
// }

// console.log(praise(6,7,'+'))