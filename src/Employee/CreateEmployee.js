import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddEmployee.css'
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import api from '../api'
import { validateName, isFormValid, isError, showError } from '../utils';
import '../styles/Error.css'

const CreateEmployee = () => {

    const navigate = useNavigate();

    const initialEmployeeState = {
      firstName : "",
      lastName : "",
      published: false
    };

    const [employee, setEmployee] = useState(initialEmployeeState);
    
    const [error, setError] = useState({
      firstName: '',
      lastName: '',
    })
  
    const handleInputChange = event => {
        const { name, value } = event.target;
        setError ( {...error, ...validateName(name, value)})
        setEmployee({ ...employee, [name]: value });
      };    
    
    const validateAndAdd = () => {
      if (isFormValid(error, "Company")) {
          saveNewEmployee();
      }
    }
    const saveNewEmployee = () => {
      api.Employee().create({FirstName:employee.firstName,LastName:employee.lastName})
      .then(Response => {  
       if(Response.status =='201'){  
         console.log(Response.status);  
           alert("Data Saved Successfully");  
           navigate('/Employees');
         }
         else if(Response.status=='409')
         {
            alert("Data conflicting with existing records!");               
         }
         else
         {  
             alert('Something went wrong, Data not Saved!');             
         }  
       })  
   };

     const onCancel = () => {
      navigate('/Employees');            
    };

     return(
        <Container className="App">  
        <h4 className="PageHeading">Enter Employee Information</h4>  
        <Form className="form">  
          <Col>  
            <FormGroup row>  
              <Label for="firstName" sm={2}>Employee First Name</Label>  
              <Col sm={10}>  
                <Input 
                  type="text" 
                  name="firstName" 
                  onChange={handleInputChange} 
                  value={employee.firstName} 
                  placeholder="Enter Employee First Name" 
                  valid={! isError(error.firstName)}
                  invalid={ isError(error.firstName)}
                  /> 
                  {showError(error.lastName)}
                 </Col>  
            </FormGroup>
            <FormGroup row>  
              <Label for="lastName" sm={2}>Employee Last Name</Label>  
              <Col sm={10}>  
                <Input 
                  type="text" 
                  name="lastName" 
                  onChange={handleInputChange} 
                  value={employee.lastName} 
                  placeholder="Enter Employee Last Name"
                  valid={ ! isError(error.lastName)}
                  invalid={ isError(error.lastName)} />  
               {showError(error.lastName)}
              </Col>  
              
            </FormGroup>                       
          </Col>  
          <Col>  
            <FormGroup row>  
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={validateAndAdd} className="btn btn-success">Submit</button>  
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

export default CreateEmployee;