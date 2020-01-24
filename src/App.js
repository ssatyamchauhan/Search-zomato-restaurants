import React from 'react';
import Zomato from './Components/zomato';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" component={Zomato} />
    </Router>
  );
}

export default App;
