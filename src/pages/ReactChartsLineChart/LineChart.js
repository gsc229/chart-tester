import React from 'react'
import LayoutOne from '../../layouts/layout_one/LayoutOne'
import { Chart } from "react-charts";
import {userSetGroups, userExSets, exerciseIdExSets, exerciseIdName} from '../../data/userExerciseData'

import useDemoConfig from "./useDemoConfig";
import useLagRadar from "./useLagRadar";
import ResizableBox from "./ResizableBox";

console.log({userSetGroups, userExSets, exerciseIdExSets, exerciseIdName})

const LineChart = () => {

  useLagRadar();

  const { data, randomizeData } = useDemoConfig({
    series: 10,
    dataType: 'linear',
    useR: true
  });

  console.log({data})

  const memoizedData = React.useMemo(
    () => (data)
  )

  const series = React.useMemo(
    () => ({
      showPoints: false,
      type: 'area'
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: "linear",
        position: "bottom",
        // filterTicks: (ticks) =>
        //   ticks.filter((date) => +timeDay.floor(date) === +date),
      },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
      <LayoutOne>
        <h3>React Charts Line Chart</h3>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <ResizableBox>
        <Chart 
        grouping='single'
        data={memoizedData} 
        series={series} 
        axes={axes} 
        tooltip />
      </ResizableBox>
    </LayoutOne>
  )
}

export default LineChart
