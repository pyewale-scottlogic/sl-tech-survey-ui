import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import api from '../api'

const CreateTechnology = () => {

    const navigate = useNavigate();

    const initialTechnologyState = {
      name : ""     
    };

    const [technology, setTechnology] = useState(initialTechnologyState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setTechnology({ ...technology, [name]: value });
      };

    
      const saveNewTechnology = () => {
        api.Technology().create({Name:technology.name})
        .then(json => {  
         if(json.status=='201'){  
           console.log(json.data.Status);  
             alert("Data Saved Successfully");  
             navigate('/Technologies');
           }  
           else
           {  
               alert('Data not Saved');  
               navigate('/Technologies');
           }  
         })  
     };

     const onCancel = () => {
      navigate('/Technologies');            
    };

     return(
        <Container className="App">  
        <h4 className="PageHeading">Enter Technology Information</h4>  
        <Form className="form">  
          <Col>  
            <FormGroup row>  
              <Label for="name" sm={2}>Technology</Label>  
              <Col sm={10}>  
                <Input type="text" name="name" onChange={handleInputChange} value={technology.name} placeholder="Enter Technology" />  
              </Col>  
            </FormGroup>                                
          </Col>  
          <Col>  
            <FormGroup row>  
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={saveNewTechnology} className="btn btn-success">Submit</button>  
              </Col>  
              <Col sm={1}>  
              <Button type="button" onClick={onCancel} color="danger">Cancel</Button>
              </Col>  
              <Col sm={5}>  
              </Col>  
            </FormGroup>  
          </Col>  
        </Form>  
      </Container>
      );
}

export default CreateTechnology;