function applydiscountcoupon() {
    let grandTotal = document.getElementById('grand-total');
    const inputValue = document.getElementById('coupon-field').value;
    const cuopon1 = document.getElementById('coupon1').innerText;
    const coupon2 = document.getElementById('coupon2').innerText;
    console.log(grandTotal,inputValue,cuopon1,coupon2)
    if (inputValue === cuopon1) {
      let temp =  priceCount* 0.15;
      grandTotal.innerText = priceCount- temp;
    }
    else if (inputValue === coupon2) {
      let temp1 =  priceCount * 0.2;
      grandTotal.innerText =  priceCount - temp1;
    }
  }
  
  document.getElementById('Phone-Num').addEventListener('keyup',function(){
    document.getElementById('modal').removeAttribute('disabled')
  })