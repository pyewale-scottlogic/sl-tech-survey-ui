import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import api from '../api'
import ProjectOwnerComponent from '../Components/ProjectOwnerComponent';
import CompanyProject from '../Components/CompanyProject';

const UpdateProjectOwner = () => {

    const navigate = useNavigate();
    const {projectOwnerFromList} = useLocation().state;
    const { projectOwnerId } = useParams();

    const localCompanyProject = React.createRef();
    const localAccountOwner = React.createRef();
 
    const projectOwnerState = {
        projectOwnerId     
    };

    const [currentProjectOwner, setCurrentProjectOwner] = useState(projectOwnerState);

    useEffect(() => {
        if (projectOwnerId)
        setCurrentProjectOwner(projectOwnerFromList);
        }, [projectOwnerId]);

    const onCancel = () => {
    navigate('/ProjectOwners');            
    };
    

    const updateProjectOwner = () => {

        const currentCompanyProject = localCompanyProject.current;
        const currentAccountOwner = localAccountOwner.current;      

        api.ProjectOwner().update(currentProjectOwner.projectId,
          {
            ProjectId : currentProjectOwner.projectId,
            ProjectOwnerId:currentProjectOwner.projectOwnerId,
            TechLeadId:currentAccountOwner.state.selectedTechLeadId,
            AccountOwnerId:currentAccountOwner.state.selectedOwnerId,
            FromDate:currentAccountOwner.state.selectedFromDate
            
          })          
        .then(json => {  
         if(json.status=='204'){  
           console.log(json.data.Status);  
             alert("Data updated Successfully");  
             navigate('/ProjectOwners');
           }  
           else
           {  
               alert('Data update failed');  
               navigate('/ProjectOwners');
           }  
         })  
    };    

     return(
        <Container className="App">  
        <h4 className="PageHeading">Enter Project Owner Information</h4>  
        <Form className="form">  
          <Col>            
            <FormGroup>
                <ProjectOwnerComponent ref={localAccountOwner} ownerToEdit={projectOwnerFromList}/>                
            </FormGroup>   
          </Col>  
          <Col>  
            <FormGroup row>  
              <Col sm={5}>
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={updateProjectOwner} className="btn btn-success">Submit</button>  
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

export default UpdateProjectOwner;