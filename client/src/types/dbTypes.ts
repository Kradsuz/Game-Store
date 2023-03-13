export type DbGameType = {
    id:number
    cover: string,
    date: string,
    genres: string,
    name: string,
    rating: number,
    apiGameId: number,
    summaru: string,
}
export type DBOfferType = {
    price: string
    time: string
    payId: number
    sellerId: number
    platformId: number
    gameId: number
}