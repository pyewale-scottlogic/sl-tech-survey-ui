import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import api from '../api'
import ProjectOwnerComponent from '../Components/ProjectOwnerComponent';
import CompanyProject from '../Components/CompanyProject';

const CreateProjectOwner = () => {

    const navigate = useNavigate();

    const localCompanyProject = React.createRef();
    const localAccountOwner = React.createRef();
 
    const onCancel = () => {
    navigate('/ProjectOwners');            
    };
    

    const saveNewProjectOwner = () => {

        const currentCompanyProject = localCompanyProject.current;
        const currentAccountOwner = localAccountOwner.current;      

        api.ProjectOwner().create(currentCompanyProject.state.selectedProjectId,
          {
            ProjectId:currentCompanyProject.state.selectedProjectId,
            TechLeadId:currentAccountOwner.state.selectedTechLeadId,
            AccountOwnerId:currentAccountOwner.state.selectedOwnerId,
            FromDate: new Date(currentAccountOwner.state.selectedFromDate).toDateString()
          })          
          .then(Response => {  
            if(Response.status =='201'){  
              console.log(Response.status);  
                alert("Data Saved Successfully");  
                navigate('/ProjectOwners');
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

     return(
        <Container className="App">  
        <h4 className="PageHeading">Enter Project Owner Information</h4>  
        <Form className="form">  
          <Col>
            <FormGroup>
                <CompanyProject ref={localCompanyProject}/>                
            </FormGroup>           
            <FormGroup>
                <ProjectOwnerComponent ref={localAccountOwner}/>                
            </FormGroup>   
          </Col>  
          <Col>  
            <FormGroup row>  
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={saveNewProjectOwner} className="btn btn-success">Submit</button>  
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

export default CreateProjectOwner;