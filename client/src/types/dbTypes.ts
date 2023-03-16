export type DbGameType = {
  id: number;
  cover: string;
  date: string;
  genres: string;
  name: string;
  rating: number;
  apiGameId: number;
  summaru: string;
  Offers: DBOfferType[];
};
export type DBOfferType = {
  id: number;
  price: string;
  time: string;
  payId: number;
  sellerId: number;
  platformId: number;
  Platform: DbPlatformType;
  gameId: number;
  Game?: DbGameType;
  User: User;
};
export type DbPlatformType = {
  id: number;
  name: string;
};

export type User = {
  email: string;
  username: string;
  pass: string;
  roleId: unknown;
  confirmPass: string;
};

export type ImagesType = {
  [key: string]: string;
  PS5: string;
  PS4: string;
  PC: string;
  XONE: string;
}