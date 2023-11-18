import React from 'react'

function Breakfast2() {
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
                    <a class="inner " href="productspag">Cart<span class="sr-only">(current)</span></a>
                </div>
            </div>
        </nav>
        <center><h1 class="card-heading"><a href="breakfast">Breakfasts</a> - Dosa</h1></center>
        <div class="container idlipage m-auto">
            <div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group mt-5">
      <a class="list-group-item list-group-item-action" href="#list-item-1">Ingredients</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Preparing Dosa Batter</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">Making Dosa</a>
    </div>
    <div>
        <img 
        class="mt-5 inside-img"
        // style="height: 25vh; width: 25vw; border-radius: 5px; "
        src="https://res.cloudinary.com/dm6wjacnw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699075121/rghdafqtgwrl5p33tmyg.png"/>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scroll" tabindex="0">
        <h4 class="card-heading" id="list-item-1">Ingredients</h4>
                <h5>For Dosa Batter:</h5>
                <ol>
                    <li>1 cup of regular rice</li>
                    <li>1 cup of parboiled rice</li>
                    <li>1/2 cup of urad dal (black gram)</li>
                    <li>1/4 teaspoon of fenugreek seeds</li>
                    <li>Water (for soaking)</li>
                    <li>Salt to taste</li>
                </ol>
                <h5>For making Dosa:</h5>
                <ol>
                    <li>Dosa batter (prepared as above)</li>
                    <li>Oil or ghee (for greasing the dosa)</li>
                </ol>
                <h4 class="card-heading" id="list-item-2">Preparing the Dosa Batter:</h4>
                <p>
                    <ol>
                        <li>Rinse the regular rice, parboiled rice, urad dal, and fenugreek seeds separately under running water until the water runs clear.</li>
                        <li>Soak the regular rice, parboiled rice, urad dal, and fenugreek seeds in ample water for at least 4-6 hours.</li>
                        <li>After soaking, drain the water from the rice and dal.</li>
                        <li>Grind the soaked urad dal and fenugreek seeds to a smooth and fluffy batter. Add water as needed during grinding.</li>
                        <li>Grind the soaked rice separately into a smooth batter. The batter should have a slightly grainy texture.</li>
                        <li>Mix the urad dal batter and rice batter together in a large bowl. Add salt and mix well.</li>
                        <li>Cover the bowl with a clean cloth and let the batter ferment at room temperature for 8-12 hours, or until it doubles in volume.</li>
                    </ol>
                </p>
                <h4 class="card-heading" id="list-item-3">Making Dosa:</h4>
                <p>
                    <ol>
                        <li>After fermentation, stir the batter gently to mix it well.</li>
                        <li>Heat a non-stick or cast-iron skillet or dosa tawa on medium heat.</li>
                        <li>Grease the tawa with a little oil or ghee.</li>
                        <li>Pour a ladleful of dosa batter onto the center of the hot tawa.</li>
                        <li>Using the back of the ladle, spread the batter in a circular motion to form a thin, even layer.</li>
                        <li>Drizzle a little oil or ghee around the edges of the dosa.</li>
                        <li>Cook until the edges start to lift and the bottom becomes golden brown.</li>
                        <li>Flip the dosa and cook the other side for a short duration.</li>
                        <li>Remove the dosa from the tawa and repeat the process with the remaining batter.</li>
                    </ol>
                    <center>!!!Serve the dosas hot with your favorite chutney and sambar. Enjoy your homemade dosas!!!</center>
                </p>
    </div>
</div>

</div>
        </div>
        


    </div>
    </div>
  )
}

export default Breakfast2