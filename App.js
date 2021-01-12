import React from 'react';
import './styles/style.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Menu from './components/Menu';
import Grammatica from './components/Grammatica'
import GrammaticaElement from './components/GrammaticaElement'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Lessico from './components/Lessico';
import Cultura from './components/Cultura';
import CompetenzeLinguistiche from './components/CompetenzeLinguistiche';
import Prove from './components/Prove';

function App() {
  return (
    <Router>
    <div className="App">
     <Navigation />
      <Switch>
      <Route exact path="/"/>
      <Route path="/grammatica" component={Grammatica}/>
      <Route path="/lessico" component={Lessico}/>
      <Route path="/cultura" component={Cultura}/>
      <Route path="/competenze-linguistiche" component={CompetenzeLinguistiche}/>
      <Route path="/prove" component={Prove}/>
      </Switch>
      
    
      
    </div>
    </Router>
  );
}

export default App;
