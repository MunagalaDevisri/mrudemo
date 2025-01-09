let main=function(){
    let a=Number(prompt("enter first number: "));
    let b=Number(prompt("enter second number: "));
    let c=Number(prompt("enter third number: "));
    let d=a+b+c;
    console.log(d);
    let e=a-b-c;
    console.log(e);
    let f=a*b*c;
    console.log(f);
    if(a>=b && a>=c){
        console.log(a+"is the largest number.");   
    }else if(b>=a && b>=c){
        console.log(b+" is the greatest number.");
    }else{
        console.log(c+"is the greatest number.");
    }
}
main();