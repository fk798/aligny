import React, { Component } from 'react';
import './App.css';
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Gallery2018 from "./components/Gallery2018";
import Main from "./pages/Main";
import About from "./pages/About";
import Past from "./pages/Past";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Upcoming from "./pages/Upcoming"
import { BrowserRouter, Route } from "react-router-dom"
import { Footer } from "react-materialize";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Logo />
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
              <Route path="/membership" render={() => (<React.Fragment>
                <div>1) Lifetime Member : Free access to all AAANY activities and publications.</div>
                <div>2) Regular Member : Discounted prices on all AAANY activities and publications (One Year).</div>
                </React.Fragment>
              )}/>
            </div>
          </div>
        </BrowserRouter>
        <Footer className = "brown" copyrights = "© 2019 Aligarh Alumni Association of New York (AAANY)">
        <h5 style={{color: "white"}}>Aligarh Alumni Association of New York (AAANY)</h5>
        </Footer>
      </React.Fragment>

    );
  }
}

export default App;