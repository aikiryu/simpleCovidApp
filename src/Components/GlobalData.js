import React from "react";
import styled from "styled-components";

const GlobalBox = styled.div`
  padding: 80px 20px 50px;
  text-align: center;
`;

const Strong = styled.strong`
  margin-right: 10px;
  &:after {
    content: "_";
  }
`;

const TextLine = styled.p`
  margin-bottom: 5px;
`;

class GlobalData extends React.Component {
  state = {};
  render() {
    return (
      <GlobalBox>
        <h2 style={{ marginBottom: 20 + "px" }}>Glabal Data</h2>
        <TextLine>
          <Strong>New Confirmed</Strong>
          {this.props.newCon}
        </TextLine>
        <TextLine>
          <Strong>Total Confirmed</Strong>
          {this.props.totalCon}
        </TextLine>
        <TextLine>
          <Strong>New Death</Strong>
          {this.props.newDeth}
        </TextLine>
        <TextLine>
          <Strong>Total Death</Strong>
          {this.props.totalDeth}
        </TextLine>
        <TextLine>
          <Strong>New Recovered</Strong>
          {this.props.newRecv}
        </TextLine>
        <TextLine>
          <Strong>Total Recovered</Strong>
          {this.props.totalRecv}
        </TextLine>
      </GlobalBox>
    );
  }
}

export default GlobalData;
