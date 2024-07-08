const user ={
    prize:999,
    username:"labhesh",


    welcomeMessage:function(){
        console.log(`${this.username} your welcome`);
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username="Tarang"
// user.welcomeMessage()

function chai(){
     username :"paresh",
    console.log(this.username);
}

// chai();

// const addTWo =(num1,num3)=>{
//     return num1 + num3   //explecit
// }
const addTWo =(num1,num3)=>(num1 + num3)//implicit


console.log(addTWo(6,5)); 


