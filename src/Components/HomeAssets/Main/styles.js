import { styled } from '@mui/material/styles';

// Main.jsx
export const StyledMain = styled('main')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

// /MainItems
export const StyledWrapperItem = styled('section')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '125px 0 125px 0',
  '&:nth-child(2), &:last-child': {
    background: '#e7e7e7',
  },
}));

export const WrapperItem = styled('div')(({ theme }) => ({
  width: '65%',
  display: 'flex',
  justifyContent: 'space-between',
}));

export const StyledAssets = styled('section')(({ theme }) => ({
  width: '45%',
  height: '350px',
  background: 'blue',
  color: 'white',
}));

export const StyledContent = styled('section')(({ theme }) => ({
  width: '45%',
  color: '#1F2224',
  h2: {
    fontSize: '2.4em',
    fontWeight: '800',
    marginTop: '0',
  },
  p: {
    fontSize: '1.2em',
    fontWeight: '600',
  },
}));