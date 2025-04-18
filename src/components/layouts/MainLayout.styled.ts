import styled from 'styled-components';


export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #e8e8e8;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  color: #333;

  `

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  font-size: 16px;
  color: #333;
  width: 400px;
  padding-left: 12px;
  height: 100vh;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-height: 50vh;
    padding: 12px;
    text-align: start;
  }
`;



export const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;