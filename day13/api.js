// let obj={
//     name :"devi",
//     id:666,
//     age:20
// }
// console.log(obj);
// let obj1=JSON.stringify(obj);
// console.log(obj1);
// let obj2=JSON.parse(obj1);
// console.log(obj2);



window.fetch("data.json")
.then((data)=>data.json())
