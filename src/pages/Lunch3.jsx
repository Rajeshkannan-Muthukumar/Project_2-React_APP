import React from 'react'

function Lunch3() {
  return (
    <div>
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
                    <a class="inner " href="Contactus">Contact Us<span class="sr-only">(current)</span></a>
                    <a class="inner " href="product">Products<span class="sr-only">(current)</span></a>
                    <a class="inner " href="product">Cart<span class="sr-only">(current)</span></a>
                </div>
            </div>
        </nav>
        <center><h1 class="card-heading"><a href="lunchpage">Lunch</a> - Mutton Curry</h1></center>
        <div class="container idlipage m-auto">
            <div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group mt-5">
      <a class="list-group-item list-group-item-action" href="#list-item-1">Ingredients</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Marinating</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">Cook the Meat</a>
    </div>
    <div>
        <img 
        class="mt-5 inside-img"
        src="https://baymeatmarket.co.za/wp-content/uploads/2021/07/Mutton-curry.jpg"></img>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scroll" tabindex="0">
        <h4 class="card-heading" id="list-item-1">Ingredients</h4>
        <p>        
        <ol>
                    <li>500 grams mutton pieces, cleaned and washed</li>
                    <li>2 large onions, finely sliced</li>
                    <li>2 tomatoes, chopped</li>
                    <li>1/4 cup yogurt</li>
                    <li>2 tablespoons ginger-garlic paste</li>
                    <li>2 tablespoons vegetable oil or ghee</li>
                    <li>1/2 cup chopped coriander leaves (cilantro) for garnish</li>
                    <li>Salt to taste</li>
                </ol>
                </p>
                <h5>Spices:</h5>
                <p>
                    <ol>
                        <li>1 teaspoon cumin seeds</li>
                        <li>2 bay leaves</li>
                        <li>4-5 green cardamom pods</li>
                        <li>4-5 cloves</li>
                        <li>2-inch cinnamon stick</li>
                        <li>1 teaspoon turmeric powder</li>
                        <li>1 tablespoon red chili powder (adjust to taste)</li>
                        <li>1 tablespoon coriander powder</li>
                        <li>1 teaspoon garam masala</li>
                        <li>1 teaspoon cumin powder</li>
                    </ol>
                </p>

                <h4 class="card-heading" id="list-item-2">Marinating Mutton</h4>
                <p>
                In a bowl, marinate the cleaned mutton pieces with 
                yogurt, ginger-garlic paste, turmeric powder, red chili powder,
                 coriander powder, cumin powder, and salt.
                Let it marinate for at least 1-2 hours or overnight in the 
                 refrigerator for better flavor.
                 </p>
                <h4 class="card-heading" id="list-item-3">Cooking The Mutton</h4>
                <p>
                    <ol>
                        <li>In a heavy-bottomed pan or pressure cooker, heat vegetable oil or ghee over medium heat.</li>
                        <li>Add cumin seeds, bay leaves, green cardamom pods, cloves, and cinnamon stick. Sauté until fragrant.</li>
                        <li>Add sliced onions and sauté until they become golden brown.</li>
                        <li>Add the marinated mutton to the pan and cook until the meat is browned on all sides.</li>
                        <li>Add chopped tomatoes and cook until they become soft and the oil starts to separate.</li>
                        <li>If using a pressure cooker, add about 1 cup of water, close the lid, and cook until the mutton is tender (about 4-5 whistles). If using a regular pan, cover and cook on low heat until the mutton is tender, adding water as needed.                        </li>
                        <li>Once the mutton is tender, check the seasoning and adjust if necessary.</li>
                        <li>Add garam masala and cook for an additional 5-7 minutes until the curry thickens.</li>
                        <li>Garnish with chopped coriander leaves.                        </li>
                    </ol>    
                    </p>   
                    <p>
                    <center>!!!Enjoy your flavorful homemade mutton curry!!!</center>
                </p>
    </div>
</div>

</div>
        </div>
        


    </div>
    </div>
  )
}

export default Lunch3