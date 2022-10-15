import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '8aecc63db0msh08d2b484209b699p1822bfjsnce75f38c5d80');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
        getRelatedSong: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }), 
    })
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetRelatedSongQuery,
} = shazamCoreApi;