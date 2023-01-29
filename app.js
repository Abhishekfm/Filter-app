let btn = document.querySelector(".search-btn");
console.log(btn);


btn.addEventListener("click", ()=>{
    makeNormal();
    let inp = document.querySelector(".search-box");
    let text = inp.value;
    console.log(text);
    makeBody(text);
})
 

function makeBody(val){
    val = val.toLowerCase();
    let all_products = document.querySelectorAll(".product");
    // console.log(all_products);
    for(let i = 0; i < all_products.length; i++){
        let pn = all_products[i].querySelector('.product-name').innerText.toLowerCase();
        console.log(pn);
        if(pn.includes(val)){
            continue;
        }else{
            all_products[i].classList.add("hidden");
        }
    }
}

function makeNormal(){
    let all_products = document.querySelectorAll(".product");
    // console.log(all_products);
    for(let i = 0; i < all_products.length; i++){
        all_products[i].classList.remove("hidden");
    }
}