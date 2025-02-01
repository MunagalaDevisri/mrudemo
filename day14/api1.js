// let a=async()=>{
//     let data=await window.fetch("country.json")
//     console.log(data);
//     let res= await data.json()
//     console.log(res);
    //map
    //res.map((x)=>{
       //console.log(x);
       // console.log(x.country);
        //let select = document.getElementById("select");
        //console.log(select);
        //select.innerHTML+=`<option value="${x.country}">${x.country}</option>`
    

        // let demo1=document.getElementById("demo1")
        // console.log(demo1);
        // demo1.innerHTML+=
        // `<Option  value=${x.country}>${x.country}</Option>`
        let btn=document.getElementById("btn")
        console.log(btn);
        btn.onclick=()=>{
            let search=document.getElementById("search").value;
            console.log(search);
            let page=30;
            window.fetch(`https://pixabay.com/api/?key=48495713-b53c6c712cdedcda1007fb659&q=${search}&image_type=photo&pretty=true&per_page={page}`)
            .then((data)=>data.json())
            .then((res)=>{
                console.log(res);
                console.log(res.hits);
                res.hits.map((x)=>{
                    console.log(x);

                let div=document.getElementById("div")
                console.log(div);
                


                div.innerHTML+=`<img src=${x.previewURL}/>`
                

                })
                
                
            })
        }
        
        

        
        

//     })
    
    
// }
// a();

