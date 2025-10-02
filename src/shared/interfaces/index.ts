export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
}

export interface Product {
    id: string;
    name: string;
    slug: string;
    category: string;
    price: number;
    images: string[];
    rating_average: number;
    rating_count: number;
}