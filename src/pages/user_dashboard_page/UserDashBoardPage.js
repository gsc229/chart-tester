import React, {useEffect} from 'react'
//import { connect } from 'react-redux'
import LayoutOne from '../../layouts/layout_one/LayoutOne'
import Container from 'react-bootstrap/Container'
import NivoPie from '../NivoPie/NivoPie'
import {userRoutines} from '../../data/userRoutines'

export const UserDashBoard = ({user,userRoutines}) => {
  
  return (
    <LayoutOne showTop={false}>
      <Container 
      className='page dashboard-page'>
        <h1>User Dashboard</h1>
        <NivoPie />
        {/* <div className='raw-data' >
          <pre style={{color: 'white'}}>{JSON.stringify(user, null, 2)}</pre>
          <pre style={{color: 'white'}}>{JSON.stringify(userRoutines, null, 2)}</pre>
        </div> */}
      </Container>
    </LayoutOne>
  )
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  userRoutines: state.routineReducer.userRoutines
})

const mapDispatchToProps = {

}
export default UserDashBoard
//export default connect(mapStateToProps, mapDispatchToProps)(UserDashBoard)
