import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

function Songs() {
  const URL = process.env.REACT_APP_API_URL;
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.
    get(`${URL}/songs`)
    .then((res) =>
    setSongs(res.data))
  })

  return <div className="Songs">
    {songs.map((song, index) => {
      return <Song key={index} song={song} index={index} />
    })}

  </div>
}

export default Songs