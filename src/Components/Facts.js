import React from 'react';
import ideas from './ideas.jpg';
import bio2 from './bio2.jpg';
import biology from './biology.jpg';
import matter from './matter.jpg';




function Facts() {
    return (
      <div className="facts">
         
  
         <h1 className="title-facts">Facts So Romantic</h1>
         <h4>SCIENCE HAS A POWERFUL VOICE IN TODAYS CULTURE <br/> SO WHAT IS IT SAYING</h4>
     <h5 className="blogButton">SEE ALL BLOG POSTS </h5>

     <div class="grid-facts">
  
  <div class="Ideas">
  <img src={ideas}/>
<h4 className="imgSubtitles">Ideas</h4>
<h3>Why the Laws of Physics Are Inevitable</h3>
<p>Reprinted wit permission from Quanta Magazine's Abstractions 
  blog. Compared to the unsolved mysteries of the universe, far less gets 
  said about one of the most profound 
  facts to have.. </p>
  <h5>READ MORE</h5>
  </div>
  
  <div class="Biology">
  <img src={biology}/>
  <h4 className="imgSubtitles">Biology</h4>
<h3>Do Butterflies Challenge the Meaning of Species?</h3>
<p>Reprinted wit permission from Quanta Magazine's Abstractions 
  blog. Compared to the unsolved mysteries of the universe, far less gets 
  said about one of the most profound 
  facts to have.. </p>
  <h5>READ MORE</h5>
  </div>
  
  
  <div class="Matter">
  <img src={matter}/>
  <h4 className="imgSubtitles">Matter</h4>
<h3>Hologram Within a Hologram Hints Fate of Black Holes</h3>
<p>Reprinted wit permission from Quanta Magazine's Abstractions 
  blog. Compared to the unsolved mysteries of the universe, far less gets 
  said about one of the most profound 
  facts to have.. </p>
  <h5>READ MORE</h5>
  </div>
  
  
  <div class="Bio1">
  <img src={bio2}/>
  <h4 className="imgSubtitles">Biology</h4>
<h3>Where to See the Real Living Dead</h3>
<p>Reprinted wit permission from Quanta Magazine's Abstractions 
  blog. Compared to the unsolved mysteries of the universe, far less gets 
  said about one of the most profound 
  facts to have.. </p>
  <h5>READ MORE</h5>
  </div>
</div>  
      </div>
  
  
  
    );
  }

export default Facts
