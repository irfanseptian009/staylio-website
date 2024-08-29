export interface Image {
    id: string;
    productId: string;
    url: string;
    createdAt: string;
    updatedAt: string;
}

export interface Category {
    id: string;
    hotelId: string;
    bannerId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export interface Hotel {
    id: string;
    hotelId: string;
    categoryId: string;
    name: string;
    price: string;
    longitude: string;
    latitude: string;
    city: string;
    overview: string;
    capacity: string;
    isFeatured: boolean;
    amenities: string;
    createdAt: string;
    updatedAt: string;
    images: Image[];
    category: Category;
}
