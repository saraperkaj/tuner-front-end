import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

function Songs() {
  const API = process.env.REACT_APP_API_URL;

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get(`${API}/song`).then((response) => setSongs(response.data));
  }, [API]);

  return (
    <div className="Songs">
      {songs.map((song) => {
        return <Song key={song.id} song={song} />;
      })}

      {/* {songs.map((song) => {
        return <div key={song.id}>{song.name}</div>
      })} */}
    </div>
  );
}

export default Songs;
