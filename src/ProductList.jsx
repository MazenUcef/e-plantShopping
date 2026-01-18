import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plantsArray = [
  {
    category: "Aromatic Plants",
    plants: [
      { id: 1, name: "Lavender", price: 10, image: "https://via.placeholder.com/100" },
      { id: 2, name: "Rosemary", price: 9, image: "https://via.placeholder.com/100" },
      { id: 3, name: "Jasmine", price: 11, image: "https://via.placeholder.com/100" },
      { id: 4, name: "Thyme", price: 8, image: "https://via.placeholder.com/100" },
      { id: 5, name: "Basil", price: 7, image: "https://via.placeholder.com/100" },
      { id: 6, name: "Oregano", price: 6, image: "https://via.placeholder.com/100" },
    ],
  },
  {
    category: "Medicinal Plants",
    plants: [
      { id: 7, name: "Aloe Vera", price: 12, image: "https://via.placeholder.com/100" },
      { id: 8, name: "Mint", price: 8, image: "https://via.placeholder.com/100" },
      { id: 9, name: "Neem", price: 14, image: "https://via.placeholder.com/100" },
      { id: 10, name: "Tulsi", price: 10, image: "https://via.placeholder.com/100" },
      { id: 11, name: "Chamomile", price: 9, image: "https://via.placeholder.com/100" },
      { id: 12, name: "Echinacea", price: 13, image: "https://via.placeholder.com/100" },
    ],
  },
  {
    category: "Indoor Plants",
    plants: [
      { id: 13, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" },
      { id: 14, name: "Peace Lily", price: 14, image: "https://via.placeholder.com/100" },
      { id: 15, name: "Spider Plant", price: 11, image: "https://via.placeholder.com/100" },
      { id: 16, name: "Rubber Plant", price: 18, image: "https://via.placeholder.com/100" },
      { id: 17, name: "ZZ Plant", price: 16, image: "https://via.placeholder.com/100" },
      { id: 18, name: "Areca Palm", price: 20, image: "https://via.placeholder.com/100" },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [addedToCart, setAddedToCart] = useState({});

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true,
    }));
  };

  return (
    <div>
      <Navbar cartCount={totalQuantity} />

      {plantsArray.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>

          <div className="products">
            {category.plants.map((plant) => (
              <div key={plant.id} className="card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name]
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
