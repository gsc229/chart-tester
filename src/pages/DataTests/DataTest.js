import React, {useState} from 'react'
import LayoutOne from '../../layouts/layout_one/LayoutOne'
import { userRoutines } from '../../data/userRoutines'

const DataTest = () => {

  const [show, setShow] = useState({
    routines: true,
    setGroups: true,
    exSets: true
  })
  const [routines, setRoutines] = useState(userRoutines)
  const [setGroups, setSetGroups] = useState(() => {
    const allSetGroups = []
    userRoutines.forEach(routine => allSetGroups.push(...routine.set_groups))
    return allSetGroups
  })
  const [exSets, setExSets] = useState(() => {
    const allSets = []
    userRoutines.forEach(routine => allSets.push(...routine.exercise_sets))
    return allSets
  })


  return (
    <LayoutOne>
      <h1>Data Test</h1>
      <div 
      style={{color: 'white', display: 'flex'}}
      className="data-container">
        {show.routines && 
        <pre style={{color: 'white'}}>
          {JSON.stringify(routines, null, 2)}
        </pre>}
        {show.setGroups && 
        <pre style={{color: 'white'}}>
          {JSON.stringify(setGroups, null, 2)}
        </pre>}
        {show.exSets && 
        <pre style={{color: 'white'}}>
          {JSON.stringify(exSets, null, 2)}
        </pre>}
      </div>
    </LayoutOne>
  )
}

export default DataTest
