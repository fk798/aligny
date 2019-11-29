import React, { Component } from "react";
import "./Past.css"
import { Link } from "react-router-dom";

class Past extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Past Events</h1>
                <br></br>
                <h3><Link to="/gallery2019">Sir Syed Day Mushaira 2019</Link></h3>
                <h3><Link to="/gallery2018">Sir Syed Day Mushaira 2018</Link></h3>
                <h3><Link to="/gallery2017">Sir Syed Day Mushaira 2017</Link></h3>
            </React.Fragment>
        )
    }
}
export default Past;