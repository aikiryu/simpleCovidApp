import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
`;
const LoadingBox = styled.div`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
`;

const Loading = () => (
  <LoadingContainer>
    <LoadingBox>LOADING . . .</LoadingBox>
  </LoadingContainer>
);

export default Loading;
