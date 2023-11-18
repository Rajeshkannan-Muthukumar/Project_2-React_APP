import React, { useContext, useState } from 'react'
import '../css/home.css'
import { breakfastdata } from '../breakfastdata';
import BreakfastCard from '../components/BreakfastCard';
import { Mycontext } from '../hook/hookcooking';
function Home() {
    const {test} = useContext(Mycontext);
    console.log(test)
   
  return (
   <div class="main">
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow tabb">
            <a class="navbar-brand" href="#">
                <div class="d-flex flex-row">
                    <img class="logo" src="https://res.cloudinary.com/dm6wjacnw/image/upload/v1697659320/re3hzodscsydhai6jsie.png"/>
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
                    <a class="inner " href="homepage"><u>Home</u><span class="sr-only">(current)</span></a>
                    <a class="inner " href="aboutuspage.html">About us<span class="sr-only">(current)</span></a>
                    <h1 class="inner card-heading cooking-pal-head">COOKING PAL</h1>
                    <a class="inner " href="contactuspage.html">Contact Us<span class="sr-only">(current)</span></a>
                    <a class="inner " href="product">Products<span class="sr-only">(current)</span></a>
                    <a class="inner " href="productspage.html">Cart<span class="sr-only">(current)</span></a>
                </div>
            </div>
        </nav>
        <div class="cards">
            <div class="container">
                <div class="row d-flex flex-row justify-content-center ml-2">
              {
                breakfastdata.map((data)=>{
                    return <BreakfastCard data={data}/>
                })
              }
                
                   
                </div>
            </div>
        </div>
    </div>

  )
}

export default Home;