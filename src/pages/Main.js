import React from 'react';
import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import styled from 'styled-components';

function Main() {
  return (
    <MainPage>
      <Nav />
      <Carousel />
    </MainPage>
  );
}

export default Main;

const MainPage = styled.div``;
