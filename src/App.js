import React from 'react';
import './App.css';
import matches from './matches.png';
import arrow from './arrow.png';

import Main from "./Components/Main";
import Channels from "./Components/Channels"
import Popular from "./Components/Popular"
import Facts from "./Components/Facts"
import Prime from "./Components/Prime"
import Footer from "./Components/Footer"


function App() {
  return (
    <div >
       
<div className="App">
      <h4>ISSUE 079</h4>
<h1>Catalyst</h1>
<h6>Agents of change</h6>
<h6>Read More</h6>
<h4 className="issue">See Full Issue</h4>
<img src={arrow}/>
<p>SCROLL DOWN</p>
</div>
<div className="main"> 
<Main />

</div>

<div className="channels"> 
<Channels />
</div>


<div className="popular">
<Popular />
</div>

<div className="facts"> 
<Facts />
</div>

<div className="prime"> 
<Prime />
</div>

<div className="footer"> 
<Footer />
</div>

    </div>



  );
}

export default App;


{/* <Main />
<Channels/>
<Popular />
<Facts />
<Prime />
<Footer /> */}
// import {
//   Route,
//   NavLink,
//   HashRouter
// } from "react-router-dom";
