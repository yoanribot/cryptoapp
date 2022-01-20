export type Crypto = {
  data: {
    stats: {
      total: string,
      totalExchanges: string,
      totalMarketCap: string,
      total24hVolume: string,
      totalMarkets: string,
    },
    coins: CryptoCoin[],
  }
};

export type CryptoCoin = {
  uuid: string,
  name: string,
  rank: number,
  iconUrl: string,
  price: number,
  marketCap: number,
  change: number,
};
