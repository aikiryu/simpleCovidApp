import React from "react";
import styled from "styled-components";

// const Card = (data) => <h4>{data}</h4>;
const Section = styled.div`
  width: calc(50% - 40px);
  padding: 20px 10px;
  margin-bottom: 30px;
  text-align: center;
`;
const Tit = styled.h3`
  margin-bottom: 10px;
`;

const Current = styled.span`
  color: #ff4d4d;
  font-weight: bold;
`;

const TitLine = styled.div`
  display: flex;
  margin-bottom: 2px;
  justify-content: center;
`;

const SmallTit = styled.h4`
  margin-right: 15px;
  text-decoration: underline;
`;

class Card extends React.Component {
  render() {
    return (
      <>
        <Section>
          <img
            src={`https://www.countryflags.io/${this.props.code}/flat/64.png`}
          />
          <Tit>{this.props.name}</Tit>
          <TitLine>
            <SmallTit>Confirmed</SmallTit>
            <Current>{this.props.newCon}</Current> /{" "}
            <span>{this.props.totalCon}</span>
          </TitLine>

          <TitLine>
            <SmallTit>Deth</SmallTit>
            <Current>{this.props.newDeth}</Current> /{" "}
            <span>{this.props.totalCon}</span>
          </TitLine>

          <TitLine>
            <SmallTit>Recovered</SmallTit>
            <Current>{this.props.newRecv}</Current> /{" "}
            <span>{this.props.totalRecv}</span>
          </TitLine>
        </Section>
      </>
    );
  }
}
export default Card;
