import React, { Component } from 'react';
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Gallery2018 from "./components/Gallery2018";
import Gallery2017 from "./components/Gallery2017";
import Main from "./pages/Main";
import About from "./pages/About_Us/About";
import Team from "./pages/About_Us/Team";
import Vision from "./pages/About_Us/Vision";
import Past from "./pages/Events/Past";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
//import Magazines from "./pages/Resources/Magazines";
//import Upcoming from "./pages/Events/Upcoming";
import Construction from "./components/Construction";
import { BrowserRouter, Route } from "react-router-dom"
import { Footer } from "react-materialize";
import './App.css';

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
              <Route path="/team" component={Team}/>
              <Route path="/vision" component={Vision}/>
              <Route path="/tax" render={() => (
                <div>A Non-Profit 501 (C) (3) Educational and Charitable Organization, Tax ID # 13-4002794 </div>
              )}/>
              <Route path="/upcoming" component={Construction}/>
              <Route path="/past" component={Past}/>
              <Route path="/news" component={Construction}/>
              <Route path="/membership" render={() => (<React.Fragment>
                <div>1) Lifetime Member : Free access to all AAANY activities and publications.</div>
                <div>2) Regular Member : Discounted prices on all AAANY activities and publications (One Year).</div>
                </React.Fragment>
              )}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/donate" component={Donate}/>
              <Route path = "/gallery2018" component={Gallery2018}/>
              <Route path = "/gallery2017" component={Gallery2017}/>
              <Route path="/magazines" component={Construction}/>
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
//<Route path="/goals" component={Construction}/>