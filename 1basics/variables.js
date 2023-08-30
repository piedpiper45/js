

// variables -- let,var ,const

//const -- once assign u cant change

const acId=44454
console.log(acId);

let name="mutttu";
var gmail="hello@gmail.com"
password="32ddhx" //this is also possoble but wrong practice

//instead of using console.log everytime
let a;//op always undefined
console.table([acId,name,gmail,password,a]);
/*
  dont use var bcz in prevoous version in scope also
  if u update var datas itaffect whol variable with same name

  var a=1

  {
    var a=2;
  }

  here global a becomes 2 even though u have updated in scope
  thats y use let and const more
  
  
  
  
  */
