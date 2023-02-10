import { CartContext } from "@/context/CartContext";
import { ButtonClose, BuyButton, CartContainer, Footer, ImageContainer, ProductContainer, ProductsContainer } from "@/styles/components/cart";
import { useContext } from "react";
import { X } from 'phosphor-react'
import { Product } from "./Product";

interface CartProps {
  show: boolean,
  handleCart: () => void,
}

export function Cart({show, handleCart}: CartProps){
  const { cart, buyProduct, total  } = useContext(CartContext);

  function handleCartPopUp(){
    handleCart();
  };

  async function handleBuyProduct() {
    buyProduct();
  }


  return(
     <CartContainer variant={show ? 'show': 'hidden'}>
      <ButtonClose onClick={handleCartPopUp}>
        <X size={24} weight="bold" />
      </ButtonClose>
      <header>
        <h4>Sacola de Compras</h4>
      </header>
      <ProductsContainer>
        {cart.map((product) => (
          <Product  key={product.id} {...product}/>
        ))}
        
      </ProductsContainer>
      <Footer>
        <div>
          <span>Quantidade</span>
          <span>{cart.length} itens</span>
        </div>
        <div>
          <strong>Valor total</strong>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(total)}
          </strong>
        </div>
      </Footer>
      <BuyButton onClick={handleBuyProduct}>
        Finalizar Compra
      </BuyButton>
     </CartContainer>
  )

}