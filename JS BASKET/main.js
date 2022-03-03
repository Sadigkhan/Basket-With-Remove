


if(localStorage.getItem("basket")==null){
    localStorage.setItem("basket",JSON.stringify([]));
}






let addBasketAll=document.querySelectorAll(".addBasket");
for(let addBasket of addBasketAll){
    addBasket.onclick=function(e){
        e.preventDefault();
        
if(localStorage.getItem("basket")==null){
    localStorage.setItem("basket",JSON.stringify([]));
}
        let basket=JSON.parse(localStorage.getItem("basket"));
        let name=this.parentElement.firstElementChild.innerText;
        let src=this.parentElement.previousElementSibling.getAttribute("src");
        let data_id=this.parentElement.parentElement.getAttribute("data-id");


        let existPro=basket.find(p=>p.Id==data_id);
        
        if(existPro===undefined){
            basket.push({
                Id: data_id,
                Name: name,
                Src: src,
                Count:1
    
    
            })
        }else{
            existPro.Count+=1;
        }
        
        localStorage.setItem("basket",JSON.stringify(basket));
        CountBasket();
    }
}


function CountBasket(){
    let basket=JSON.parse(localStorage.getItem("basket"));
    document.getElementById("ProCount").innerText=basket.length;


}
CountBasket();