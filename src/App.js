import React from 'react';
import './App.scss';
 import {Route, BrowserRouter as Router} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'


function App() {
  return (
    <Router>
      <div className="App">
      {/* mobile layout */}
      <Route path="/src/pages/Home.js" component={Home} />
      <Route path="/src/pages/About.js" component={About} />
    </div>
    </Router>
    
  );
}

export default App;
