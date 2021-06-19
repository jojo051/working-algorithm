import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import Calculator from './components/Calculator';
import Bubble from './components/Bubble';
import PasswordMaker from './components/PasswordMaker';
import Formulaire from './components/Formulaire';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/formulaire" component={Formulaire} /> 
          <Route path="/passwordmaker" component={PasswordMaker} /> 
          <Route path="/bubble" component={Bubble} /> 
          <Route path="/calculator" component={Calculator} /> 
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
