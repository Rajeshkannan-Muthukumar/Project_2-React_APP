import React from 'react'

function Breakfast3() {
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
                    <a class="inner " href="aboutuspage.html">About us<span class="sr-only">(current)</span></a>
                    <h1 class="inner card-heading cooking-pal-head">COOKING PAL</h1>
                    <a class="inner " href="contactuspage.html">Contact Us<span class="sr-only">(current)</span></a>
                    <a class="inner " href="product">Products<span class="sr-only">(current)</span></a>
                    <a class="inner " href="productspage.html">Cart<span class="sr-only">(current)</span></a>
                </div>
            </div>
        </nav>
        <center><h1 class="card-heading"><a href="breakfast">Breakfasts</a> - Poori</h1></center>
        <div class="container idlipage m-auto">
            <div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group mt-5">
      <a class="list-group-item list-group-item-action" href="#list-item-1">Ingredients</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Preparing Poori dough</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">Shaping and Frying Pooris</a>
    </div>
    <div>
        <img 
        class="mt-5 inside-img"
        // style="height: 25vh; width: 25vw; border-radius: 5px; "
        src="https://res.cloudinary.com/dm6wjacnw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699081248/m3colqienewvqarpxqp3.png"/>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scroll" tabindex="0">
        <h4 class="card-heading" id="list-item-1">Ingredients</h4>
                
                <ol>
                    <li>2 cups of whole wheat flour</li>
                    <li>1/2 cup of semolina (sooji)</li>
                    <li>Water (for kneading)</li>
                    <li>Salt to taste</li>
                    <li>Oil (for deep frying)</li>
                </ol>
                <h4 class="card-heading" id="list-item-2">Preparing the Poori Dough:</h4>
                <p>
                    <ol>
                        <li>In a mixing bowl, combine the whole wheat flour, semolina, and a pinch of salt.</li>
                        <li>Gradually add water and knead the mixture to form a smooth and stiff dough. The dough should not be too soft or too hard.</li>
                        <li>Cover the dough with a damp cloth and let it rest for about 15-20 minutes.</li>
                    </ol>
                </p>
                <h4 class="card-heading" id="list-item-3">Shaping and Frying Pooris:</h4>
                <p>
                    <ol>
                        <li>Heat oil in a deep frying pan or kadai over medium heat.</li>
                        <li>Take a small portion of the dough and roll it into a smooth ball between your palms.</li>
                        <li>Flatten the ball with a rolling pin to form a small disc, about 3 inches in diameter. The thickness should be uniform.</li>
                        <li>Carefully slide the rolled poori into the hot oil.</li>
                        <li>Gently press down on the poori with a slotted spoon. This will help the poori puff up.</li>
                        <li>Once the poori puffs up and turns golden brown on one side, flip it using the slotted spoon to cook the other side.</li>
                        <li>Once both sides are golden brown, carefully remove the poori from the oil and place it on a plate lined with paper towels to absorb excess oil.</li>
                        <li>Repeat the process with the remaining dough.</li>




                    </ol>
                    <center>!!!Enjoy your delicious homemade pooris!!!!</center>
                </p>
    </div>
</div>

</div>
        </div>
        


    </div>
    
  )
}

export default Breakfast3