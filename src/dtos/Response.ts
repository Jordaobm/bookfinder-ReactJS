export interface ResponseAPIGoogleBooksItem {
    id:string;
    volumeInfo: {
        title: string;
        authors?: [];
        publishedDate: string;
        description: string;
        categories?: [];
        imageLinks?: {
            smallThumbnail: string;
            thumbnail: string
        }
        previewLink: string;
        infoLink: string;

    }
    favorite: boolean;
}


export interface ResponseAPIGoogleBooks {
    totalItems: number;
    items: ResponseAPIGoogleBooksItem[]
}