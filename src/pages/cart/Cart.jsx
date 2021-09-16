import "./cart.css"
import Topbar from '../../components/topbar/Topbar'
import { Fragment } from 'react';
import { Modal } from "@material-ui/core";

function Cart(props) {
  let products = localStorage.getItem('@solid:cart')

  const cleanCart = () => {
    localStorage.setItem('@solid:cart', '')
  }

  const openModal = () => {
    return (
      <Modal>
        Oláaa
      </Modal>
    )
  }

  return (
    <Fragment>
      <Topbar subtitle="Carrinho"/>
        <div className="Cart">
          <div className="body-home">
            {products}
            <div className="others"></div>
            <button 
                onClick={
                    () => cleanCart()
                } 
                className="adicionar">Remover Itens do Carrinho
            </button>
            <button 
                onClick={
                    () => openModal()
                } 
                className="adicionar">Comprar
            </button>
          </div>
        </div>
    </Fragment>
  );
}

export default Cart;
