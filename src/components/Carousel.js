import React from 'react';
import { IosArrowRight } from '@styled-icons/fluentui-system-regular/IosArrowRight';
import styled from 'styled-components';

function Carousel() {
  return (
    <>
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
    </>
  );
}

export default Carousel;

const DetailCard = styled.div`
  position: absolute;
  width: 330px;
  height: 145px;
  background-color: white;
  border-radius: 4px;
  left: 210px;
  bottom: 30px;
`;

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
`;

const FrontCourse = styled.div`
  margin: 0 20px;
  height: 44px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.64;
`;

const Developer = styled.div`
  margin: 20px 20px 0 20px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
`;

const FrontImage = styled.img`
  display: block;
  margin: 25px auto;
  border-radius: 4px;
`;

const MainCard = styled.article`
  position: relative;
`;
