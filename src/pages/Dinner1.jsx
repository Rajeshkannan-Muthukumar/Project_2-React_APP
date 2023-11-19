import React from 'react'

function Dinner1() {
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
        <center><h1 class="card-heading"><a href="Dinnerpage">Dinner</a> - Palak Paneer</h1></center>
        <div class="container idlipage m-auto">
            <div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group mt-5">
      <a class="list-group-item list-group-item-action" href="#list-item-1">Ingredients</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Spinach & Paneer </a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">The Palak Paneer</a>
    </div>
    <div>
        <img 
        class="mt-5 inside-img"
        src="https://bonmasala.com/wp-content/uploads/2022/06/palak-paneer.jpg"></img>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scroll" tabindex="0">
        <h4 class="card-heading" id="list-item-1">Ingredients</h4>
        <p>        
        <ol>
            <li>250 grams paneer (cottage cheese), cubed</li>
            <li>4 cups fresh spinach leaves (palak), washed and chopped</li>
            <li>1 large onion, finely chopped</li>
            <li>2 large tomatoes, chopped</li>
            <li>1/2 cup plain yogurt</li>
            <li>1 tablespoon ginger-garlic paste</li>
            <li>1-2 green chilies, chopped (adjust to taste)</li>
            <li>1 teaspoon cumin seeds</li>
            <li>1 teaspoon garam masala</li>
            <li>1 teaspoon coriander powder</li>
            <li>1/2 teaspoon turmeric powder</li>
            <li>1/2 teaspoon red chili powder (adjust to taste)</li>
            <li>2 tablespoons ghee or oil</li>
            <li>Salt to taste</li>
            <li>Fresh coriander leaves for garnish</li>     
        </ol>
                </p>
                <h4 class="card-heading" id="list-item-2">Spinach & Paneer</h4>
                <p>
                    <h5>Spinach</h5>
                    <ol>
                        <li>Bring a pot of water to boil and blanch the chopped spinach leaves for 2-3 minutes.</li>
                        <li>Drain the spinach and immediately transfer it to ice-cold water to retain the vibrant green color.</li>
                        <li>Once cooled, blend the spinach into a smooth puree. Set aside.                        </li>
                    </ol>
                    <h5>Paneer</h5>
                    <ol>
                        <li>In a pan, heat a little ghee or oil over medium heat.</li>
                        <li>Lightly fry the paneer cubes until they turn golden brown. Remove them from the pan and set aside.                       </li>
                    </ol>
                 </p>
                <h4 class="card-heading" id="list-item-3">Cooking Palak Paneer</h4>
                <p>
                    <ol>
                                          
                        
                        <li>In the same pan, add more ghee or oil if needed.</li>
                        <li>Add cumin seeds and let them splutter.</li>
                        <li>Add chopped onions and sauté until they become golden brown.</li>
                        <li>Add ginger-garlic paste and green chilies. Sauté for a minute until the raw smell disappears.</li>
                        <li>Add chopped tomatoes and cook until they become soft and the oil starts to separate.</li>
                        <li>Stir in turmeric powder, red chili powder, coriander powder, and garam masala. Cook for a couple of minutes.</li>
                        <li>Add the spinach puree and cook for 5-7 minutes until the mixture thickens.</li>
                        <li>Whisk the yogurt and add it to the pan. Stir well and cook for an additional 2-3 minutes.</li>
                        <li>Add the fried paneer cubes and cook for a few more minutes until the paneer absorbs the flavors.</li>
                        <li>Adjust salt to taste.</li>


                    </ol>    
                    </p>   
                    <p>
                    <center>!!!Enjoy your delicious and nutritious Palak Paneer!!!</center>
                </p>
    </div>
</div>

</div>
        </div>
        


    </div>
    </div>
  )
}

export default Dinner1