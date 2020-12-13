import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const Show = (props) => {
    const {studentProfile} = props

    return (
        <>
            <ListGroup>
                <ListGroup.Item>{studentProfile.student_id}</ListGroup.Item>
                <ListGroup.Item>{studentProfile.name}</ListGroup.Item>
                <ListGroup.Item>{studentProfile.address}</ListGroup.Item>
                
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default Show;