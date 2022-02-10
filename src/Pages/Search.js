import React from "react";
import ReactDOM from "react-dom";
import AudioPlayer from "../Components/AudioPlayer";
import tracks from "../db/tracks"

export default function Search () {

    return     <AudioPlayer tracks={tracks} />
}