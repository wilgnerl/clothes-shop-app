import { CartContext } from "@/context/CartContext";
import { ImageContainer, ProductContainer } from "@/styles/components/cart";
import { useContext } from "react";
import Image from 'next/image';

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

export function Product({ id, name, imageUrl, price }: ProductProps){
  const { removeFromCart } = useContext(CartContext);
  
  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };
  
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={imageUrl} height={94.79} width={94.79} alt={name} />
      </ImageContainer>
      
      <div>
        <h5>{name}</h5>
        <strong>{price}</strong>
        <button 
          onClick={handleRemoveFromCart}
        >Remover</button>
      </div>
    </ProductContainer>
  );
  };