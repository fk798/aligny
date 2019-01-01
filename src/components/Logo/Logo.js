import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Song from "../Song";
import "./Logo.css";

const logoSize = {
    width: "20%"
}

class Logo extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Link to="/"><img src={logo} alt="logo" style={logoSize}></img></Link>
                    <div style={{float: "right", display: "inline-block"}}>
                        <h2 style={{paddingRight: "50px"}}><i>Aligarh Alumni Association of New York</i></h2>
                        <h4 style={{textAlign: "center"}}>(<i>AAANY</i>)</h4>
                        <h5 style={{textAlign: "center"}} className="it"><i>A Non-Profit 501 (C) (3) Educational and Charitable Organization, Tax ID # 13-4002794</i></h5>
                        <Song />
                    </div>
                </div>
                <br></br>
            </React.Fragment>
        );
    }
}

export default Logo;