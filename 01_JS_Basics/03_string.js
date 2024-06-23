const mysum = Symbol("key1");

const Jsuser={
    user:"Labhesh Bhurewal",
    [mysum]:"mykey1",
    "fullname":"Labhesh Bhurewal",
    isLogged:true,
    Location:"Pune",
    age:"18",
    email:"bhurewallabhesh05@gmail.com",
    lastLoginDays:["Monday","Saturday"],
   
}

// console.log(Jsuser.email);   //prefer this most of time
// console.log(Jsuser["email"]); //instead use this  
// console.log(Jsuser.fullname); 
// console.log(Jsuser[mysum]); 

Jsuser.email="pareshdeshpande@gmail.com"
// Object.freeze(Jsuser);
// console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello world");
}

console.log(Jsuser.greeting());

Jsuser.greeting2=function(){
    console.log(`Hello world ${this.user}`);
}

console.log(Jsuser.greeting2());