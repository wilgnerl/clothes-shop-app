import { styled } from "..";

export const CartContainer = styled("nav", {
  position: 'absolute',
  right: 0,
  top: 0,
  overflow: 'hidden',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',
  height: '100vh',
  maxWidth: 480,
  padding: '1.5rem',

  backgroundColor: '$gray800',

  header: {
    width: '100%',
    fontSize: '$lg',
    lineHeight: 1.6,
    color: '$gray100',
    marginTop: '4.5rem',
    marginLeft: '3rem'
  },

  variants: {
    variant: {
      hidden: {
        zIndex: -1,
      },
      show: {
        zIndex: 1,
      },
    },
  },
})


export const ButtonClose = styled('button', {
  lineHeight: 0,
  cursor: 'pointer',
  background: 'transparent',
  color: '$gray200',
  border: 'none',
  marginRight: 20,
  position: 'relative',
  left: '12.5rem',
})

export const ProductsContainer = styled('div', {
  width: '100%',
  marginTop: 20,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1.875rem',
});

export const ProductContainer = styled('article', {
  display: 'flex',
  width: '100%',
  gap: '1.25rem',
  marginLeft: '3rem',

  div:{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '1rem'
  },

  h5:{
    fontSize: '$md',
    color: '$gray300',
    fontWeight: 400,
  },

  strong:{
    fontSize: '$md',
    display: 'block'
  },

  button:{
    border: 'none',
    background: 'transparent',
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 700,
    width: 65,
    marginTop: '0.5rem',
    cursor: 'pointer'
  }
})

export const Footer = styled('div', {
  marginTop: 'auto',
  width: '100%',
  height: 50,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export const BuyButton = styled('button',{
    fontSize: '$md',
    marginTop: 30,
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.1rem',
    cursor: 'pointer',
    width: '100%',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      transition: '0.5s',
      backgroundColor: '$green300',
    },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 101.94,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',


  img: {
    objectFit: 'cover',
  }
});