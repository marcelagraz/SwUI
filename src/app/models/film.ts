export interface Film {
    id: string;
    title: string;
    episode: number;
    director: string;
    releaseDate: Date | undefined
    created: string;
    edited: string;
    concurrencyStamp: string;
    characters: [];
    planets: []
}