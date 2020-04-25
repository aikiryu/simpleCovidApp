import React from "react";
import styled from "styled-components";
const Tit = styled.h1`
  font-size: 30px;
  align-items: center;
  line-height: 50px;
`;
const Head = styled.header`
  background-color: #333;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
`;

const MenuBtn = styled.button`
  background-color: transparent;
  border: 0;
  outline-color: red;
`;
const MenuLine = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  background-color: #eee;
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;
function Header() {
  return (
    <>
      <Head>
        <Tit>COVID 19</Tit>
        <MenuBtn>
          <MenuLine></MenuLine>
          <MenuLine></MenuLine>
          <MenuLine></MenuLine>
        </MenuBtn>
      </Head>
    </>
  );
}

export default Header;
