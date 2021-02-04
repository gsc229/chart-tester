import logo from './logo.svg';
import './App.scss';
import {Route} from 'react-router-dom'
import Home from './Home'
import LineChart from './pages/ReactChartsLineChart/LineChart'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} /> 
      {/* React Charts */}
      <Route exact path='/react-charts-line' component={LineChart} />
      {/* React Charts - 2  */}
      {/* Biz Charts (Alibaba) */}
      {/* Recharts */}

    </div>
  );
}

export default App;
