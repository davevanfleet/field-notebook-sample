import React from 'react';
import './App.css';
import FieldNotebook from './FieldNotebook';
import underSea from './images/underSea.png';

function App() {
  const mainStyle = {
    backgroundImage:`url(${underSea})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    height: '100vh'
  }


  return (
    <div className="App"
         style={mainStyle}>
      <FieldNotebook />
    </div>
  );
}

export default App;
