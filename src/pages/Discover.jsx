import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { genres } from './../assets/constants';
import { useGetTopChartsQuery } from "../redux/services/shazamCore";


const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data, isFetching, error } = useGetTopChartsQuery()
    const genreTitle = 'Pop';

    if (isFetching) return <Loader title="Loading song..." />

    if (error) return <Error />

    return (
        <div className="flex flex-col">
            <div className="flex w-full justify-between items-center flex-col sm:flex-row">
                <h2 className="text-white text-3xl  font-bold text-left">Discover {genreTitle}</h2>
                <select
                    onChange={() => { }}
                    value=""
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg mt-5 sm:mt-0 outline-none"
                >
                    {genres.map((genre, i) => {
                        return (
                            <option key={genre.value} value={genre.value}>{genre.title}</option>
                        )
                    })}
                </select>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-8">
                {data?.map((song, i) => {
                    return (
                        <SongCard
                            key={song.id}
                            song={song}
                            i={i}
                            activeSong={activeSong}
                            isPlaying={isPlaying}
                            data={data}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default Discover;
