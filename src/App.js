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
        <Song />
        <BrowserRouter>
          <div>
            <Navigation />
            <Route exact={true} path="/" component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/upcoming" component={Upcoming}/>
            <Route path="/past" component={Past}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/donate" component={Donate}/>
            <Route path = "/gallery2018" component={Gallery2018}/>
          </div>
        </BrowserRouter>
        <div className="copyright text-center" id="footer">© 2018 Aligarh Alumni Association New York. All Rights Reserved.</div>
      </React.Fragment>

    );
  }
}

export default App;