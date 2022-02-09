import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function SongDetails() {
  const [song, setSong] = useState([]);
  let { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${URL}/songs/${id}`).then((response) => {
      setSong(response.data);
    });
  }, []);

  const handleDelete = () => {
    axios.delete(`${URL}/songs/${id}`).then(() => navigate("/songs"));
  };
  //comment something
  return (
    <div className="songDetail">
      <div>
        <p>{song.name}</p>
        <p>{song.artist}</p>
        <p>{song.album}</p>
        <p>{song.time}</p>
        <p>{song.is_favorite ? <span>❤️</span> : null}</p>
      </div>
      <div className="songDetailButtons">
        <Link to={`/songs/${song.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to={`/songs`}>
          <button>Back</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
export default SongDetails;
