import type { Category, Product } from "../interfaces";

export const categories: Category[] = [
    {
        id: "cat1",
        name: "Men",
        slug: "men",
        description: "Clothing and accessories for men"
    },
    {
        id: "cat2",
        name: "Women",
        slug: "women",
        description: "Clothing and accessories for women"
    },
    {
        id: "cat3",
        name: "Kids",
        slug: "kids",
        description: "Clothing and accessories for kids"
    }
];

export const products: Product[] = [
    {
        id: "prod1",
        name: "Men's Classic Leather Sneakers",
        slug: "mens-classic-leather-sneakers",
        price: 89.99,
        images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5"],
        rating_average: 4.5,
        rating_count: 120,
        category: "cat1"
    },
    {
        id: "prod2",
        name: "Men's Running Shoes",
        slug: "mens-running-shoes",
        price: 120.00,
        images: ["https://images.unsplash.com/photo-1556906781-9a412961c28c"],
        rating_average: 4.7,
        rating_count: 85,
        category: "cat1"
    },
    {
        id: "prod3",
        name: "Men's Formal Dress Shoes",
        slug: "mens-formal-dress-shoes",
        price: 150.00,
        images: ["https://images.unsplash.com/photo-1614252235316-8c857d38b5f4"],
        rating_average: 4.3,
        rating_count: 60,
        category: "cat1"
    },
    {
        id: "prod4",
        name: "Women's High-Top Sneakers",
        slug: "womens-high-top-sneakers",
        price: 95.00,
        images: ["https://images.unsplash.com/photo-1597045566677-8cf032ed4674"],
        rating_average: 4.6,
        rating_count: 95,
        category: "cat2"
    },
    {
        id: "prod5",
        name: "Women's Casual Slip-Ons",
        slug: "womens-casual-slip-ons",
        price: 75.00,
        images: ["https://images.unsplash.com/photo-1561861422-a549073e547a"],
        rating_average: 4.4,
        rating_count: 110,
        category: "cat2"
    },
    {
        id: "prod6",
        name: "Women's Stiletto Heels",
        slug: "womens-stiletto-heels",
        price: 130.00,
        images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2"],
        rating_average: 4.2,
        rating_count: 70,
        category: "cat2"
    },
    {
        id: "prod7",
        name: "Kids' Light-Up Sneakers",
        slug: "kids-light-up-sneakers",
        price: 55.00,
        images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd18f8f8"],
        rating_average: 4.8,
        rating_count: 150,
        category: "cat3"
    },
    {
        id: "prod8",
        name: "Kids' Velcro Sports Shoes",
        slug: "kids-velcro-sports-shoes",
        price: 45.00,
        images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c"],
        rating_average: 4.5,
        rating_count: 80,
        category: "cat3"
    },
    {
        id: "prod9",
        name: "Kids' Canvas Sneakers",
        slug: "kids-canvas-sneakers",
        price: 40.00,
        images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa"],
        rating_average: 4.3,
        rating_count: 65,
        category: "cat3"
    },
    {
        id: "prod10",
        name: "Women's Athletic Trainers",
        slug: "womens-athletic-trainers",
        price: 110.00,
        images: ["https://images.unsplash.com/photo-1514989940723-e8e51635b782"],
        rating_average: 4.6,
        rating_count: 90,
        category: "cat2"
    }
];