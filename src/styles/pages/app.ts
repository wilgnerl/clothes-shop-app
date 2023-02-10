import { styled } from ".."

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  background: '$gray900'
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Button = styled('button', {
  border: 'none',
  background: 'transparent',
  color: '$gray300',
  cursor: 'pointer',

  div:{
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '$gray800',
    borderRadius: 6,
  }
})