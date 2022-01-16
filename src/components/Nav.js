import React from 'react';
import SearchIcon from './SearchIcon';
import NoticeIcon from './NoticeIcon';
import NewTag from './NewTag';
import BetaTag from './BetaTag';
import styled from 'styled-components';

function Nav() {
  return (
    <>
      <NavBar>
        <LeftNavBar>
          <Logo alt="list logo" src="image/icon-menu.png" />
          <Wanted>wanted</Wanted>
        </LeftNavBar>
        <CenterNavBar>
          <Category>
            <CategoryName>채용</CategoryName>
            <CategoryName>이벤트</CategoryName>
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
        </RightNavBar>
      </NavBar>
    </>
  );
}

export default Nav;

const RightNavBar = styled.ul`
  display: flex;
  align-items: center;
`;

const Profile = styled.img`
  padding: 1px;
  width: 32px;
  border-radius: 50%;
  border: solid 1px #e1e2e3;
`;

const Line = styled.div`
  margin: 0 20px;
  height: 10px;
  border-left: solid 1px #e1e2e3;
`;

const Service = styled.div`
  padding: 8px 12px;
  color: #666666;
  border: solid 1px #e1e2e3;
  border-radius: 25px;
  font-size: 12px;
`;

const Icon = styled.li`
  margin-right: 17px;
`;

const CategoryTagName = styled.li`
  position: relative;
  margin: 17px;
  color: #333333;
  font-size: 13px;
  font-weight: bold;
`;

const CategoryName = styled.li`
  margin: 17px;
  color: #333333;
  font-size: 13px;
  font-weight: bold;
`;

const Category = styled.ul`
  display: flex;
`;

const CenterNavBar = styled.div``;

const LeftNavBar = styled.div`
  display: flex;
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

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 190px;
  border: solid 1px #e5e5e5;
`;
