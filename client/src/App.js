import React, { Component } from 'react';
import Navigation from "./components/Navigation";
import Gallery2019 from "./components/Gallery2019"
import Gallery2018 from "./components/Gallery2018";
import Gallery2017 from "./components/Gallery2017";
import Logo from "./components/Logo"
import Main from "./pages/Main";
import About from "./pages/About_Us/About";
import Team from "./pages/About_Us/Team";
import Vision from "./pages/About_Us/Vision";
import Past from "./pages/Events/Past";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
//import Magazines from "./pages/Resources/Magazines";
import Upcoming from "./pages/Events/Upcoming";
import Construction from "./components/Construction";
import { BrowserRouter, Route } from "react-router-dom"
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
              <Route path="/upcoming" component={Upcoming}/>
              <Route path="/past" component={Past}/>
              <Route path="/news" component={Construction}/>
              <Route path="/membership" render={() => (<React.Fragment>
                <p>The Aligarh Alumni Association of New York is geared towards achieving the goals
of Sir Syed Ahmad Khan such as education and economic development of under-
privileged communities, emphasis on modern scientific knowledge and work
towards unity and harmony among different communities.
In order to achieve those goals AAANY welcome persons as new member to be part
of the organization.</p>

<p>These are the two types of memberships:</p>
<ul>
  <li>1) Lifetime Member : Free access to all AAANY activities and publications.</li>
                <li>2) Regular Member : Discounted prices on all AAANY activities and publications (One Year).</li>
</ul>

<p>To become member, please fill out the membership form</p>
                </React.Fragment>
              )}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/donate" component={Donate}/>
              <Route path = "/gallery2018" component={Gallery2018}/>
              <Route path = "/gallery2017" component={Gallery2017}/>
              <Route path = "/gallery2019" component={Gallery2019}/>
              <Route path="/magazines" component={Construction}/>
            </div>
          </div>
        </BrowserRouter>
        <div className = "brown" copyrights = "© 2019 Aligarh Alumni Association of New York (AAANY)">
        <h5 style = {{textAlign: "center"}}>Aligarh Alumni Association of New York (AAANY)</h5>
        </div>
      </React.Fragment>

    );
  }
}

export default App;
//<Route path="/goals" component={Construction}/>