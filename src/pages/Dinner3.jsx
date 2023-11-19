import React from 'react'

function Dinner3() {
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
      <a class="list-group-item list-group-item-action" href="#list-item-2">Chicken n Rice</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">The Biryani</a>
    </div>
    <div>
        <img 
        class="mt-5 inside-img"
        src="https://media-cdn.tripadvisor.com/media/photo-s/0e/fc/08/30/hyderabadi-chicken-dum.jpg"></img>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scroll" tabindex="0">
        <h4 class="card-heading" id="list-item-1">Ingredients</h4>
        <h5>For Marinating Chicken:</h5>
        <p>        
        <ol>   
            <li>500 grams chicken, cut into pieces</li>
            <li>1 cup yogurt</li>
            <li>1 tablespoon ginger-garlic paste</li>
            <li>1 teaspoon red chili powder</li>
            <li>1/2 teaspoon turmeric powder</li>
            <li>1 teaspoon garam masala</li>
            <li>Salt to taste            </li>
        </ol>
        </p>
                <h5>For Biryani Rice:</h5>
                <p>
                    <ol>
                        <li>2 cups basmati rice, soaked for 30 minutes</li>
                        <li>4-5 cups water</li>
                        <li>1 bay leaf</li>
                        <li>4-5 green cardamom pods</li>
                        <li>4-5 cloves</li>
                        <li>2-inch cinnamon stick</li>
                        <li>Salt to taste              </li>
                    </ol>
                </p>
                <h5>For Biryani Masala:</h5>
                <p>
                    <ol>
                        <li>2 large onions, thinly sliced</li>
                        <li>1/2 cup vegetable oil or ghee</li>
                        <li>1 tablespoon biryani masala</li>
                        <li>1/2 cup fresh mint leaves</li>
                        <li>1/2 cup fresh coriander leaves</li>
                        <li>1/2 cup fried onions (for garnish)                        </li>
                    </ol>
                </p>
                <h5>For Dum Cooking:</h5>
                <p>
                    <li>1/2 cup milk, infused with saffron strands</li>
                </p>
                <h4 class="card-heading" id="list-item-2">Chicken & Rice</h4>
                <h5>Marinating the Chicken:</h5>
                <p>
                    <ol>
                        <li>In a bowl, combine chicken pieces with yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala, and salt.</li>
                        <li>Marinate the chicken for at least 2 hours, or preferably overnight in the refrigerator.</li>
                    </ol>
                 </p>
                <h5>Cooking Biryani Rice:</h5> 
                <p>
                    <ol>
                        <li>In a large pot, bring water to a boil.</li>
                        <li>Add soaked basmati rice, bay leaf, green cardamom pods, cloves, cinnamon stick, and salt.</li>
                        <li>Cook the rice until it is 70-80% cooked. Drain the water and set aside.                        </li>
                    </ol>
                </p>
                <h5>Preparing Biryani Masala</h5>
                <p>
                    <ol>
                        <li>In a pan, heat vegetable oil or ghee over medium heat.</li>
                        <li>Add thinly sliced onions and fry until they become golden brown and caramelized.</li>
                        <li>Remove half of the fried onions for garnish.</li>
                        <li>To the remaining onions in the pan, add biryani masala, mint leaves, and coriander leaves. Mix well.                        </li>
                    </ol>
                </p>
                <h4 class="card-heading" id="list-item-3">The Biryani</h4>
                <p>
                    <ol>
                        <li>Preheat the oven to 180°C (356°F).</li>
                        <li>In a heavy-bottomed pot, spread a layer of partially cooked rice.</li>
                        <li>Top with a layer of marinated chicken.</li>
                        <li>Add a layer of the biryani masala mixture.</li>
                        <li>Repeat the layers until all the rice and chicken are used, finishing with a layer of rice on top.</li>
                        <li>Drizzle saffron-infused milk and ghee over the top layer.</li>
                        <li>Sprinkle the reserved fried onions over the top.</li>
                        <li>Cover the pot tightly with a lid or seal it with aluminum foil.</li>
                        <li>Place the pot on a very low flame or in a preheated oven at 180°C (356°F) for 20-25 minutes.                                                </li>
                    </ol>    
                    </p>   
                    <p>
                    <center>!!!Enjoy your aromatic and flavorful Hyderabadi Chicken Dum Biryani!!!</center>
                </p>
    </div>
</div>

</div>
        </div>
        
        


    </div>
    </div>
  )
}

export default Dinner3