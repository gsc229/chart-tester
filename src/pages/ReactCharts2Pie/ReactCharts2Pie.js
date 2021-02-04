import React from 'react'
import LayoutOne from '../../layouts/layout_one/LayoutOne'
import { Pie } from '@reactchartjs/react-chart.js'
import randomColor from 'randomcolor'
import { userExSets, exerciseIdExSets, exerciseIdName, exerciseNameId } from '../../data/userExerciseData'

const ReactCharts2Pie = () => {

  const newData = {
    labels: Object.keys(exerciseNameId).sort((a, b) => a - b),
    datasets: [{
      label: 'Exercise Breakdown',
      data: Object.keys(exerciseNameId).sort((a, b) => a - b).map(nameKey => exerciseIdExSets[exerciseNameId[nameKey]].length),
      backgroundColor: Object.keys(exerciseNameId).map( name => randomColor({luminosity: 'dark', format: 'rgba', alpha: 0.5})),
      borderColor: Object.keys(exerciseNameId).map( name => randomColor({luminosity: 'dark', format: 'rgba', alpha: 0.5}))
      
    }],
    borderWidth: 1
  }



  return (
    
    <LayoutOne>
      <h3>React Charts 2 Pie</h3>
      <Pie data={newData} />
    </LayoutOne>
  )
}

export default ReactCharts2Pie
