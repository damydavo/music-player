import SongBar from './SongBar';

const RelatedSongs = ({ data, isPlaying, activeSong, handlePlay, handlePause, artistId }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
    <div className="mt-6 w-full flex flex-col">
      {data.map((song, i) => {
        return <SongBar
          key={`${song.key}-${artistId}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePause={handlePause}
          handlePlayk={handlePlay}
        />
      })}
    </div>
  </div>
);

export default RelatedSongs;
