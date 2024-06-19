import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Logon from './pages/Logon';
import Menu from './pages/Menu';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/logon' Component={Logon} />
        <Route path='/cardapio' Component={Menu} />
        <Route path='/about' Component={About} />
      </Routes>
    </Router>
  );
}

export default App;
