import React from "react";
import axios from "axios";
import Loading from "./Components/Loading";
import Header from "./Components/Header";
import GlobalData from "./Components/GlobalData";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyle";
import Card from "./Components/Card";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 10px;
`;
class App extends React.Component {
  state = {
    covidData: [],
    isLoading: true,
    worldData: {},
  };

  getData = async () => {
    const covidDatas = await axios.get("https://api.covid19api.com/summary");
    console.log(covidDatas);
    const {
      data: { Countries, Global },
    } = covidDatas;

    this.setState({ covidData: Countries, worldData: Global });
  };

  componentDidMount = () => {
    this.getData();
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  };

  render() {
    const { covidData, worldData } = this.state;

    return (
      <>
        <GlobalStyles />
        <Header />
        <GlobalData
          newCon={worldData.NewConfirmed}
          totalCon={worldData.TotalConfirmed}
          newDeth={worldData.NewDeaths}
          totalDeth={worldData.TotalDeaths}
          newRecv={worldData.NewRecovered}
          totalRecv={worldData.TotalRecovered}
        />
        <Container>
          {this.state.isLoading ? (
            <Loading />
          ) : (
            covidData.map((data, index) => (
              <Card
                name={data.Country}
                key={data.CountryCode}
                code={data.CountryCode}
                newCon={data.NewConfirmed}
                totalCon={data.TotalConfirmed}
                newDeth={data.NewDeaths}
                totalDeth={data.TotalDeaths}
                newRecv={data.NewRecovered}
                totalRecv={data.TotalRecovered}
              />
            ))
          )}
        </Container>
      </>
    );
  }
}

export default App;
