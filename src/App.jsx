import { useState } from 'react'
import './App.css'
import { BsFillCartFill } from "react-icons/bs";

const Product = ({ index, name, price, image, onToggleCart, isInCart }) => {
  const handleTogglecart = () => {
    onToggleCart(index);
  }
  return (
    <div className='product'>
      <img src={image} alt={name} />
      <br></br>
      <br></br>
      <div><b>{name}</b></div>
      <div>$ {price}</div>
      <br></br>
      <br></br>
      <button className='addbutton' onClick={handleTogglecart}>
        <b>{isInCart ? 'Remove from Cart' : 'Add to Cart'}</b>
      </button>
    </div>
  );
};

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const handleTogglecart = (index) => {
    const isInCart = cartItems.includes(index);
    if(isInCart) {
      setCartCount(cartCount -1);
      setCartItems(cartItems.filter((item) => item !== index));    
    }
    else {
      setCartCount(cartCount +1);
      setCartItems([...cartItems, index]);    
    }
  }
  
  const products = [
    { name: 'Product 1', price: 20, image: 'data:image/jpeg;base64,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' },
    { name: 'Product 2', price: 30, image: 'data:image/jpeg;base64,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' },
    { name: 'Product 3', price: 25, image: 'data:image/jpeg;base64,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' },
    { name: 'Product 4', price: 15, image: 'data:image/jpeg;base64,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' },
    { name: 'Product 5', price: 40, image: 'data:image/jpeg;base64,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' },
    { name: 'Product 6', price: 22, image: 'data:image/jpeg;base64,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' },
    { name: 'Product 7', price: 35, image: 'data:image/jpeg;base64,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' },
    { name: 'Product 8', price: 18, image: 'data:image/jpeg;base64,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' },
  ];

  return (
    <div className='whole'>
        <div className='navdiv'>

        <div className='logo'>Start Bootstrap</div>
        <div className='navtools'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
        </ul>
        </div>
        <div className='cart'>
          <button className='cart-button'>
          <BsFillCartFill/> Cart  {cartCount}
          </button>
        </div>
      </div>

        <div className='head'>
          <div className='head1'>
            <b>Shop in style</b>
          </div>
        </div>
        <br></br>
        <br></br>

      <div className='products'>
        {products.map((product, index) => (
          <Product  
          key={index}
          index={index}
          name={product.name}
          price={product.price}
          image={product.image}
          onToggleCart={() => handleTogglecart(index)}
          isInCart={cartItems.includes(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default App
