import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './Components/Home';
import Calculator from './Components/Calculator';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Calculator} /> 
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
