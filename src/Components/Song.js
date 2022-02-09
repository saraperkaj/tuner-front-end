import play from "./play.png";

function Song({ song }) {
  return (
    <tr className="song-list">
      <td>
        {" "}
        <button>
          <img src={play} width="50" alt={play} />
        </button>
      </td>
      <td className="song">{song.name}</td>
      <td className="song">{song.artist}</td>
      <td className="song">{song.album}</td>
      <td className="song">{song.time}</td>
    </tr>
  );
}
export default Song;
