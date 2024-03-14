import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="App">
      <h1>My Bakery</h1>

      {bakeryData.map((item, index) => (
        <BakeryItem key={index} item={item} addToCart={() => addToCart(item)} />
      ))}

      <div>
        <h2>Cart</h2>
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}
        <p>Total: ${calculateTotalPrice()}</p>
      </div>
    </div>
  );
}

export default App;
