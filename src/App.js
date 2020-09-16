import React from 'react';
import './App.css';
import styled from 'styled-components'; // library
import { Buttons, SearchBar } from './styles/elements'; // component
import searchIcon from './svg/search.svg'

const Container = styled.div`
  width: 1280px;
  min-width: 1280px;
  margin: 0 auto;
  .row {
    width: 100%;
    display: flex;
    align-center: center;
  }
`;

const Subhead = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 160px 0 48px;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Subhead>Buttons</Subhead>
        <div className="row">
          <Buttons>Playlist</Buttons>
          <Buttons outline>Playlist</Buttons>
          <Buttons primary>Playlist</Buttons>
          <Buttons seconday>Playlist</Buttons>
        </div>
        <Subhead>Search Bar</Subhead>
        <div className="row">
          <SearchBar square>
            <img src={searchIcon} alt="search icon"/>
            <input type="text" placeholder="hello"/>
          </SearchBar>
        </div>
      </Container>
    </div>
  );
}

export default App;
