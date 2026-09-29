import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
    {
        id: 1,
        name: "Aloe Vera",
        price: 15,
        category: "Succulents",
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
    },
    {
        id: 2,
        name: "Jade Plant",
        price: 18,
        category: "Succulents",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
    },
    {
        id: 3,
        name: "Echeveria",
        price: 20,
        category: "Succulents",
        image: "https://images.unsplash.com/photo-1520302630591-fd1c66a1d3c0"
    },
    {
        id: 4,
        name: "Haworthia",
        price: 17,
        category: "Succulents",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411"
    },
    {
        id: 5,
        name: "String of Pearls",
        price: 22,
        category: "Succulents",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
    },
    {
        id: 6,
        name: "Zebra Haworthia",
        price: 19,
        category: "Succulents",
        image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
    },
    {
        id: 7,
        name: "Monstera",
        price: 30,
        category: "Tropical",
        image: "https://images.unsplash.com/photo-1614594573460-4d2b7a7f1f14"
    },
    {
        id: 8,
        name: "Bird of Paradise",
        price: 35,
        category: "Tropical",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
    },
    {
        id: 9,
        name: "Calathea",
        price: 28,
        category: "Tropical",
        image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683"
    },
    {
        id: 10,
        name: "Philodendron",
        price: 27,
        category: "Tropical",
        image: "https://images.unsplash.com/photo-1545165375-6b9f3e4f7b2a"
    },
    {
        id: 11,
        name: "Peace Lily",
        price: 25,
        category: "Tropical",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
    },
    {
        id: 12,
        name: "Croton",
        price: 24,
        category: "Tropical",
        image: "https://images.unsplash.com/photo-1597055181300-d9f4b8a1d7c7"
    },
    {
        id: 13,
        name: "Snake Plant",
        price: 23,
        category: "Indoor Plants",
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae2c9b"
    },
    {
        id: 14,
        name: "Spider Plant",
        price: 16,
        category: "Indoor Plants",
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333"
    },
    {
        id: 15,
        name: "Rubber Plant",
        price: 26,
        category: "Indoor Plants",
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
    },
    {
        id: 16,
        name: "ZZ Plant",
        price: 29,
        category: "Indoor Plants",
        image: "https://images.unsplash.com/photo-1632207691146-3e2c8b2c5a0f"
    },
    {
        id: 17,
        name: "Boston Fern",
        price: 21,
        category: "Indoor Plants",
        image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85"
    },
    {
        id: 18,
        name: "Chinese Evergreen",
        price: 31,
        category: "Indoor Plants",
        image: "https://images.unsplash.com/photo-1597055181300-d9f4b8a1d7c7"
    }
];

function ProductList() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const categories = [...new Set(plants.map(plant => plant.category))];

    const isInCart = id => cart.some(item => item.id === id);

    return (
        <div>
            <nav>
                <a href="/">Home</a>
                <a href="#plants">Plants</a>
                <a href="/cart">Cart 🛒 ({cart.reduce((total, item) => total + item.quantity, 0)})</a>
            </nav>

            <h1 id="plants">Paradise Nursery Plants</h1>

            {categories.map(category => (
                <section key={category}>
                    <h2>{category}</h2>
                    <div>
                        {plants
                            .filter(plant => plant.category === category)
                            .map(plant => (
                                <div key={plant.id}>
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                        width="180"
                                        height="180"
                                    />
                                    <h3>{plant.name}</h3>
                                    <p>${plant.price}</p>
                                    <button
                                        onClick={() => dispatch(addToCart(plant))}
                                        disabled={isInCart(plant.id)}
                                    >
                                        {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                                    </button>
                                </div>
                            ))}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default ProductList;