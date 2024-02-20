const allBtn=document.getElementsByClassName("btn-seat");
let priceCount=0
let count= 0;
let seatCount=40;
for(const btn of allBtn){
btn.addEventListener("click", function(event){
            count=count+1
            seatCount=seatCount-1
            priceCount= priceCount+550;

           setInnerText("seat-number", count);
           setInnerText("highest-seat", seatCount);

           event.target.style.backgroundColor="#1DD100";
           

           const price=event.target.parentNode.parentNode.parentNode.parentNode.childNodes[15].childNodes[3].childNodes[3].childNodes[3].childNodes[1].innerText
           

           const seatName=event.target.innerText
          
           const selectedContainer=document.getElementById("ticket-cost");

           const div=document.createElement("div")
           const h3=document.createElement("h3")
           h3.innerText=seatName;
            
           const h4=document.createElement("h4")
             h4.innerText="Economy";
           const p=document.createElement("p")
           p.innerText=price;

           div.appendChild(h3)
           div.appendChild(h4)
           div.appendChild(p)

           selectedContainer.appendChild(div)


           const totalPrice=document.getElementById("total-price").innerText;
           
           const convertedTotalPrice=parseInt(totalPrice);
           
           const sum =convertedTotalPrice + parseInt(price);
           setInnerText("total-price", sum);

           const  grandTotal=document.getElementById("grand-total").innerText;
           const convertedGrandTotal=parseInt(grandTotal);
           const sum2=convertedGrandTotal+parseInt(price);
           setInnerText("grand-total", sum2);  
               if(count>4){
                alert("you already selected 4 seat")
               }
               else{
                btn.removeEventListener("click",arguments.callee);
               }
})
}
function setInnerText(id,value){
  document.getElementById(id).innerText=value;
}