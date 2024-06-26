// console.log("L");
// console.log("a");
// console.log("b");
// console.log("h");
// console.log("e");
// console.log("s");
// console.log("h");


// function myName(){
//     console.log("L");
//     console.log("a");
//     console.log("b");
//     console.log("h");
//     console.log("e");
//     console.log("s");
//     console.log("h");
// }

// myName()

function addTwoNumbers(number1,number2){
    //  let result =number1 + number2;
    //  return result;
       return number1 + number2;
    // console.log(num1 + num2);
}
const result=addTwoNumbers(4,7);
// addTwoNumbers(4,9);
// addTwoNumbers(4,"9");
// console.log("Result",result);


function loginusername(username){
    if(!username){
        console.log("PLease enter username.");
        return
    }
     return `${username} just Logged in`
}

console.log(loginusername()); 