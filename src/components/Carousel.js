import React from 'react';
import CarouselCard from './CarouselCard';
import styled from 'styled-components';

function Carousel() {
  return (
    <>
      <CarouselSection>
        <CarouselCard />
      </CarouselSection>
    </>
  );
}

export default Carousel;

const CarouselSection = styled.article``;
