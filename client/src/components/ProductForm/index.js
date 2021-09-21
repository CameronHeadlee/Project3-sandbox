import React from "react";
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from "react-bootstrap/FormControl";
import Col from 'react-bootstrap/Col';

const styles = {
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold'
    }
}

export default function ProductForm () {
   
    return (
    <>
    <Col sm={3} className="my-1">
    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
        <div style={styles.textStyle}>
        Username
        </div>
    </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Text>@</InputGroup.Text>
        <FormControl id="inlineFormInputGroup" placeholder="Username" />
      </InputGroup>
      </Col>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>
        <div style={styles.textStyle}>
        What do you think of my collection?
        </div>
    </Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
    </>
  )
}