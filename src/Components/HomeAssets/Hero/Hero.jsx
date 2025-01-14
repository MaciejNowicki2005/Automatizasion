import React from 'react';
import {
  StyledHeroContainer,
  StyledHeroWrapper,
  StyledButtons,
  StyledHeroContent,
  StyledLink,
  StyledButton,
  StyledHeroBox,
  StyledImages,
  StyledImageWave,
} from './styles';

import { Link } from 'react-router-dom';

const Hero = () => {
  const handleClick = () => {
    const scrolledY = window.scrollY + 580;
    window.scrollTo({
      top: scrolledY,
      behavior: 'smooth', // Użyj smooth, aby uzyskać płynne przejście
    });
  };

  return (
    <StyledHeroContainer>
      <StyledHeroWrapper>
        <StyledHeroBox>
          <StyledImages></StyledImages>
          <StyledHeroContent>
            <h1>Imagine a place...</h1>
            <h3>
              ...Where Technology Meets Community. Create, Learn and Community
              Automate Home and School! Together, we inspire innovation and
              develop skills to create a smart, automated environment around us.
            </h3>
            <StyledButtons>
              <StyledLink to='/HomeDashboard'>Dashboard</StyledLink>
              <StyledButton onClick={handleClick}>Learn more</StyledButton>
            </StyledButtons>
          </StyledHeroContent>
          <StyledImageWave></StyledImageWave>
        </StyledHeroBox>
      </StyledHeroWrapper>
    </StyledHeroContainer>
  );
};

export default Hero;
