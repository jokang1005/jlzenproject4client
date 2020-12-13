import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const New = (props) => {
    // const{studentProfile} = props
    const [formData, setFormData] = React.useState(props.emptyProfile)

    console.log(props)

    const handleSubmit = (event) => {
        event.preventDefult()
        props.handleSubmit(formData)
        props.history.push("/home")
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return(
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="student_id">
                <Form.Label>Student ID</Form.Label>
                <Form.Control value={formData.student_id} name="student_id" placeholder="Enter student ID" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="name">
                <Form.Label>Student Name</Form.Label>
                <Form.Control name="name" value={formData.name} placeholder="Enter name" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="address">
                <Form.Label>Student Address</Form.Label>
                <Form.Control name="address" value={formData.address} placeholder="Enter address" onChange={handleChange}/>
            </Form.Group>
            <Button variant="secondary" type="submit">
                 {props.label}
            </Button>
        </Form>
        </>
    )
}

export default New;