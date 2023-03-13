export type GameType = {
  id: number;
  cover: CoverType;
  first_release_date?: number;
  genres: GenreType[];
  name: string;
  platforms: PlatformsType[];
  rating?: number;
  summary: string;
};

export type CoverType = {
  id: number;
  image_id: string;
};

export type GenreType = {
  id: number;
  name: string;
};

export type PlatformsType = {
  id: number;
  abbreviation: string;
};

export type OfferType ={
  platform: number;
  price: number;
  conditions: string;
}