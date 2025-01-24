var a=10;
let b=20;
function parent(){
    var a="hello";
    let b="hii";
    console.log(a);
    console.log(b);
    console.log(this.a);
    console.log(this.b);
}
parent()