import React, { useContext, useState } from 'react'
import '../css/product.css'
import { products } from '../breakfastdata'
import ShoppingCard from '../components/ShoppingCard'
import { Mycontext } from '../hook/hookcooking';
function Product() {
 const [open,setopen] = useState(false);
 const {count,CardItem} = useContext(Mycontext);

 const openCart= ()=>{
    setopen(pre=>!pre);

 }
  return (

    <div>
        
  {  open &&   <div className={`${open ? "prod-card-list-close" : "prod-card-list-open"}`}>
   <h1 class="card-heading"><u>Cart</u></h1>
{
    
    CardItem.map(data=>{
        const {name,price,image} = data;
        return <>
            
            <div class="d-flex flex-row mb-3">
            <img src={image} class="cart-img" />
            <div class="d-flex flex-column ml-3">
            <h1 class="cart-head">{name}</h1>
            <p class="cart-cost">₹ {price}</p>
            </div>
            </div>
            </>
    })
}

        </div> }
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow tabb sticky-top">
            <a class="navbar-brand" href="#">
                <div class="d-flex flex-row">
                    <img class="logo" src="https://res.cloudinary.com/dm6wjacnw/image/upload/v1697659320/re3hzodscsydhai6jsie.png"></img>
                    <center>
                        <h1 class="cooking-pal-heading card-heading-pal">Cooking Pal</h1>
                    </center>
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav m-auto">
                <a class="inner " href="homepage">Home<span class="sr-only">(current)</span></a>
                    <a class="inner " href="Aboutus">About us<span class="sr-only">(current)</span></a>
                    <h1 class="inner card-heading cooking-pal-head">COOKING PAL</h1>
                    <a class="inner " href="Contactus">Contact Us<span class="sr-only">(current)</span></a>
                    <a class="inner " href="product"><u>Products</u><span class="sr-only">(current)</span></a>
                    <a class="inner " onClick={openCart}>
                        Cart
                        <span class="sr-only">(current)</span></a>
                        <header>
            <div class="shopping">
                {/* <img src="image/shopping.svg"/> */}
                <span class="quantity">{count}</span>
            </div>
                        </header>
                </div>
            </div>
        </nav>
    <div class="container">
        <div class="list">  
         {
            products.map(data=>{
                return <ShoppingCard data={data}/>
            })
         }
        </div>
    </div>
    <div class="card">
        <h1>Carttt</h1>
        <ul class="listCard">
        </ul>
        <div class="checkOut">
            <div class="total">0</div>
            <div class="closeShopping">Close</div>
        </div>
    </div>
    </div>
  )
}

export default Product