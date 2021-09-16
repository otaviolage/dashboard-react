import "./showcase.css"
import Product from '../../components/product/Product'; 
import data from '../../data/data.json';
import { useEffect, useState } from 'react';
import Topbar from '../../components/topbar/Topbar'
import { Fragment } from 'react';

function Showcase() {
  const [ cart, setCart ] = useState([{}])
  const addToCart = (cart, item) => {
    cart.push(item)
    localStorage.setItem('@solid:cart', JSON.stringify(cart))
  }

  const [ cartQuantity, setCartQuantity ] = useState(0)
  
  useEffect(()=>{
      data.products.forEach((produtos,i) => {
          console.log(data.products[i].name)
          })
  });
  return (
    <Fragment>
      <Topbar subtitle="Compras" cartQuantity={cartQuantity}/>
        <div className="Showcase">
          <div className="body-home">
            {data.products.map((produto,i) => {
              return <Product 
                prod={produto} 
                cart={cart}
                addToCart={addToCart}
                cartQuantity={cartQuantity} 
                setCartQuantity={setCartQuantity} 
              />
            })
            }
            <div className="others"></div>
          </div>
        </div>
    </Fragment>
  );
}

export default Showcase;
