import React from 'react';
import bioB from './bioB.jpeg';
import abstractions from './abstractions.jpeg';
import aging from './aging.png';
import earth from './earth.jpeg';
import bones from './bones.jpeg';
import poetry from './poetry.jpeg';
import wise from './wise.png';
import tlas from './tlas.jpeg';
import cosmos from './cosmos.jpeg';
import alliance from './alliance.png'



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
  <div className="Think-">
  <h3>THINK LIKE A SCIENCTIST</h3>
  <img src={tlas}/>
  <h4>The Best Burger Place is a Lab</h4>
  <h6>by Thomas King</h6>
  </div>
  <div className="Cosmos">
  <h3>cosmos</h3>
  <img src={cosmos}/>
  <h4>How Much Should Expectation Drive <br/>
  Science</h4>
  <h6>by Claudia Geib</h6>
  </div>
  <div className="Poetry">
  <h3>POETRY IN SCIENCE</h3>
  <img src={poetry}/>
  <h4>On Observation and Imagination</h4>
  <h6>by Gillian Osborne</h6>
  </div>
  <div className="Aging">
  <h3>Aging</h3>
  <img src={aging}/>
  <h4>Yes, Life in the Fast Lane Kills You</h4>
  <h6>by Gillian Osborne</h6>
  </div>
  <div className="Philanthropy">
  <h3>SCIENCE PHILANTHROPY ALLIANCE</h3>
  <img src={alliance}/>
  <h4>Taking to the Stars</h4>
  <h6>by Science Philanthropy Alliance</h6>
  </div>
  <div className="MPNeuro">
  <h3>MPNeuro</h3>
  <img src={bones}/>
  <h4>Understanding the Brain with the Help of Artificial Intelligence</h4>
  <h6>by Max Planck Institute of Neurobiology</h6>
  </div>
  <div className="Channel-title"></div>
</div>
  </div>
  
  
    );
  }

export default Channels
