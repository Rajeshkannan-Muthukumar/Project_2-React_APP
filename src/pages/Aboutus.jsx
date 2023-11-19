import React from 'react'

function Aboutuspage() {
  return (
  
    <div class="main">
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow tabb">
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
                    <a class="inner " href="Aboutus"><u>About us</u><span class="sr-only">(current)</span></a>
                    <h1 class="inner card-heading cooking-pal-head">COOKING PAL</h1>
                    <a class="inner " href="Contactus">Contact Us<span class="sr-only">(current)</span></a>
                    <a class="inner " href="product">Products<span class="sr-only">(current)</span></a>
                    <a class="inner " href="product">Cart<span class="sr-only">(current)</span></a>
                </div>
            </div>
        </nav>
  
        <div class="container shadow mt-3 d-flex flex-row justify-content-center p-3">
                <div class="mt-3">
                    <img class="about-logo" src="https://res.cloudinary.com/dm6wjacnw/image/upload/v1697659320/re3hzodscsydhai6jsie.png" ></img>
                </div>
                <div class="m-3 m-2 d-flex flex-column justify-content center">
                    <h1 class="card-heading">About Us</h1>
                    <p>The evolution of technology has revolutionized the way people cook, share,
                         and explore recipes. Online cooking recipe platforms have gained immense
                          popularity due to their accessibility and convenience. This literature 
                          review explores the key elements that contribute to enhancing user 
                          experience in online cooking recipe websites, with a focus on interactive 
                          features such as dish selection, recipe details, ingredient linking, and seamless product ordering.
                    </p>
                </div>
            </div>
        </div>

  )
}

export default Aboutuspage