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


// function loginusername(username){
//     if(!username){
//         console.log("PLease enter username.");
//         return
//     }
//      return `${username} just Logged in`
// }

// console.log(loginusername()); 


function calculatecartPrice(...num1){
    return num1
}


// console.log(calculatecartPrice(100,200)); 

const user={
    username:"labheshBhurewal",
    prize:100

}

// function handleuser(anyobject){
//     console.log(`User name is ${anyobject.username} and prize is ${anyobject.prize} `);
// }


// handleuser(user);

// handleuser({
//     username:"labhesh",
//     prize:999
// })

const myNewarray =[200,4000,600,899]

function returnSecondValue(getArray){
    return getArray[0]
}

console.log(returnSecondValue([100,300,330,8675]));