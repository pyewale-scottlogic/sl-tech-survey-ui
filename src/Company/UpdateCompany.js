import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import api from '../api'

const UpdateCompany = (props) => {

    const navigate = useNavigate();
    const { companyid } = useParams();

    const initialCompanyState = {
      companyId : "",
      name : "",
      published: false
    };

    const [currentCompany, setCurrentCompany] = useState(initialCompanyState);

    const getCompany = companyid => {
        api.Company().fetchById(companyid)
          .then(response => {
            setCurrentCompany(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

    
    useEffect(() => {
    if (companyid)
        getCompany(companyid);
    }, [companyid]);


    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentCompany({ ...currentCompany, [name]: value });
      };

    const saveUpdatedCompany = () => {
        const obj = {  
            CompanyId:currentCompany.companyId,  
            Name: currentCompany.name
          };

          api.Company().update(obj.CompanyId, obj)
          .then(Response => {  
            if(Response.status =='204'){  
              console.log(Response.status);  
                alert("Data updated Successfully");  
                navigate('/Companies');
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
                <Input type="text" name="name" onChange={handleInputChange} value={currentCompany.name} placeholder="Enter Company Name" />  
              </Col>  
            </FormGroup>                           
          </Col>  
          <Col>  
            <FormGroup row>  
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
                <button type="button" onClick={saveUpdatedCompany} className="btn btn-success">Submit</button>  
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

export default UpdateCompany;
