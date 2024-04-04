import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_BASE_URL,
  }),
  tagTypes: [],
  endpoints: () => ({}),
});

export default apiSlice;
