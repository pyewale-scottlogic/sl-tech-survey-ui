import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddEmployee.css'
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import api from '../api'

const CreateEmployee = () => {

    const navigate = useNavigate();

   

    const initialEmployeeState = {
      firstName : "",
      lastName : "",
      published: false
    };

    const [employee, setEmployee] = useState(initialEmployeeState);
    const [submitted, setSubmitted] = useState(false);
    const [validate, setValidate] = useState({
      firstName: '',
      lastName: '',
    })

    const validateField = (name, value) => {
      const nameRex =/^[a-z ,.'-]+$/i   // Valid for surnames like "O'Reilly King-Luther Jr."
      if (nameRex.test(value)) {
        setValidate ( {...validate, [name] : 'valid'})
      } else {
        setValidate ( {...validate, [name] : 'invalid'})
      }
    }
    const validation  = (name, result) => {
      return validate[name] === result
    }
    const handleInputChange = event => {
        const { name, value } = event.target;
        validateField(name, value)
        setEmployee({ ...employee, [name]: value });
      };    

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
                  valid={validation("firstName", "valid")}
                  invalid={validation("firstName", "invalid")}
                  />  
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
                  valid={validation("lastName", "valid")}
                  invalid={validation("lastName", "invalid")} />  
              </Col>  
            </FormGroup>                       
          </Col>  
          <Col>  
            <FormGroup row>  
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={saveNewEmployee} className="btn btn-success">Submit</button>  
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