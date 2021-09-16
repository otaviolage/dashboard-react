import "./product.css";
import { useMemo } from "react";

const Product = (props) => {   

    const parsedTotal = useMemo(()=>{
        return  props.prod.availability.price;
    },[props.prod.availability.price])

    const parcel = (price) => {
        return price / 8
    }

    const handleCart = () => {
        props.setCartQuantity(props.cartQuantity + 1)
        console.log('sanmidpasmdoaspdm,aspQTD', props.cartQuantity)

        console.log(props.prod)
        props.addToCart(props.cart, props.prod)
        console.log(props.cart)
    }

    return (
        <div className='product'>
            
            <div className="box-product">
                <div className="img-product">
                    <img src={props.prod.imageUrl}/>
                </div>
                <div className="name-product">
                    <p>{props.prod.name}</p>
                </div>
                <div className="preco-product">
                    <h4>R$ {parsedTotal},00</h4>
                    <p>8x de R$ {parcel(parsedTotal)} sem juros</p>
                </div>
                <div className="comprar">
                    <button 
                        onClick={
                            () => handleCart()
                        } 
                        className="adicionar">Adicionar à sacola
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product;