let cart_container = document.getElementById("tbody");

let cartData = JSON.parse(localStorage.getItem("cartItems")) || [] ;
let cartCount = document.getElementById("cart-count");
cartCount.innerText = cartData.length ;

    function updateCartPage(cartData){
         cart_container.innerHTML = "";
        cartData.forEach((item,index)=>{
            let tr = document.createElement("tr") ;
    
            let imgTd = document.createElement("td");
    
            let img = document.createElement("img");
            img.classList.add("img");
            img.src = item.imageUrl;
    
            imgTd.appendChild(img);
            
            let name = document.createElement("td");
            name.innerText = item.name;
    
            let price = document.createElement("td");
            price.innerText = item.price;
    
            let remove = document.createElement("td");
            let button = document.createElement("button");
            button.classList.add("remove");
            button.innerText = "Remove" ;
            button.addEventListener("click",()=>{
                let deletedtData = JSON.parse(localStorage.getItem("deletedtData")) || [] ;
                deletedtData.push(item);
                cartData.splice(index,1) ;
            
                localStorage.setItem("deletedtData",JSON.stringify(deletedtData));
                localStorage.setItem("cartItems",JSON.stringify(cartData));
                cartCount.innerText = cartData.length ;
                updateCartPage(cartData);
            })
            remove.appendChild(button);
            tr.append(imgTd,name,price,remove);
            cart_container.append(tr);

           
    })
    }
    updateCartPage(cartData);

  




