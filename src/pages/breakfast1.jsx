import React from 'react'

function Breakfast1() {
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
                    <a class="inner " href="aboutuspage.html">About us<span class="sr-only">(current)</span></a>
                    <h1 class="inner card-heading cooking-pal-head">COOKING PAL</h1>
                    <a class="inner " href="contactuspage.html">Contact Us<span class="sr-only">(current)</span></a>
                    <a class="inner " href="product">Products<span class="sr-only">(current)</span></a>
                    <a class="inner " href="productspage.html">Cart<span class="sr-only">(current)</span></a>
                </div>
            </div>
        </nav>
        <center><h1 class="card-heading"><a href="breakfast">Breakfasts</a> - Idli</h1></center>
        <div class="container idlipage m-auto">
            <div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group mt-5">
      <a class="list-group-item list-group-item-action" href="#list-item-1">Ingredients</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Preparing Idli Batter</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">Making Idli</a>
    </div>
    <div>
        <img 
        class="mt-5 inside-img"
        // style="height: 25vh; width: 25vw; border-radius: 5px; "
        src="https://res.cloudinary.com/dm6wjacnw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699075160/ytidcuqlb9nguzokfwle.png"/>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scroll" tabindex="0">
        <h4 class="card-heading" id="list-item-1">Ingredients</h4>
                <h5>For Idli Batter:</h5>
                <ol>
                    <li>2 cups of parboiled rice (idli rice)</li>
                    <li>1 cup of urad dal (black gram)</li>
                    <li>1/2 teaspoon of fenugreek seeds (methi)</li>
                    <li>Water (for soaking)</li>
                    <li>Water (for grinding)</li>
                    <li>Salt to taste</li>
                </ol>
                <h5>For making Idli:</h5>
                <ol>
                    <li>Idli batter (prepared as above)</li>
                    <li>Oil or ghee (for greasing the idli molds)</li>
                    <li>Water (for steaming)</li>
                </ol>
                <h4 class="card-heading" id="list-item-2">Preparing the Idli Batter:</h4>
                <p>
                    <ol>
                    <li>Rinse the parboiled rice and urad dal separately under running water until the water runs clear.</li>
                    <li>Soak the rice and urad dal separately in ample water for at least 4-6 hours.</li>
                    <li>You can also add fenugreek seeds to the urad dal while soaking.</li>
                    <li>After soaking, drain the water from both the rice and urad dal.</li>
                    <li>Grind the urad dal first. Add a little water and grind to a smooth and fluffy batter.</li>
                    <li>It may take about 15-20 minutes. The batter should have a light and airy texture.</li>
                    <li>Transfer the urad dal batter to a large mixing bowl.</li>
                    <li>Next, grind the soaked rice into a smooth batter. Add water as needed.</li>
                    <li>The rice batter should be slightly grainy, not completely smooth.</li>
                    <li>Combine the rice batter with the urad dal batter in the mixing bowl. Add salt and mix well.</li>
                    <li>Mix the batter well using your hands or a spatula. Ensure that the batter is well combined and evenly mixed.</li>
                    <li>Cover the bowl with a clean cloth and let it ferment at room temperature for 8-12 hours, or until the batter has doubled in volume.</li>
                    <li>The fermentation time may vary depending on the temperature and humidity in your location.</li>
                    </ol>
                </p>
                <h4 class="card-heading" id="list-item-3">Making Idli:</h4>
                <p>
                    <ol>
                        <li>Grease the idli molds or plates with a little oil or ghee to prevent sticking.</li>
                        <li>Stir the fermented batter gently to deflate any excess air.</li>
                        <li>Fill each idli mold with a ladleful of the batter, leaving a little space at the top for the idlis to expand.</li>
                        <li>Steam the idlis in a steamer or an idli maker for about 10-12 minutes. Insert a toothpick or knife into an idli to check if it comes out clean, indicating that the idlis are cooked.</li>
                        <li>Allow the idlis to cool for a few minutes, then use a spoon to gently remove them from the molds.</li>
                    </ol>
                    <center>!!!Serve hot idlis with coconut chutney and sambar!!!</center>
                </p>
    </div>
</div>

</div>
        </div>
        


    </div>
    </div>
  )
}

export default Breakfast1