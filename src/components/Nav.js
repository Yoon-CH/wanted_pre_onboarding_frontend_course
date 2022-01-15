import React from 'react';
import SearchIcon from './SearchIcon';
import NoticeIcon from './NoticeIcon';
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
            <CategoryName>커뮤니티</CategoryName>
            <CategoryName>AI 합격예측</CategoryName>
          </Category>
        </CenterNavBar>
        <RightNavBar>
          <SearchIcon />
          <NoticeIcon />
          <div>아이콘</div>
          <div>기업서비스</div>
        </RightNavBar>
      </NavBar>
    </>
  );
}

export default Nav;

const RightNavBar = styled.div`
  display: flex;
`;

const CategoryName = styled.li`
  padding: 15px;
  color: #333333;
  font-size: 15px;
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
  font-size: 25px;
  font-weight: bolder;
  text-align: center;
`;

const Logo = styled.img`
  display: block;
  margin: auto;
  width: 15px;
  height: 15px;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 190px;
  border: solid 1px #e5e5e5;
`;
