import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Crypto, CryptoCoin, CryptoHistory, Exchanges } from "../types";

const cryptoApiHeaders = {
  'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
  endpoints: (builder) => ({
    getCryptos: builder.query<Crypto, number>({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query<{ data: { coin: CryptoCoin }}, string>({
      query: (id) => createRequest(`/coin/${id}`),
    }),

    getCryptoHistory: builder.query<CryptoHistory, { coinId: string, timeperiod: string}>({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
    }),

    // Note: To access this endpoint you need premium plan
    getExchanges: builder.query<Exchanges, void>({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;