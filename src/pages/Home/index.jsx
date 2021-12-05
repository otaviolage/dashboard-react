
import { useEffect } from 'react';
import Product from '../../components/Product'; 
import {useCart} from '../../hooks/Cart';
import Header from '../../components/Header';
import data from '../../data/data.json';
import './style.css';

const Home = ()=>{
    const {cart} = useCart();

    useEffect(()=>{
        data.products.forEach((produtos,i) => {
            // console.log(data.products[i].name);
            })
    },[cart]);
    return(
        <div className="home">
            <Header page='home'/>
            {/* <ConectSe/> */}
            <div className="body-home">
                {data.products.map((produto,i) => {

                return <Product prod={produto}/>
                })}
            </div>
        </div>
    )
};

export default Home