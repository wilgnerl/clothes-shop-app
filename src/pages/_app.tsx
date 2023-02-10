import { globalStyles } from '@/styles/global'
import logoImg from "../assets/logo.svg"
import { Button, Container, Header } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { CartContextProvider } from '@/context/CartContext'
import { useState } from 'react'
import { Handbag } from 'phosphor-react'
import { Cart } from '@/components/Cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [showCart, setShowCart] = useState(false);
  function handlePopUpCart() {
    setShowCart((state) => !state);
  };
  
  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />

          <Button onClick={handlePopUpCart}>
            <div>
              <Handbag size={24} weight="bold" />
            </div>
          </Button>

          <Cart show={showCart} handleCart={handlePopUpCart} />
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
