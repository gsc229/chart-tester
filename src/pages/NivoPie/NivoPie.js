import React from 'react'
import {ResponsivePie} from '@nivo/pie'
import LayoutOne from '../../layouts/layout_one/LayoutOne'
import randomColor from 'randomcolor'
import Container from 'react-bootstrap/Container'
import {defs} from './defs'
import {fill} from './fill'
import {legends} from './legends'
import {data} from './data'
import {exerciseIdExSetCount, exerciseIdName, userExSets} from '../../data/userExerciseData'
import clampBuilder from '../../utils/clampBuilder' 
/* 
// data
[
  {
    "id": "lisp",
    "label": "lisp",
    "value": 173,
    "color": "hsl(70, 70%, 50%)"
  }
]
*/

/* 
fill
[
  {
      match: {
          id: 'ruby'
      },
      id: 'dots'
  },
]
*/

console.log({exerciseIdExSetCount, exerciseIdName, userExSets})
const NivoPie = () => {

  const exerciseData = Object.keys(exerciseIdExSetCount).map(exId => (
    {
      id: exerciseIdName[exId],
      radialLabel: exerciseIdName[exId],
      label: exerciseIdName[exId], 
      value: exerciseIdExSetCount[exId], 
      color: randomColor({luminosity: 'dark', format: 'rgba', alpha: 0.5})
    }
  ))

  console.log({exerciseData})

  return (
    <LayoutOne>
      <Container 
      className='page dashboard-page'>
        <h3>Your Activity</h3>
        <div 
        style={{height: clampBuilder(400, 1000, 15, 20), minWidth: '300px', margin: '0 auto', border: '1px solid green'}}
        className="breakdown breakdown-exercieses">
          <h5>Exercise Breakdown</h5>
          <ResponsivePie
            data={exerciseData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: 'nivo' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
            radialLabel={'label'}
            radialLabelsSkipAngle={10}
            radialLabelsLinkOffset={-2}
            radialLabelsLinkDiagonalLength={8}
            radialLabelsLinkHorizontalLength={8}
            radialLabelsTextColor={{ from: 'color', modifiers: []}}
            radialLabelsLinkColor={{ from: 'color' }}
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#fff"
            defs={defs}
            fill={fill}
            //legends={legends}
        />
        </div>
      </Container>
  </LayoutOne>
  )
}

export default NivoPie
