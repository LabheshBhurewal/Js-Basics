// const Jsuser1={};
// const Jsuser1=new Object();


const tinderuser ={};

tinderuser.name="Labhesh Bhurewal"
tinderuser.email="bhurewallabhesh05@gmail.com"
tinderuser.id="9"

const regularUser ={
    fullname:{
        name:"labhesh",
        surname:"bhurewal"
    }
}

console.log(regularUser.fullname.name);
const obj1 ={1:"a",2:"b",3:"c"};
const obj2 ={4:"d",5:"f",6:"e"};
const obj3 ={ ...obj1 , ...obj2 };
console.log(obj3);

const users=[
    {
        id:1,
        email:"bhurewallabhesh05@gmail.com"
    }
]

console.log(users[0].email);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
