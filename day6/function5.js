function parent(){
    let a=10;
    function child1(){
        console.log("i am child1");
        function child3(){
            console.log("i am child 3")
        }
        return child3;
    }
    
    function child2(){
        console.log("i am child2");
    }
    return [child1,child2];
}
parent()[0]()()
parent()[1]()