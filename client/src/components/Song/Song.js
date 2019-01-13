import React, { Component } from "react";
import { Icon } from "react-materialize";
import soundfile from "./tarana.mp3";

class Song extends Component {

    render() {
        return (
            <div class="row">
                <h5 className="col" style={{color: "darkBlue"}}>Play AMU Tarana <Icon tiny>arrow_forward</Icon></h5>
                <audio controls autoPlay loop className="col">
                    <source src={soundfile} type="audio/mpeg" />
                </audio>
            </div>
        );
    }
}

export default Song;