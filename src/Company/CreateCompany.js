import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import api from '../api'

const CreateCompany = () => {

    const navigate = useNavigate();

    const initialCompanyState = {
      name : "",
      published: false
    };

    const [company, setcompany] = useState(initialCompanyState);    

    const handleInputChange = event => {
        const { name, value } = event.target;
        setcompany({ ...company, [name]: value });
      };

    const addCompany = () => {
       api.Company().create({Name:company.name})
       .then(json => {  
        if(json.status=='201'){  
          console.log(json.data.Status);  
            alert("Data Saved Successfully");  
            navigate('/Companies');
          }  
          else
          {  
              alert('Data not Saved');  
              navigate('/Companies');
          }  
        })  
    };

    const onCancel = () => {
      navigate('/Companies');            
    };
    
    return(
      <Container className="App">  
      <h4 className="PageHeading">Enter Company Information</h4>  
      <Form className="form">  
        <Col>  
          <FormGroup row>  
            <Label for="name" sm={2}>Company Name</Label>  
            <Col sm={10}>  
              <Input type="text" name="name" onChange={handleInputChange} value={company.name} placeholder="Enter Company Name" />  
            </Col>  
          </FormGroup>                       
        </Col>  
        <Col>  
          <FormGroup row>  
            <Col sm={5}>  
            </Col>  
            <Col sm={1}>  
            <button type="button" onClick={addCompany} className="btn btn-success">Submit</button>  
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

export default CreateCompany;

