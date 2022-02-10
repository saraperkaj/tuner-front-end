import { ConstructionOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function SongDetails() {
  const [song, setSong] = useState([]);
  let { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL}/songs/${id}`)
      .then((response) => setSong(response.data))
      .catch((error) => console.warn(error));
  }, [id, URL]);

  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`${URL}/songs/${id}`).then(() => navigate("/songs"));
  };

  return (
    <div className="songDetail">
      <tr>
        <td>{song.name}</td>
        <td>{song.artist}</td>
        <td>{song.album}</td>
        <td>{song.time}</td>
        <td>{song.is_favorite ? <span>❤️</span> : null}</td>
      </tr>
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
