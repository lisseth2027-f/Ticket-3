function finalPrice(){
    let purchaseAmount = Number(document.getElementById("purchaseDiscount").value)
    let hasCoupon = document.getElementById("hasCoupon").value === "true"

    if(purchaseAmount > 100){
        document.getElementById("finalPrice").textContent = "You have a 20% discount"
    }else if(purchaseAmount > 50){
        document.getElementById("finalPrice").textContent = "You have a 10% discount"
    }else if(hasCoupon){    
        document.getElementById("finalPrice").textContent = "You had an additional discount"
    }else{
        document.getElementById("finalPrice").textContent = " No discount"
    }
}