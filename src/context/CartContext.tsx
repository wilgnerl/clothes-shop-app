import { addToCartAction, removeFromCartAction } from "@/reducers/action";
import { productReducer } from "@/reducers/reducer";
import axios from "axios";
import { createContext, ReactNode, useReducer } from "react";

export type ProductType = {
  imageUrl: string;
  name: string;
  price: string;
  id: string;
  description?: string;
  defaultPriceId?: string;
  priceUnformatted?: number
  quantity?: number;
};

interface CartContextProps {
  cart: ProductType[];
  total: number;
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: string) => void;
  buyProduct: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps){
  const [cartState, dispatch] = useReducer(productReducer, {
    cart: [],
    total: 0
  })

  const {cart, total} = cartState

  function addToCart(product: ProductType){
    const { id } = product;

    const productInCart = cart.filter((product: ProductType) => {
      return product.id === id;
    });
    
    if (productInCart.length > 0) {
      return;
    }
    dispatch(addToCartAction(product))
  }

  function removeFromCart(id: string){
    dispatch(removeFromCartAction(id))
  }

  async function buyProduct(){
    const pricesId = cart.map((product: ProductType) => {
      return {
        price: product.defaultPriceId,
        quantity: product.quantity,
      };
    });
    try {

      const response = await axios.post('/api/checkout', {
        pricesId
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return(
    <CartContext.Provider value={{
      cart, 
      total,
      addToCart,
      removeFromCart,
      buyProduct
    }}>
      { children }
    </CartContext.Provider>
  )


}