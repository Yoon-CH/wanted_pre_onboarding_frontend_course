import React from 'react';
import Nav from '../components/Nav';
import Carousel from '../components/Carousel';

function Main() {
  const carouselList = [
    {
      title: '세무회계 테크핀 삼쩜삼',
      detail: '개발자 포함 전 직군 상시 채용 중',
      imageUrl: 'https://static.wanted.co.kr/images/banners/1422/051f7850.jpg',
      link: '',
    },
    {
      title: '두핸즈 개발자 채용',
      detail: '매년 유급 안식월 지원!',
      imageUrl: 'https://static.wanted.co.kr/images/banners/1483/4eea3f16.jpg',
      link: '',
    },
    {
      title: '럭셔리 쇼핑을 발란',
      detail: '전 직군 채용 중!',
      imageUrl: 'https://static.wanted.co.kr/images/banners/1463/b9342037.jpg',
      link: '',
    },
    {
      title: 'No.1 가상자산 플랫폼, 빗썸',
      detail: '블록체인 개발자 등 IT 직군 채용 중!',
      imageUrl: 'https://static.wanted.co.kr/images/banners/1419/560ba36f.jpg',
      link: '',
    },
    {
      title: 'NO1 고기/식자재 플랫폼',
      detail: '개발자 및 전직군 채용중!',
      imageUrl: 'https://static.wanted.co.kr/images/banners/1494/eec5db81.jpg',
      link: '',
    },
    {
      title: '글로벌 뷰티 테크 팜스킨',
      detail: '이커머스 개발 최저 연봉 5천만원!',
      imageUrl: 'https://static.wanted.co.kr/images/banners/1478/3f3a53ef.jpg',
      link: '',
    },
    {
      title: '당신의 진짜 자율이 실현 되는곳',
      detail: 'Node.js Engineer 외, 적극 채용 중',
      imageUrl: 'https://static.wanted.co.kr/images/banners/1482/a0c32036.jpg',
      link: '',
    },
  ];
  return (
    <>
      <Nav />
      <Carousel carouselList={carouselList} />
    </>
  );
}

export default Main;
