import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import Header from './components/Header';
import Houses from './components/Houses';
import Modal from './components/Modal';

import './App.scss';

function App() {
  const [houses, setHouses] = useState([]);
  const [activeHouse, setActiveHouse] = useState(null);
  const [shownHouses, setNumber] = useState(3);

  const handleHouseClick = id => {
    const house = houses.filter(h => h._id === id);
    //console.log(house)
    setActiveHouse(house[0]);
  };

  const handleModalCloseClick = () => {
    setActiveHouse(null);
  };

  const increment = () => {
    setNumber(shownHouses => shownHouses + 3);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3001/api/house');
      setHouses(result.data.data[0]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [shownHouses]);

  const housesAmount = houses.length;
  return (
    <>
      <div className="container">
        <Header title="App that displays some data" />
        <Houses
          houses={houses.slice(0, shownHouses)}
          handleHouseClick={handleHouseClick}
        />
        {shownHouses < housesAmount ? (
          <div
            className="row"
            style={{ positions: 'relative', marginTop: '50px' }}
          >
            <button id="load-more" className="my-button" onClick={increment}>
              Load More
            </button>
          </div>
        ) : null}
      </div>
      {activeHouse ? (
        <>
          <Helmet
            bodyAttributes={{
              class: 'modal-open'
            }}
          />
          <Modal
            house={activeHouse}
            handleModalCloseClick={handleModalCloseClick}
          />
        </>
      ) : null}
    </>
  );
}

export default App;
