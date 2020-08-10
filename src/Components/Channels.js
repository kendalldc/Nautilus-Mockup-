import React from 'react';
import bioB from './bioB.jpeg'
import abstractions from './abstractions.jpeg'
import aging from './aging.png'
import earth from './earth.jpeg'
import bones from './bones.jpeg'
import poetry from './poetry.jpeg'
import wise from './wise.png'



function Channels() {
    return (
  //     <div className="channels">
         
  // <h2>Channels</h2>
  // <h4>TUNE IN TO THE NAUTILUS' DEEP DIVE PORTALS</h4>
  
  //     </div>
  <div className="channels">
    <h2>Channels</h2>
  <h4>TUNE IN TO THE NAUTILUS' DEEP DIVE PORTALS</h4>
    <div className="grid-channels">

  <div className="Biology-Beyond">
    <h3>Biology+Beyond</h3>
  <img src={bioB}/>
  <h4>Making Sense of the Genome, at Last</h4>
  <h6>by Adam Piore</h6>
  </div>
  <div className="Women-Science">
  <h3>Women's Science and Engineering</h3>
  <img src={wise}/>
  <h4>Your Brain is On the Brink of Chaos</h4>
  <h6>by Kelly Clancy</h6>
  </div>
  <div className="Quanta-Abs">
  <h3>Women's Science and Engineering</h3>
  <img src={abstractions}/>
  <h4>Your Brain is On the Brink of Chaos</h4>
  <h6>by Kelly Clancy</h6>
  </div>
  <div className="Earth">
  <h3>Women's Science and Engineering</h3>
  <img src={earth}/>
  <h4>Your Brain is On the Brink of Chaos</h4>
  <h6>by Kelly Clancy</h6>
  </div>
  <div className="Think-"></div>
  <div className="Cosmos"></div>
  <div className="Poetry"></div>
  <div className="Aging"></div>
  <div className="Philanthropy"></div>
  <div className="MPNeuro"></div>
  <div className="Channel-title"></div>
</div>
  </div>
  
  
    );
  }

export default Channels
