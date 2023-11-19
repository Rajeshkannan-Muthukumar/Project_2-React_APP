import React from 'react'

function Dinner2() {
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
        <center><h1 class="card-heading"><a href="Dinnerpage">Dinner</a> - Butter Chicken</h1></center>
        <div class="container idlipage m-auto">
            <div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group mt-5">
      <a class="list-group-item list-group-item-action" href="#list-item-1">Ingredients</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Cooking the Chicken</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">Preparing the Butter Chicken Gravy</a>
    </div>
    <div>
        <img 
        class="mt-5 inside-img"
        src="https://www.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600nw-1153329448.jpg"></img>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scroll" tabindex="0">
        <h4 class="card-heading" id="list-item-1">Ingredients</h4>
        <h5>For Marination:</h5>
        <p>        
        <ol>
            <li>500 grams boneless chicken, cut into cubes</li>
            <li>1 cup plain yogurt</li>
            <li>1 tablespoon ginger-garlic paste</li>
            <li>1 teaspoon red chili powder</li>
            <li>1/2 teaspoon turmeric powder</li>
            <li>1 teaspoon garam masala</li>
            <li>Salt to taste</li>
            <li>1 tablespoon vegetable oil</li>
        </ol>
                </p>
                <h5>For Butter Chicken Gravy:</h5>
                <p>
                    <ol>
                        <li>2 tablespoons butter</li>
                        <li>1 tablespoon vegetable oil</li>
                        <li>1 large onion, finely chopped</li>
                        <li>2 large tomatoes, pureed</li>
                        <li>1 tablespoon tomato paste (optional)</li>
                        <li>1 tablespoon ginger-garlic paste</li>
                        <li>1 teaspoon red chili powder</li>
                        <li>1 teaspoon coriander powder</li>
                        <li>1/2 teaspoon turmeric powder</li>
                        <li>1 teaspoon garam masala</li>
                        <li>1 teaspoon dried fenugreek leaves (kasuri methi)</li>
                        <li>1/2 cup heavy cream</li>
                        <li>Salt to taste</li>
                        <li>Fresh coriander leaves for garnish              </li>
                    </ol>
                </p>

                <h4 class="card-heading" id="list-item-2">Cooking the Chicken</h4>
                <p>
                    <ol>
                        <li>Preheat the oven to 200°C (392°F).</li>
                        <li>Thread the marinated chicken onto skewers and place them on a baking tray.</li>
                        <li>Bake the chicken in the preheated oven for about 20-25 minutes or until cooked through.                        </li>
                    </ol>
                 </p>
                <h4 class="card-heading" id="list-item-3">Preparing the Butter Chicken Gravy</h4>
                <p>
                    <ol>
                        <li>In a large pan, heat butter and vegetable oil over medium heat.</li>
                        <li>Add chopped onions and sauté until they become golden brown.</li>
                        <li>Add ginger-garlic paste and sauté for another minute until the raw smell disappears.</li>
                        <li>Stir in red chili powder, coriander powder, turmeric powder, and garam masala. Cook for 2-3 minutes.</li>
                        <li>Add tomato puree and tomato paste. Cook until the mixture thickens and the oil starts to separate.</li>
                        <li>Add the baked chicken to the gravy. Mix well and let it simmer for 5 minutes.</li>
                        <li>Crush dried fenugreek leaves between your palms and add them to the gravy.</li>
                        <li>Pour in heavy cream and stir until well combined.</li>
                        <li>Adjust salt to taste and let the butter chicken simmer for an additional 5-7 minutes.                                          </li>
                    </ol>    
                    </p>  
                    <p> 
                    <center>!!!Enjoy your creamy and flavorful Butter Chicken!!!</center>
                </p>
    </div>
</div>

</div>
        </div>
        
        


    </div>
    </div>
  )
}

export default Dinner2