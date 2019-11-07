import React, { Component } from "react";
import { Route, HashRouter, NavLink } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import Staff from "./Staff";

class App extends Component {
  render(){
    
    return(
    <HashRouter>
      <div>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/staff">Staff</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <div class="content">
          <Route exact path="/" component={Home} />
          <Route path="/staff" component={Staff} />
          <Route path="/contact" component={Contact} /> 
        </div>
     </div>
     </HashRouter>
    )
    
  }
 
}

export default App