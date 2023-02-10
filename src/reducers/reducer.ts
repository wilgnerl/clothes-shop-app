import { ActionTypes } from "./action";

import { produce } from "immer";
import { ProductType } from "@/context/CartContext";

export interface ProductState {
	cart: ProductType[],
	total: number
}

export function productReducer(state: ProductState, action:any){
  switch(action.type){
    
    case ActionTypes.ADD_TO_CART:
		return produce(state, draft => {
			draft.cart.push(action.payload.product);
      draft.total += Number(action.payload.product.priceDefault) * action.payload.product.quantity
		});

    case ActionTypes.REMOVE_FROM_CART:{
      return produce(state, draft => {

        const newCart = state.cart.filter((product: ProductType) => {
          return product.id !== action.payload.id;
        });
        draft.cart = newCart
      });
    }	
  }
}