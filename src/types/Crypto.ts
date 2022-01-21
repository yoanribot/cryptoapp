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
  description: string,
  symbol: string,
  rank: number,
  iconUrl: string,
  price: number,
  marketCap: number,
  change: number,
  volume: number,
  allTimeHigh: { price: number}
  numberOfMarkets: number,
  numberOfExchanges: number,
  supply: { confirmed: boolean, circulating: number, total: number }
  links: { name: string, url: string, type: string }[],
};

export type CryptoHistory = {
  data: {
    history: { price: string, timestamp: number}[],
    change: string,
  }
}
