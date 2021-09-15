import Sidebar from "../../components/sidebar/Sidebar"
import "./showcase.css"
import Product from '../../components/product/Product'; 
import {useCart} from '../../hooks/Cart';
import data from '../../data/data.json';
import { useEffect } from 'react';


function Showcase() {
  const {cart} = useCart();

  useEffect(()=>{
      data.products.forEach((produtos,i) => {
          console.log(data.products[i].name);
          })
  },[cart]);
  return (
    <div className="Showcase">
      <div className="container">
        {data.products.map((produto,i) => {

          return <Product prod={produto}/>
        })}
        <div className="others"></div>
      </div>
    </div>
  );
}

export default Showcase;
