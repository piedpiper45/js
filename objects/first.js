//u can create/declare   object in 2 ways
//1. singleton -- through constructor

//2.object literals
// ->singleton =Object.create

const mysym=Symbol("key1");

const jsuser={
   
    name:"muttu",
    "full name":"mrutyunjay",
    age:21,
    [mysym]:"key1ss", // use brackets to declare symbols
    email:"muuttu@gmail,com",
    isloggedin:true
};

// console.log(jsuser.age); //21
// console.log(jsuser["age"]);//21
//console.log(jsuser.fullname);//undefined
// console.log(jsuser["full name"]);//mrutyunjay
// // console.log(jsuser.mysym);  //this is string not symbol =>key1ss
// console.log(jsuser[mysym]);//symbol

//update
jsuser.email="jjjjjjjj";
//Object.freeze(jsuser);//u can freez property
jsuser.email="poogfdf";
// console.log(jsuser["email"]); //jjjjjjjj  not poogfdf

// console.log(jsuser);

// fun define 
jsuser.greet=function()
{
    console.log("hello ");
}

jsuser.grreet=function()
{
    console.log(`hello ${this["full name"]}`);
}
//console.log(jsuser.greet);
//console.log(jsuser.greet); //[Function (anonymous)]
console.log(jsuser.greet()); //hello
console.log(jsuser.grreet());// hello mrutyunhay
