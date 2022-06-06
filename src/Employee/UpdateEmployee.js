import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddEmployee.css'
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import api from '../api'

const UpdateEmployee = (props) => {

    const navigate = useNavigate();
    const { empid } = useParams();

    const initialEmployeeState = {
      employeeId : "",
      firstName : "",
      lastName : "",
      published: false
    };

    const [currentEmployee, setCurrentEmployee] = useState(initialEmployeeState);

    const getEmployee = empid => {
        api.Employee().fetchById(empid)
          .then(response => {
            setCurrentEmployee(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

    
    useEffect(() => {
    if (empid)
        getEmployee(empid);
    }, [empid]);


    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentEmployee({ ...currentEmployee, [name]: value });
      };

    const saveUpdatedEmployee = () => {
        const obj = {  
            EmployeeId:currentEmployee.employeeId,  
            FirstName: currentEmployee.firstName,  
            LastName: currentEmployee.lastName  
          };

          api.Employee().update(obj.EmployeeId, obj)
          .then(json => {  
            if(json.status=='204'){  
              console.log(json.data.Status);  
              alert("Data Updated Successfully");  
              navigate('/Employees');
            }  
            else{  
                alert('Data update failed');  
                navigate('/Employees'); 
            }  
            });
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
                <Input type="text" name="firstName" onChange={handleInputChange} value={currentEmployee.firstName} placeholder="Enter Employee First Name" />  
              </Col>  
            </FormGroup>
            <FormGroup row>  
              <Label for="lastName" sm={2}>Employee Last Name</Label>  
              <Col sm={10}>  
                <Input type="text" name="lastName" onChange={handleInputChange} value={currentEmployee.lastName} placeholder="Enter Employee Last Name" />  
              </Col>  
            </FormGroup>                       
          </Col>  
          <Col>  
            <FormGroup row>  
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={saveUpdatedEmployee} className="btn btn-success">Submit</button>  
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

export default UpdateEmployee;
