import { ImageContainer, ImageContent, SuccessContainer } from "@/styles/pages/sucess";
import Link from "next/link";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Head from "next/head";

interface SuccessProps {
  costumerName: string;
  product: {
    name: string;
    imageUrl: string;
  },
  productsImages: string[];
}

export default function Success({ costumerName, product, productsImages }: SuccessProps){
  
  return(
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

      
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
      <h1>Compra efetuada</h1>

      
      <ImageContainer>
        {productsImages.map((image, i) => (
        <ImageContent key={i} >
            <Image src={image} width={120} height={110} alt="" />
        </ImageContent>
        ))}
      </ImageContainer>
      <p>
       Uhuul <strong>{costumerName}</strong>, sua compra de <strong>{`${productsImages.length} Camisetas`}</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
    </>
    
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false, 
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const costumerName = session.customer_details.name;
  const productsImages = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product;
    return product.images[0];
  });

  return {
    props: {
      costumerName,
      productsImages,
    }
  }
}