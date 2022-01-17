import React from 'react';
import { IosArrowRight } from '@styled-icons/fluentui-system-regular/IosArrowRight';
import styled from 'styled-components';

function CarouselCard() {
  return (
    <MainCard>
      <FrontImage alt="pre onbording course" src="image/frontend.png" />
      <DetailCard>
        <Developer>개발자 되고싶은 분들!?</Developer>
        <FrontCourse>프론트엔드 무료 교육과정 참여하기</FrontCourse>
        <Line />
        <GoToApply>
          바로가기
          <ArrowIcon />
        </GoToApply>
      </DetailCard>
    </MainCard>
  );
}

export default CarouselCard;

const ArrowIcon = styled(IosArrowRight)`
  vertical-align: top;
  width: 13px;
  color: #36f;
`;

const Line = styled.div`
  display: block;
  height: 1px;
  margin: 0;
  background-color: #ececec;
`;

const GoToApply = styled.a`
  display: block;
  margin: 18px 0 0 20px;
  font-size: 14px;
  font-weight: 500;
  color: #36f;
  cursor: pointer;
  @media only screen and (max-width: 1200px) {
    margin: 15px 0 0 0;
    height: 15px;
    font-weight: 700;
  }
`;

const FrontCourse = styled.div`
  margin: 0 20px;
  height: 44px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.64;
  @media only screen and (max-width: 1200px) {
    margin-top: 0;
    height: 15px;
    font-size: 13px;
    color: #666;
  }
`;

const Developer = styled.div`
  margin: 20px 20px 0 20px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  @media only screen and (max-width: 1200px) {
    margin-top: 15px;
    font-size: 18px;
  }
`;

const DetailCard = styled.div`
  position: absolute;
  display: block;
  width: 333px;
  height: 148px;
  background-color: white;
  border-radius: 4px;
  left: 25px;
  bottom: 30px;
  @media only screen and (max-width: 1200px) {
    display: flex;
    position: inherit;
    flex-direction: column;
    align-items: center;
  }
`;

const FrontImage = styled.img`
  display: block;
  margin: 25px auto;
  width: 100%;
  border-radius: 4px;
  @media only screen and (max-width: 1200px) {
    height: 190px;
    margin: 20px auto 0 auto;
    width: 90%;
  }
  @media only screen and (max-width: 800px) {
    width: 87%;
  }
  @media only screen and (max-width: 600px) {
    width: 87%;
  }
`;

const MainCard = styled.div`
  position: relative;
  width: 1060px;
  margin: 0 auto;
  @media only screen and (max-width: 1200px) {
    display: flex;
    position: inherit;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
