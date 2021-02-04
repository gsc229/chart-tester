import logo from './logo.svg';
import './App.scss';
import {Route} from 'react-router-dom'
import Home from './Home'
import LineChart from './pages/ReactChartsLineChart/LineChart'
import ReactCharts2Doughnut from './pages/ReactCharts2Doughnut/ReactCharts2Doughnut'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} /> 
      {/* React Charts */}
      <Route exact path='/react-charts-line' component={LineChart} />
      {/* React Charts - 2  */}
      <Route exact path='/react-charts2-doughnut' component={ReactCharts2Doughnut} />
      {/* Biz Charts (Alibaba) */}
      {/* Recharts */}

    </div>
  );
}

export default App;
