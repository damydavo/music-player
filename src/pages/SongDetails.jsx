import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'

import { setActiveSong, playPause } from '../redux/features/playerSlice'
import { useGetRelatedSongQuery, useGetSongDetailsQuery } from '../redux/services/shazamCore'
// import RelatedSongs from './../components/RelatedSongs';

const SongDetails = () => {
    const dispatch = useDispatch()
    const { songid } = useParams()
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid })
    const { data, isFetching: isFetchingRelatedSongs, error } = useGetRelatedSongQuery({ songid })

    if (isFetchingSongDetails || isFetchingRelatedSongs) return <Loader title="Searching song details" />

    if (error) return <Error />;

    const handlePlay = ({ song, i }) => {
        dispatch(setActiveSong({ song, data, i }))
        dispatch(playPause(true))
    }

    const handlePause = () => {
        dispatch(playPause(false))

    }

    return <div className="flex flex-col">
        <DetailsHeader artistId="" songData={songData} />

        <div className="mb-10">
            <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

            <div className="mt-5">
                {songData?.sections[1].type === 'LYRICS' ? songData?.sections[1].text.map((line, i) => {
                    return <p key={line?.key} className="text-gray-400 text-base my-1">{line}</p>
                }) : <p className="text-gray-400 text-base my-1">No lyrics found on the track!</p>}
            </div>
        </div>

        <RelatedSongs
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePlay={handlePlay}
            handlePause={handlePause}
        />
    </div>
}

export default SongDetails;
