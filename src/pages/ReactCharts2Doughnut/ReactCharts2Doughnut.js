import React from 'react'
import LayoutOne from '../../layouts/layout_one/LayoutOne'
import { Doughnut } from '@reactchartjs/react-chart.js'
import randomColor from 'randomcolor'
import { userExSets, exerciseIdExSets, exerciseIdName, exerciseNameId } from '../../data/userExerciseData'

const React2Doughnut = () => {

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

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }




  return (
    <LayoutOne>
      <h3>React 2 Doughnut</h3>
      <div className='header'>
      <h1 className='title'>Doughnut Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/react16/example/src/charts/Doughnut.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Doughnut data={newData} />

    </LayoutOne>
  )
}

export default React2Doughnut
