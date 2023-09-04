
// // const myarr=[0,1,2,3,true,"hello"];
// const myarr=[1,2,3,4];
// // console.log(myarr[1]); //2

// const s=new Array(1,3,4,5);
// // s.push(12);
// console.log(s);
// // s.pop();
// // console.log(s);
// s.unshift(9);// index 0 element gets added ->[ 9, 1, 3, 4, 5 ]
// s.shift();// removes first element  ->[ 1, 3, 4, 5 ]
// console.log(s);
// const n= s.join();// returns string array
// console.log(s);//[ 1, 3, 4, 5 ]
// console.log(n);//1,3,4,5

const m=new Array(1,2,3,4,5);
console.log("originalarray: ",m);

//slice
const s1=m.slice(1,3);//(1,3) are indexes
console.log("sliced array" ,s1);
console.log("originalarray: ",m);


//splice
const s2=m.splice(1,3);
console.log("spliced array",s2);
console.log("originalarray: ",m);

// slice (1,3) ->1,2
//splice(1,3)->1,2,3
//slice->dont manipulate original array
//splice ->manipulate original array