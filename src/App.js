import './App.scss';
import {Route} from 'react-router-dom'
import Home from './Home'
import Dashboard from './pages/user_dashboard_page/UserDashBoardPage'
import LineChart from './pages/ReactChartsLineChart/LineChart'
import ReactCharts2Doughnut from './pages/ReactCharts2Doughnut/ReactCharts2Doughnut'
import ReactCharts2Pie from './pages/ReactCharts2Pie/ReactCharts2Pie.js'
import NivoPie from './pages/NivoPie/NivoPie'
import DataTest from './pages/DataTests/DataTest'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Dashboard} /> 
      {/* React Charts */}
      <Route exact path='/react-charts-line' component={LineChart} />
      {/* React Charts - 2  */}
      <Route exact path='/react-charts2-doughnut' component={ReactCharts2Doughnut} />
      <Route exact path='/react-charts2-pie' component={ReactCharts2Pie} />
      {/* Nivo */}
      <Route exact path='/nivo-pie' component={NivoPie} />
      {/* Biz Charts (Alibaba) */}
      {/* Recharts */}
      {/* Data Test  */}
      <Route exact path='/data-tests' component={DataTest} />
    </div>
  );
}

export default App;
