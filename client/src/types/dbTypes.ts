export type DbGameType = {
  id: number;
  cover: string;
  date: string;
  genres: string;
  name: string;
  rating: number;
  apiGameId: number;
  summaru: string;
  Offers?: DBOfferType[];
};
export type DBOfferType = {
  id: number;
  price: string;
  time: string;
  payId: number;
  sellerId: number;
  platformId: number;
  Platform?: DbPlatformType;
  gameId: number;
  Game?: DbGameType;
};
export type DbPlatformType = {
  id: number;
  name: string;
};
