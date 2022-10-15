import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const CountryTracks = () => {
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState('')
    const { activeSong, isPlaying } = useSelector((state) => state.player)

    const { data, isFetching, error } = useGetSongsByCountryQuery(country)



    useEffect(() => {
        axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_gaLI8Z1E1APm3goOJJf6SCNzs1P4F')
            .then((res) => setCountry(res.data.location.country))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))

    }, [country])
    if (isFetching && loading) return <Loader title="Loading songs around you. " />
    if (error && loading) return <Error />

    return (
        <div className="flex flex-col">
            <h2 className="text-white text-left mt-4 mb-10 text-3xl font-bold">Around You <span className="font-black">{country}</span></h2>

            <div className="flex flex-wrap">
                {data?.map((song, i) => {
                    return <SongCard
                        key={song.key}
                        song={song}
                        activeSong={activeSong}
                        isPlaying={isPlaying}
                        data={data}
                        i={i}
                    />
                })}

            </div>
        </div>
    )
}


export default CountryTracks;
