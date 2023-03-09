export type GameType = {
  id: number;
  cover: CoverType;
  first_release_date?: number;
  genres: GenreType[];
  name: string;
  platforms: number[];
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
