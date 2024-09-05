"use server";

export const fetchProducts = async () => {
  const MockProductItem = {
    promise: Promise.resolve(
      new Response(
        JSON.stringify([
          {
            id: 1,
            name: "Wireless Headphones",
            description:
              "High-quality wireless headphones with noise cancellation",
            price: 99.99,
            image: "/images/product/headphone-1.jpg",
            category: "Electronics",
            rating: 4.5,
          },
          {
            id: 2,
            name: "Leather Backpack",
            description: "Durable and stylish leather backpack",
            price: 79.99,
            image: "/images/product/backpack.jpg",
            category: "Bags",
            rating: 4.2,
          },
          {
            id: 3,
            name: "Outdoor Camping Gear",
            description: "Essential gear for your next outdoor adventure",
            price: 149.99,
            image: "/images/product/game-pc.jpg",
            category: "Outdoor",
            rating: 4.8,
          },
          {
            id: 4,
            name: "Ergonomic Office Chair",
            description: "Comfortable and supportive office chair",
            price: 199.99,
            image: "/images/product/office-chair.jpg",
            category: "Furniture",
            rating: 3,
          },
          {
            id: 5,
            name: "Smart Home Hub",
            description: "Centralize your smart home devices",
            price: 59.99,
            image: "/images/product/smart-home.jpg",
            category: "Electronics",
            rating: 2.3,
          },
          {
            id: 6,
            name: "Fitness Tracker",
            description: "Monitor your daily activity and health",
            price: 49.99,
            image: "/images/product/fitness-2.jpg",
            category: "Health",
            rating: 2.7,
          },
        ])
      )
    ),
  };
  const res = await MockProductItem.promise;
  const products = await res.json();

  return {
    success: true,
    data: products,
  };
};
