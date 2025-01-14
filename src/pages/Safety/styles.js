import { styled } from '@mui/material/styles';
import loginBackground from '../../assets/loginBackground2.svg';
import Separate from '../../assets/LineLogIn.svg';
import SeparateMobile from '../../assets/LineLineLogInMobile.svg';

import { Link } from 'react-router-dom';

import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

export const StyledLogInContainer = styled('section')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  background: `url(${loginBackground})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledLogInWrapper = styled('section')(({ theme }) => ({
  width: '90%',
  maxWidth: '1200px',
  height: '49em',
  position: 'relative',
  background: 'rgba(8, 52, 100, 0.5)',
  backdropFilter: 'blur(5px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '28px',
  [theme.breakpoints.up('lg')]: {
    width: '70%',
    height: '43em',
  },
}));

export const StyledLogInContent = styled('section')(({ theme }) => ({
  width: '95%',
  // height: '60vh',
  color: 'white',
  h1: {
    margin: '0 0 25px 20px ',
    color: 'white',
    fontSize: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '80%',
    h1: {
      margin: '0 0 35px 0 ',
      color: 'white',
      fontSize: '45px',
    },
  },
}));

export const UserDataWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: '40em',
  display: 'flex',
  flexDirection: 'column',
  h1: {
    margin: '0',
    color: 'white',
    fontSize: '45px',
  },
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    height: '28.5em',
  },
}));

export const SocialLogIn = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  button: {
    display: 'flex',
    alignItems: 'center',
    // background: '#4E6BFF',
    background: '#2A3676',
    color: 'white',
    padding: '12px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  h1: {
    margin: '0',
    color: 'white',
    fontSize: '45px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%',
    alignItems: 'unset',
    button: {
      display: 'flex',
      alignItems: 'center',
      padding: '18px',
      fontSize: '16px',
      fontWeight: '600',
    },
  },
}));

export const StyledSeparate = styled('div')(({ theme }) => ({
  background: `url(${Separate})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '60px',
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}));

export const StyledSeparateMobile = styled('div')(({ theme }) => ({
  background: `url(${SeparateMobile})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%',
  display: 'block',
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

export const StyledDefaultLogIn = styled('div')(({ theme }) => ({
  marginLeft: 0,
  width: '85%',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  button: {
    width: '100%',
    color: 'white',
    padding: '13px',
    borderRadius: '6px',
    background: '#48CC74',
    fontSize: '16px',
    fontWeight: '600',
    transition: '.3s',
    '&: hover': {
      background: '#288c44',
      cursor: 'pointer',
    },
  },
  [theme.breakpoints.up('lg')]: {
    width: '35%',
    marginLeft: '5em',
    button: {
      width: '100%',
    },
  },
}));

export const SingleInput = styled('div')(({ theme }) => ({
  marginBottom: '20px',
  p: {
    margin: '0 0 2px 0',
    fontSize: '15px',
    fontWeight: '600',
  },
  input: {
    padding: '13px',
    fontSize: '16px',
    width: '100%',
    borderRadius: '6px',
  },
}));

export const StyledButtons = styled('div')(({ theme }) => ({
  width: '85%',
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
}));

export const StyledLinkForgotPassword = styled(Link)(({ theme }) => ({
  display: 'flex',
  marginTop: '10px',
  padding: '5px',
  color: '#5DC8EF',
  fontSize: '16px',
  textDecoration: 'none',
  transition: '.2s',
  '&:hover': {
    color: '#0097e6',
  },
}));

export const StyledLinkRegister = styled(Link)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  marginTop: '10px',
  padding: '5px',
  color: '#5DC8EF',
  fontSize: '16px',
  textDecoration: 'none',
  transition: '.2s',
  '&:hover': {
    color: '#0097e6',
  },
}));

const StyledMediaIcons = {
  fontSize: '27px',
  margin: '0 15px 0 25px',
};

export const StyledFcGoogle = styled(FcGoogle)(({ theme }) => ({
  ...StyledMediaIcons,
}));

export const StyledBsFacebook = styled(BsFacebook)(({ theme }) => ({
  ...StyledMediaIcons,
  color: 'rgba(24, 172, 254, 1)',
}));

export const StyledBsGithub = styled(BsGithub)(({ theme }) => ({
  ...StyledMediaIcons,
  color: '#000000',
}));

export const StyledLinkPrevent = styled(Link)(({ theme }) => ({
  color: '#fff',
  marginBottom: '-20px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  letterSpacing: '1px',
  fontWeight: '600',
  fontSize: '15px',
  p: {
    margin: 0,
    padding: 0,
    marginLeft: '10px',
  },
  '&:hover': {
    color: '#5cc5ec',
  },
}));
