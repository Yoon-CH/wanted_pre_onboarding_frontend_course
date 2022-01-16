import React from 'react';
import styled from 'styled-components';

function NewTag() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="11"
      viewBox="0 0 18 11"
    >
      <g
        fill="none"
        fill-rule="evenodd"
        font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
        font-size="9"
        font-weight="500"
      >
        <g fill="#36F">
          <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
            <tspan x="0" y="8">
              New
            </tspan>
          </text>
        </g>
      </g>
    </Svg>
  );
}

export default NewTag;

const Svg = styled.svg`
  position: absolute;
  bottom: 8px;
`;
