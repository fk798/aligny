import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <img src={require("../../components/images/team/tanvir.jpg")}></img>
                <p><b>President</b></p>
                <p>Tanvir Ahmad</p>
            </React.Fragment>
        )
    }
}
export default About;