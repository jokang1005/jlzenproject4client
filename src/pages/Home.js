import React from 'react'
import Header from '../components/Header'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Cards from '../components/Cards'
import { PopoverTitle } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const Home = (props) => {
    const {studentProfile} = props

    
    const loaded = () => (
        <>
        <h1>Student Profiles</h1>
        <Link to={'/home/new'}><button>Add New Student</button></Link>
          {studentProfile.map((profile) => {
            return (
                <>
                <Card>
                    <Card.Header>{profile.student_id}</Card.Header>
                    <Card.Body>
                        <Card.Title>{profile.name}</Card.Title>
                        <Card.Text>
                        {profile.address}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary" onClick={() => {
                        props.history.push(`/home/${profile.id}`)
                    }}>See Details</Button>
                    <Button variant="secondary" onClick={() => {
                        props.history.push(`/home/edit/${profile.id}`)
                    }}>Edit</Button>
                    <Button variant="danger" onClick={async () => {
  //             //Make delete request
                        await fetch(`https://jlzenproject4api.herokuapp.com/student_profiles/home/${profile.id}`,
                        {method: "DELETE"})
                        
                        props.history.push(`/home`)
                        }}>Delete</Button>
                </Card>
              </>
            );
          })}
        </>
      );
      return(
      loaded()
      )
}

export default Home;