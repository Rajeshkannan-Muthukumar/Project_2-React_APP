import React from 'react'

function BreakfastCard(data) {

    const {head,img} = data.data;

  return (

              <div class="col-12 col-md-6 col-lg-4 card-row1">
                        <div class="card1">
                            <img class="card-img" src={img}/>
                            <h1 class="card-heading">{head}</h1>
                            <center><a href="breakfast"><button class="card-button">Enter</button></a></center>
                        </div>
                    </div>

  )
}

export default BreakfastCard