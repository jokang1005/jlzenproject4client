import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const New = (props) => {
    // const{studentProfile} = props
    const [formData, setFormData] = React.useState(props.emptyProfile)

    const handleSubmit = (event) => {
        console.log("handleSubmit is working")
        event.preventDefult()
        props.handleSubmit(formData)
        props.getStudentProfile()
        props.history.push("/home")
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    
    return(
        <div class="new">
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="student_id">
                <Form.Label>Student ID</Form.Label>
                <Form.Control type="text" value={formData.student_id} name="student_id" placeholder="Enter student ID" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="name">
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} placeholder="Enter name" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="address">
                <Form.Label>Student Address</Form.Label>
                <Form.Control type="text" name="address" value={formData.address} placeholder="Enter address" onChange={handleChange}/>
            </Form.Group>
            <Button type="submit" value={props.label}>
            </Button>
        </Form>
        
        </div>
    )
}

export default New;