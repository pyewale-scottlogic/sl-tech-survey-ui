import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import api from '../api'

const CreatePlatform = () => {

    const navigate = useNavigate();

    const initialPlatformState = {
      name : "",
      published: false
    };

    const [platform, setPlatform] = useState(initialPlatformState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPlatform({ ...platform, [name]: value });
      };

    
      const saveNewPlatform = () => {
        api.Platform().create({Name:platform.name})
        .then(json => {  
         if(json.status=='201'){  
           console.log(json.data.Status);  
             alert("Data Saved Successfully");  
             navigate('/Platforms');
           }  
           else
           {  
               alert('Data not Saved');  
               navigate('/Platforms');
           }  
         })  
     };

     const onCancel = () => {
      navigate('/Platforms');            
    };

     return(
        <Container className="App">  
        <h4 className="PageHeading">Enter Platform Information</h4>  
        <Form className="form">  
          <Col>  
            <FormGroup row>  
              <Label for="name" sm={2}>Platform</Label>  
              <Col sm={10}>  
                <Input type="text" name="name" onChange={handleInputChange} value={platform.name} placeholder="Enter Platform" />  
              </Col>  
            </FormGroup>                                
          </Col>  
          <Col>  
            <FormGroup row>  
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={saveNewPlatform} className="btn btn-success">Submit</button>  
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

export default CreatePlatform;