import play from "./play.png";
import { Link, useParams } from "react-router-dom";

function Song({ song }) {
  const { id } = useParams();

  return (
    <tr className="song-list">
      <td>
        {" "}
        <Link to={`/songs/${id}`}>
          <img src={play} width="50" alt={play} />
        </Link>
      </td>
      <td className="song">{song.name}</td>
      <td className="song">{song.artist}</td>
      <td className="song">{song.album}</td>
      <td className="song">{song.time}</td>
    </tr>
  );
}
export default Song;
