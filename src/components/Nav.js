import React from 'react';
import SearchIcon from './SearchIcon';
import NoticeIcon from './NoticeIcon';
import NewTag from './NewTag';
import BetaTag from './BetaTag';
import { DotsThreeHorizontal } from '@styled-icons/entypo/DotsThreeHorizontal';
import styled from 'styled-components';

function Nav() {
  return (
    <NavSection>
      <NavBar>
        <LeftNavBar>
          <Logo alt="list logo" src="image/icon-menu.png" />
          <Wanted>wanted</Wanted>
        </LeftNavBar>
        <CenterNavBar>
          <Category>
            <CategoryNameHide>홈</CategoryNameHide>
            <CategoryNameAlways>채용</CategoryNameAlways>
            <CategoryNameAlways>이벤트</CategoryNameAlways>
            <CategoryName>직군별 연봉</CategoryName>
            <CategoryName>이력서</CategoryName>
            <CategoryTagName>
              커뮤니티
              <NewTag />
            </CategoryTagName>
            <CategoryName>프리랜서</CategoryName>
            <CategoryTagName>
              AI 합격예측
              <BetaTag />
            </CategoryTagName>
          </Category>
        </CenterNavBar>
        <RightNavBar>
          <Icon>
            <SearchIcon />
          </Icon>
          <Icon>
            <NoticeIcon />
          </Icon>
          <Profile alt="profile" src="image/profile.png" />
          <Line />
          <Service>기업 서비스</Service>
          <DotIcon />
        </RightNavBar>
      </NavBar>
    </NavSection>
  );
}

export default Nav;

const RightNavBar = styled.ul`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 990px) {
    display: flex;
  }
`;

const DotIcon = styled(DotsThreeHorizontal)`
  display: none;
  @media only screen and (max-width: 990px) {
    display: block;
    color: #333333;
    width: 14px;
  }
`;

const Profile = styled.img`
  padding: 1px;
  width: 32px;
  border-radius: 50%;
  border: solid 1px #e1e2e3;
  @media only screen and (max-width: 990px) {
    display: none;
  }
`;

const Line = styled.div`
  margin: 0 20px;
  height: 10px;
  border-left: solid 1px #e1e2e3;
  @media only screen and (max-width: 990px) {
    display: none;
  }
`;

const Service = styled.div`
  padding: 8px 12px;
  color: #666666;
  border: solid 1px #e1e2e3;
  border-radius: 25px;
  font-size: 12px;
  @media only screen and (max-width: 990px) {
    display: none;
  }
`;

const Icon = styled.li`
  margin-right: 17px;
  @media only screen and (max-width: 990px) {
    margin-right: 12px;
  }
`;

const CategoryTagName = styled.li`
  position: relative;
  margin: 18px;
  color: #333333;
  font-size: 13px;
  @media only screen and (max-width: 990px) {
    margin: 12px;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 770px) {
    display: none;
  }
`;

const CategoryName = styled.li`
  margin: 18px;
  color: #333333;
  font-size: 13px;
  @media only screen and (max-width: 990px) {
    margin: 12px;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 770px) {
    display: none;
  }
`;

const CategoryNameHide = styled.li`
  display: none;
  @media only screen and (max-width: 770px) {
    display: block;
    color: #333333;
    margin: 12px;
    margin-bottom: 20px;
    font-size: 15px;
  }
`;

const CategoryNameAlways = styled.li`
  margin: 18px;
  color: #333333;
  font-size: 13px;
  @media only screen and (max-width: 990px) {
    margin: 12px;
    margin-bottom: 20px;
    font-size: 15px;
  }
`;

const Category = styled.ul`
  display: flex;
  @media only screen and (max-width: 990px) {
    display: flex;
  }
`;

const CenterNavBar = styled.div``;

const LeftNavBar = styled.div`
  display: flex;
  @media only screen and (max-width: 990px) {
    padding-top: 20px;
    padding-bottom: 17px;
    padding-right: 100%;
  }
`;

const Wanted = styled.div`
  margin-left: 15px;
  color: #333333;
  font-size: 23px;
  font-weight: bolder;
  text-align: center;
`;

const Logo = styled.img`
  display: block;
  margin: auto;
  width: 13px;
  height: 13px;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1260px;
  margin: 0 auto;
  @media only screen and (max-width: 990px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (max-width: 770px) {
    margin: 0 20px;
  }
`;

const NavSection = styled.nav`
  width: 100%;
  border-bottom: solid 1px #e5e5e5;
`;
