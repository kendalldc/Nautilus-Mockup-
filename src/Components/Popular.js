import React from 'react';
import popular1 from './popular1.png';
import popular2 from './popular2.png';



function Popular() {
    return (
      <div className="main">
         
  <h1 className="title-popular">Popular On Nautilus</h1>
  <h4 className="mostRead">Most Read</h4>   <h4 className="mostShared">Most Shared</h4>

  <div className="grid-popular">
  <div className="Does">
    <h2>   <img src={popular1} className="popPhoto"/>
1 Does Theranos Mark the Peak of the Silicon Valley Bubble?</h2>
    <p>John Carryrou talks Nautilus about the lesson of a $1 <br/> billion fraud</p>
    <h5> BY Michael Segal</h5>
  </div>
  <div className="Smaller">
  <h2> <img src={popular2} className="popPhoto"/> 2 The Smaller the Theater, The Faster the Music  </h2>
    <p>Cornposer Phillip Glass Talks time with the painter Fredericka Foster</p>
    <h5>BY Phillip Glass </h5>
  </div>
  <div className="What-Time">
    <h4>3 What Time Feels Like When  You're Impoving</h4>
    <h6>The nuerology of flow states</h6>
    <h6>BY HEATHER BERLIN</h6>
  </div>
  <div className="New-Veiw">
  <h4>4 A New View of Time</h4>
    <h6>Introducing the Nautilus Time Project</h6>
    <h6>BY BETH JACOBS AND LEE SMOLIN</h6>
  </div>
  <div className="Text-me">
  <h4>5 She'll Text Me, She'll text Me Not</h4>
    <h6>The science of the waiting modern courtship</h6>
    <h6>BY AZIZ ANGARI AND ERIC KLINEBERG</h6>
  </div>
  <div className="when-bad">
  <h4>6 When Bad Things Happen in Slow Motion</h4>
    <h6>Is there more to our experience of time than <br/>the fables of memory?  </h6>
    <h6>BY IVAN AMATO</h6>
  </div>
</div>
  
      </div>
  
  
  
    );
  }
export default Popular
