import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'a8cf03f8eamsh1df642ff84fd611p144470jsn56e1ce3ff281');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
        getRelatedSong: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }), 
        getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }), 
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }), 
    })
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetRelatedSongQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
} = shazamCoreApi;