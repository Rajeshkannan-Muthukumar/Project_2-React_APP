import React from 'react'

function Dinnerpage() {
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
                    <a class="inner " href="homepage">Home<span class="sr-only">(current)</span></a>
                    <a class="inner " href="Aboutus">About us<span class="sr-only">(current)</span></a>
                    <h1 class="inner card-heading cooking-pal-head">COOKING PAL</h1>
                    <a class="inner " href="contactus">Contact Us<span class="sr-only">(current)</span></a>
                    <a class="inner " href="product">Products<span class="sr-only">(current)</span></a>
                    <a class="inner " href="product">Cart<span class="sr-only">(current)</span></a>
                </div>
            </div>  
        </nav>
        <h1 class="card-heading text-center mt-3"><u>Dinner</u></h1>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <center>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner mt-auto">

    <div class="carousel-item active">  
    <center>  
    <h1 class="item-heading">Palak Paneer</h1>
      <img class="d-block snacks-inside" src="https://bonmasala.com/wp-content/uploads/2022/06/palak-paneer.jpg" alt="First slide"></img>     
      <a href="dinner1"><button class="card-button">Let's Cook</button></a>
      </center>
    </div>


    <div class="carousel-item">
 <center>
     <h1 class="item-heading">Butter Chicken</h1>
      <img class="d-block snacks-inside" src="https://www.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600nw-1153329448.jpg" alt="Second slide"></img>
      <a href="dinner2"><button class="card-button">Let's Cook</button></a>
      </center>
    </div>
 
    <div class="carousel-item">
        <center>
        <h1 class="item-heading">Hydrebad Chicken Dum Biryani</h1>
      <img class="d-block snacks-inside" src="https://media-cdn.tripadvisor.com/media/photo-s/0e/fc/08/30/hyderabadi-chicken-dum.jpg" alt="Third slide"></img>
      <a href="dinner3"><button class="card-button">Let's Cook</button></a>
     </center>
    </div> 
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</center>
</div>
</div>

                    
        </div>
    </div>
  )
}

export default Dinnerpage