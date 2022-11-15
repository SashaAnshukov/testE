import {useState} from 'react';
import Header from '../Header/Header';
import NavBar from '../Navbar/NavBar';
import Benefits from '../Benefits/Benefits';

function App() {



  return (
    <div className="App">
      <Header >
        <NavBar />  
      </Header>
      <Benefits /> 
    </div>
  );
}

export default App;