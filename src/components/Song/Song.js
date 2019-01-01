import React, { Component } from "react";
import soundfile from "./tarana.mp3";

class Song extends Component {

    render() {
        return (
            <audio controls autoPlay loop>
                <source src={soundfile} type="audio/mpeg" />
            </audio>
        );
    }
}

export default Song;