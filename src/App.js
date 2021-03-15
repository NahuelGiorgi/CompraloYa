import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

const App = () => (
    <div className= "App">
      <NavBar />
      <ItemListContainer greeting = {'Esto es un titulo!'} />
    </div>
  );
export default App;
