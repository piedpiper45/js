const bosch=["akes","buttu","ritis"]
const nonbosch=["haris","bayur","vg"]

// bosch.push(nonbosch);
// console.log(bosch);//[ 'akes', 'buttu', 'ritis', [ 'haris', 'bayur', 'vg']

// const s=bosch.concat(nonbosch);
// console.log(s);//[ 'akes', 'buttu', 'ritis', 'haris', 'bayur', 'vg' ]

// //spread process
// const newarr=[...bosch,...nonbosch];
// console.log(newarr);//[ 'akes', 'buttu', 'ritis', 'haris', 'bayur', 'vg' ]

//flat returns array of subarrays
// let p=[1,2,3,[4,5],[6,[7,8]]];
// let k=p.flat(Infinity);
// console.log(k); 
/*k= [
    1, 2, 3, 4,
    5, 6, 7, 8
  ] */

 // console.log(Array.isArray("hue"));
  // array.isarray() tells whether u have element in existed array

  //console.log(Array.from("hue"));

  let s1=10
  let s2=20;
  let s3=30;
  console.log(Array.of(s1,s2,s3)); //[ 10, 20, 30 ]

  console.log(Array.from({name:"muttu"}));// []