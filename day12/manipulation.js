let a=document.createElement("h1");
console.log(a);
a.textContent="hello-world";
document.body.appendChild(a);
a.style.backgroundColor="pink"
//div tag
let div=document.createElement("div")
console.log(div);
document.body.appendChild(div)
div.style.border="5px solid"
//ol tag
let ol=document.createElement("ol")
console.log(ol);
document.body.appendChild(ol);
div.appendChild(ol)
//li tag
let li=document.createElement("li");
console.log(li);
li.textContent="react";
ol.appendChild(li);

//li1 tag
let li1=document.createElement("li");
console.log(li1);
li1.textContent="node.js";
ol.appendChild(li1);
ol.setAttribute("type","B");
//li2
let li2=document.createElement("li");
console.log(li2);
li2.textContent="node.js";
ol.appendChild(li2);
ol.setAttribute("type","B");
