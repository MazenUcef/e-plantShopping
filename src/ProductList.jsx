import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantsArray = [
  {
    category: "Aromatic Plants",
    plants: [
      {
        id: 1,
        name: "Lavender",
        price: 10,
        image: "https://via.placeholder.com/100",
      },
      {
        id: 2,
        name: "Rosemary",
        price: 9,
        image: "https://via.placeholder.com/100",
      },
      {
        id: 3,
        name: "Jasmine",
        price: 11,
        image: "https://via.placeholder.com/100",
      },
      {
        id: 4,
        name: "Thyme",
        price: 8,
        image: "https://via.placeholder.com/100",
      },
      {
        id: 5,
        name: "Basil",
        price: 7,
        image: "https://via.placeholder.com/100",
      },
      {
        id: 6,
        name: "Oregano",
        price: 6,
        image: "https://via.placeholder.com/100",
      },
    ],
  },
  {
    category: "Medicinal Plants",
    plants: [
      {
        id: 7,
        name: "Aloe Vera",
        price: 12,
        image: "https://via.placeholder.com/100",
      },
      {
        id: 8,
        name: "Mint",
        price: 8,
        image: "https://via.placeholder.com/100",
      },
      {
        id: 9,
        name: "Neem",
        price: 14,
        image: "https://via.placeholder.com/100",
      },
      {
        id: 10,
        name: "Tulsi",
        price: 10,
        image: "https://via.placeholder.com/100",
      },
      {
        id: 11,
        name: "Chamomile",
        price: 9,
        image: "https://via.placeholder.com/100",
      },
      {
        id: 12,
        name: "Echinacea",
        price: 13,
        image: "https://via.placeholder.com/100",
      },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {plantsArray.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>

          <div className="products">
            {category.plants.map((plant) => (
              <div key={plant.id} className="card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>

                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
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
