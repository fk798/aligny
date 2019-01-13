import React, { Component } from "react";
import pdf from "../../../components/images/donate.pdf"

class Magazines extends Component {
    render() {
        return (
            <React.Fragment>
                <iframe src = {pdf + "#toolbar=0"} align="middle" width="100%" height="900px">
                </iframe>
            </React.Fragment>
        );
    }
}

export default Magazines;
