import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonInfo from './PokemonInfo';
import { animateScroll as scroll } from 'react-scroll';

function App() {
  const [tableData, setTableData] = useState([]);
  const [displayBack, setDisplayBack] = useState(false);

  useEffect(() => {
    scroll.scrollToTop();
    const axios = require('axios');
    axios
      .get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then(function (response) {
        // handle success
        setTableData(response.data.pokemon);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const scrollToTable = () => {
    scroll.scrollToBottom();
    setTimeout(() => {
      setDisplayBack(true);
    }, 500);
  };
  const scrollTop = () => {
    scroll.scrollToTop();
    setDisplayBack(false);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>React App showing Pokemon Info</p>

        {displayBack === true ? (
          <a className='below link' onClick={scrollTop}>
            Go Back
          </a>
        ) : (
          <a className='link' onClick={scrollToTable}>
            Show Pokemons
          </a>
        )}
      </header>
      <PokemonInfo data={tableData} id='pokemon' />
    </div>
  );
}

export default App;
