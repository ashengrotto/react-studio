import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  // make a state variable to hold the data
  const [data, setData] = useState(bakeryData);
  const [cart, setCart] = useState([]);

  // run when this component is first loaded
  const loadData = () => {
    setData(bakeryData);
  }

  useEffect(() => {
    loadData();
  }, [])

  const addToCart = (price) => {
    console.log('adding to cart:', price)

    setCart(prev_cart =>
      [...prev_cart, price])
  }


  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => {
        return <div className="item">
          <BakeryItem 
          key = {index}
          name = {item.name}
          image = {item.image}
          price = {item.price}
          desc = {item.description}
          addToCart={()=> addToCart(item)}
        />
  </div>
      })}


      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {cart && cart.map((item) => {
          return <div className="cartItem">
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
            </div>
        }
        )}
        
        <h3 className="total">Total Price: ${cart.reduce((acc, item) => acc + item.price,0)}</h3>

      </div>
    </div>
  );
}

export default App;
