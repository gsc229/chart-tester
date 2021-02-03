import logo from './logo.svg';
import './App.scss';
import {Route} from 'react-router-dom'
import Home from './Home'
import LineChart from './pages/LineChart/LineChart'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} /> 
      <Route exact path='/line-chart' component={LineChart} />

    </div>
  );
}

export default App;
