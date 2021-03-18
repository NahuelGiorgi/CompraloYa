import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import mockdb from "./mockdb.json";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockdb);
      }, 1000);
    }).then((resultado) => setItems(resultado));
  });

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer items={items} greeting="There are no items yet" />
    </div>
  );
}
export default App;


