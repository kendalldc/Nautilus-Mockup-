import React from 'react';
import logo from './logo.png';
import ai from './ai.png';
import clover from './clover.jpg';
import music from './music.png';
import art from './art.png';

function Main() {
    return (
//       <div className="main">
// <ul className="nav">
// <img src={logo}/>
//          <li>Issues</li>
//             <li>Topics</li>
//             <li>Blog</li>
//             <li>Newsletter</li>
//             <li className="facebook"><a href="#"></a></li>           
//             {/* <li className="twitter"><a href="#"></a></li>           */}
//               <li>Login</li>
//               <li className="subscribe">Subscribe</li>
//                </ul>
 
//     <h4 className="spotlight">THE NAUTILUS SPOTLIGHT</h4>
//     <h1 className="mainTitle">WHY THE LAWS OF PHYSICS ARE <br/> INEVITABLE</h1>
//     <h3 className="mainRead">READ NOW</h3>
//   </div>
<div className="grid-container">
<div className="Main-Top">
  <div className="Nav-bar1">
  <ul>
  <img src={logo}/>
     <li>Issues</li>
             <li>Topics</li>
             <li>Blog</li>
             <li>Newsletter</li>
             <li className="facebook"><a href="#"></a></li>           
             {/* <li className="twitter"><a href="#"></a></li>           */}
               <li>Login</li>
               <li className="subscribe">Subscribe</li>
                </ul>
  </div>
  <div className="main-img">
  <h4 className="spotlight">THE NAUTILUS SPOTLIGHT</h4>
    <h1 className="mainTitle">WHY THE LAWS OF PHYSICS ARE <br/> INEVITABLE</h1>
     <h3 className="mainRead">READ NOW</h3>
     <div className="color-overlay"></div>
  </div>
</div>
<div className="Main-Sidebar">
  <div className="Cata1">
    <h6 className="issue079">Issue 079</h6>
    <h4 className="catalystMenu">Catalysts</h4>
    <p>"What generates a new theory in science?.."</p>
  </div>
  <div className="ch1">
    <h6>Chapter One</h6>
    <p>Art</p>
  </div>
  <div className="ch2">
  <h6>Chapter Two</h6>
    <p>Mind</p>
    <p>Coming December 12</p>
    
  </div>
  <div className="ch3">
  <h6>Chapter Three</h6>
    <p>Energy</p>
    <p>Coming December 19</p>
  </div>
  <div className="ch4">
  <h6>Chapter Four</h6>
    <p>Stars</p>
    <p>Coming December 26</p>
  </div>
</div>
<div className="red-img">
  <div className="Artificial-Int">
    <h6>Artificial Intelligence</h6>
    <p>Best Screenplay Goes to the Algorithms</p>
    <br/>
    <p>Authur L. Miller</p>
  </div>
</div>
<div className="Mus-Art">
  <div className="Mus"></div>
  <div className="Art">
    <div className="KB"></div>
  </div>
</div>
</div>
  
    );
  }


export default Main
