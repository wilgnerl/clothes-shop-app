import { ProductType } from "@/context/CartContext";

export enum ActionTypes{
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

export function addToCartAction(product: ProductType){
	return {
		type: ActionTypes.ADD_TO_CART,
		payload: {
      product
    }
	};
}

export function removeFromCartAction(id: string){
	return {
		type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id
    }
	};
}