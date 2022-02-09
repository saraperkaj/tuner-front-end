function Song({ song }) {
  return (
    <div>
      {song.name} {song.artist} {song.album} {song.time}
    </div>
  );
}
export default Song;
