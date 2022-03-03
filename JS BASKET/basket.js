let products=JSON.parse(localStorage.getItem("basket"));
let count=1;
for(let product of products){
let tdN=document.createElement("td");
let tdImage=document.createElement("td");
let tdName=document.createElement("td");
let tdCount=document.createElement("td"); 


let tdRemove=document.createElement("td");
   let icon = document.createElement('i');
   icon.className = "fa-solid fa-x";
   icon.onclick=function(e){
    let countPro =Number(this.parentElement.previousElementSibling.innerText)
    countPro--;
    tdCount.innerText = countPro

    if(countPro==0) {
        var existingItems = JSON.parse(localStorage.getItem("basket"))
        var itemIndex = this.parentElement.tdN
        
        existingItems.splice(itemIndex, 1)
        localStorage.setItem("basket", JSON.stringify(existingItems));
        document.getElementById("ProCount").innerText=existingItems.length;
        this.parentElement.parentElement.remove();
        ShowEmpty();

    }
    console.log(countPro)

    

   
  }


tdN.innerText=count;
count++;
let img=document.createElement("img");
img.setAttribute("src",product.Src);
tdImage.append(img);


tdName.innerText=product.Name;
tdCount.innerText=product.Count;

tdRemove.append(icon)

let tr=document.createElement("tr")
tr.append(tdN,tdImage,tdName,tdCount,tdRemove)


document.querySelector(".table").lastElementChild.append(tr)

}

function ShowEmpty() {
    var exIt = JSON.parse(localStorage.getItem("basket"))
    var al_box = document.getElementById('alert-box')
    var tbl = document.querySelector('.table')
    if(exIt.length==0) {
        al_box.style.display = 'block'
        tbl.style.opacity = '0'
    }
    else{
        al_box.style.display = 'none'
        tbl.style.opacity = '1'
    }
}

ShowEmpty();
