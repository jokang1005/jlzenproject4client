import React from 'react'
import Header from '../components/Header'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Cards from '../components/Cards'
import { PopoverTitle } from 'react-bootstrap'

const Home = (props) => {
    const {profiles} = props

    return (
        <div>
            <h1>Student Profiles</h1>
            <div>
                {profiles.map((profile) => {
                    <div>
                        <h2>Student ID: {profile.student_id}</h2>
                        <h2>Student Name: {profile.name}</h2>
                        <h3>Student Address: {profile.address}</h3>
                        
                    </div>
                }
                )}       
            </div>
                
        </div>
    )
}

export default Home;