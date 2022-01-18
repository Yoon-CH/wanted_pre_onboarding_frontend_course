import React from 'react';
import CarouselCard from './CarouselCard';
import { ChevronCompactLeft } from '@styled-icons/bootstrap/ChevronCompactLeft';
import { ChevronCompactRight } from '@styled-icons/bootstrap/ChevronCompactRight';
import styled from 'styled-components';

const Carousel = ({ carouselList }) => {
  const [currentLoopIndex, setCurrentLoopIndex] = React.useState(0);
  const [isFlowing, setIsFlowing] = React.useState(true);
  const autoFlow = 3000;

  const size = React.useMemo(() => carouselList.length, [carouselList]);

  const getStaticIndex = React.useCallback(
    loopIndex => {
      let rest = loopIndex % size;
      if (rest < 0) {
        rest += size;
      }
      return rest;
    },
    [size]
  );

  React.useLayoutEffect(() => {
    let intervalId;
    if (isFlowing) {
      intervalId = setInterval(() => {
        setCurrentLoopIndex(currentLoopIndex + 1);
      }, autoFlow);
    }
    return () => clearTimeout(intervalId);
  }, [isFlowing, setCurrentLoopIndex, currentLoopIndex]);

  return (
    <>
      <Container
        onMouseOver={() => setIsFlowing(false)}
        onMouseOut={() => setIsFlowing(true)}
      >
        <CarouselWrapper size={size} currentLoopIndex={currentLoopIndex}>
          <CarouselList currentLoopIndex={currentLoopIndex}>
            {Array(size * 2 + 1)
              .fill(1)
              .map((_, index) => {
                const loopIndexToShow = currentLoopIndex + index - size;
                return {
                  staticIndex: getStaticIndex(loopIndexToShow),
                  loopIndexToShow,
                };
              })
              .map(({ staticIndex, loopIndexToShow }, index) => (
                <CarouselCardBox key={loopIndexToShow}>
                  <CarouselCard cardInfo={carouselList[staticIndex]} />
                </CarouselCardBox>
              ))}
          </CarouselList>
        </CarouselWrapper>

        <CarouselButtonGroup>
          <button
            onClick={() => setCurrentLoopIndex(currentLoopIndex - 1)}
            aria-label="Go to Previous"
          >
            <LeftArrow />
          </button>
          <button
            onClick={() => setCurrentLoopIndex(currentLoopIndex + 1)}
            aria-label="Go to Next"
          >
            <RightArrow />
          </button>
        </CarouselButtonGroup>
      </Container>
    </>
  );
};

export default Carousel;

const LeftArrow = styled(ChevronCompactLeft)``;

const RightArrow = styled(ChevronCompactRight)``;

const Container = styled.article`
  position: relative;
  margin: 0 auto;
  height: 400px;
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  transform: ${props =>
    `translateX(${-100 * props.size - 100 * props.currentLoopIndex}vw)`};
  transition: 0.2s;
  height: 100%;
`;

const CarouselList = styled.div`
  transform: ${props => `translateX(${props.currentLoopIndex * 100}vw)`};
  display: inline-flex;
  height: 100%;
`;

const CarouselCardBox = styled.div`
  width: 100vw;
  height: 100%;
  img {
    object-fit: cover;
  }
`;

const CarouselButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 70px;
  bottom: 30px;
  width: 90%;
  height: 100%;
  @media only screen and (max-width: 1200px) {
    display: none;
  }

  button {
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;
    width: 32px;
    color: #919cbd;
  }
`;
