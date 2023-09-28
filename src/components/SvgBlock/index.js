import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
const Rb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: relative;
  /* z-index: 10; */
  svg {
    width: 100%;
    height: auto;
  }
  @media only Screen and (max-width: 48em) {
    display: none;
  }
`;

const SvgBlock = ({ svg }) => {
  return (
    <Rb id="svgBlock">
      <img src={logo} alt="wildfire logo" />
    </Rb>
  );
};

export default SvgBlock;
