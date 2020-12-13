import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const Show = (props) => {
    const {studentProfile} = props
    console.log(props.match.params.id)

    return (
        <>
            <ListGroup>
                <ListGroup.Item>{props.studentProfile[props.match.params.id-8].student_id}</ListGroup.Item>
                <ListGroup.Item>{props.studentProfile[props.match.params.id-8].name}</ListGroup.Item>
                <ListGroup.Item>{props.studentProfile[props.match.params.id-8].address}</ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default Show;