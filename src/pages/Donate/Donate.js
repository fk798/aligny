import React, { Component } from "react";
import "./Donate.css";

class Donate extends Component {
    render() {
        return (
            <React.Fragment>
                <h5>Please send your donations through any of the following methods:
                </h5>
                <ul className="browser-default">
                    <li>
                        Call us at <b>(516) 776-0869</b>
                    </li>
                    <li>
                        Checks are payable to <b>AAANY</b>. Please send them to <b>Tanvir Ahmad</b> to the address <b>1289 Sturlane Place, Hewlett, NY 11557</b>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default Donate;