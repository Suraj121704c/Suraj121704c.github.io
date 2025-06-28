import styled from "@emotion/styled";
import "./App.css";
// import PortfolioVersion1 from "./Portfolios/PortfolioVersion1";
import PortfolioVersion2 from "./Portfolios/PortfolioVersion2";

function App() {
  return (
    <div className="App">
      {/* <PortfolioVersion1 /> */}
      <PortfolioVersionTwoContainerStyled>
        <PortfolioVersion2 />
      </PortfolioVersionTwoContainerStyled>
    </div>
  );
}

export default App;

const PortfolioVersionTwoContainerStyled = styled.div`
  /* background-color: ghostwhite; */
`;
