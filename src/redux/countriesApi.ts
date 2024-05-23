import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Country} from '../types/country';

export const countriesApi = createApi({
  reducerPath: 'employeesApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://restcountries.com/v3.1/'}),
  tagTypes: ['Countries'],
  endpoints: build => ({
    getCountries: build.query<Country[], string | void>({
      query: () => `all`,
      providesTags: result =>
        result
          ? [
              ...result.map(({id}) => ({type: 'Countries', id} as const)),
              {type: 'Countries', id: 'LIST'},
            ]
          : [{type: 'Countries', id: 'LIST'}],
    }),
    getOneCountri: build.query<Country[]>({
      query: name => `name/${name}`,
      providesTags: (result, id) => [{type: 'Countries', id}],
    }),
  }),
});

export const {useGetCountriesQuery, useGetOneCountriQuery} = countriesApi;
