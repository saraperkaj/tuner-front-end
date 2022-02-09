function Song({ song }) {
  return (
    <tr className="song">
      <td>{song.name}</td>
      <td>{song.artist}</td> 
      <td>{song.album}</td>
      <td>{song.time}</td>
    </tr>
  );
}
export default Song;
