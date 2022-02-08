import axios from "axios";
import { useState, useEffect } from "react";

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

  </div>
}

export default Songs