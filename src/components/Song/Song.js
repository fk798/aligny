import React, { Component } from "react";
import Sound from "react-sound";
import soundfile from "./tarana.mp3";

class Song extends Component {
    render() {
        return (
            <Sound 
                url = {soundfile}
                playStatus = {Sound.status.PLAYING}
                playFromPosition = {8000}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
             />
        )
    }
}

export default Song;