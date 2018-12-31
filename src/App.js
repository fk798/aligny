import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Gallery2018 from "./components/Gallery2018";
import Song from "./components/Song";
import Main from "./pages/Main";
import About from "./pages/About";
import Past from "./pages/Past";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Upcoming from "./pages/Upcoming"
import { BrowserRouter, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Navigation />
            <div className = "main-content">
              <Route exact={true} path="/" component={Main}/>
              <Route path="/about" component={About}/>
              <Route path="/upcoming" component={Upcoming}/>
              <Route path="/past" component={Past}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/donate" component={Donate}/>
              <Route path = "/gallery2018" component={Gallery2018}/>
              <Route path="/tax" render={() => (
                <div>A Non-Profit 501 (C) (3) Educational and Charitable Organization, Tax ID # 13-4002794 </div>
              )}/>
            </div>
          </div>
        </BrowserRouter>
        <Song />
      </React.Fragment>

    );
  }
}

export default App;