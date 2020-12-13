import React from 'react'
import Header from '../components/Header'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Cards from '../components/Cards'
import { PopoverTitle } from 'react-bootstrap'

const Home = (props) => {
    const {studentProfile} = props

    const loaded = () => (
        <>
              <h1>Student Profiles</h1>
          {studentProfile.map((profile) => {
            return (
                <div>
                <h1>Student ID:{profile.student_id}</h1>
                <h1>Student Name: {profile.name}</h1>
                <h3>Student Address: {profile.address}</h3>
                {/* <button onClick={async () => {
                  //Make delete request
                  await fetch("https://jlzenproject4api.herokuapp.com/student_profiles/" + profile.id, {
                    method: "delete"
                  })
                  //get updated list of student profiles
                  setStudentProfile()
                }}>Delete</button> */}
              </div>
            );
          })}
        </>
      );
      return(
      loaded()
      )
}

export default Home;