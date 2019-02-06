import React, { Component } from "react";
import { Link } from "react-router-dom";
import Song from "../Song";
import "./Logo.css";

const logoSize = {
    width: "20%"
}

class Logo extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{overflow: "auto", height: "100%", padding: "0"}}>
                    <Link to="/"><img src="https://s3.amazonaws.com/aaany-assets/images/logo.png" alt="logo" style={logoSize}></img></Link>
                    <div style={{float: "right", display: "inline-block", paddingRight: "10px"}}>
                        <h2 style={{textAlign: "center"}}><i>Aligarh Alumni Association of New York</i></h2>
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