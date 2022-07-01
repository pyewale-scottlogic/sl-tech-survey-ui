import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import api from '../api'
import Select from 'react-select'
import ProjectOwnersView from '../ProjectOwner/ProjectOwnersView';

    const UpdateProject = (props) => {

    const navigate = useNavigate();
    const {projectFromList} = useLocation().state;
    
    const { projectId } = useParams();    
    
    const initialProjectState = {
      projectId : "",
      projectName : "",
      companyId : "",
      companyName : "",
      kimbleUrl:"",
      projectOwners:[]
    };

    const selectCompanyOptions = {
        companyId : "",
        name : ""
    };

    const [currentProject, setCurrentProject] = useState(initialProjectState);
    const [companies, setCompanies] = useState(selectCompanyOptions);

        
    useEffect(() => {
    if (projectId)
        getCompanies();
        setCurrentProject(projectFromList);
    }, [projectId]);

    const getCompanies = () => {
        api.Company().fetchAll().then(response => 
            {                
               setCompanies(response.data);
            }).catch(e => { console.log(e);});        
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentProject({ ...currentProject, [name]: value });
      };

    const saveUpdatedProject = () => {
        const obj = {  
            ProjectId:currentProject.projectId,  
            ProjectName: currentProject.projectName,
            KimbleUrl: currentProject.kimbleUrl
          };

          api.Project().update(currentProject.companyId, obj)
          .then(Response => {  
            if(Response.status =='204'){  
              console.log(Response.status);  
                alert("Data updated Successfully");  
                navigate('/Projects');
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
      navigate('/Projects');            
    };

    return(
        <Container className="App">  
        <h4 className="PageHeading">Edit Project</h4>  
        <Form className="form">  
          <Col>
          <FormGroup row>  
              <Label for="companyId" sm={2}>Company Name</Label>  
              <Col sm={10}>  
                <Select 
                    name="companyId"
                    value={{name : currentProject.companyName, companyId:currentProject.companyId}}
                    options={companies}
                    getOptionLabel={(companies) => companies['name']}
                    getOptionValue={(companies) => companies['companyId']}
                    isDisabled     
                />
              </Col>                
            </FormGroup>
            <FormGroup row>  
              <Label for="projectName" sm={2}>Project Name</Label>  
              <Col sm={10}>  
                <Input type="text" name="projectName" onChange={handleInputChange} value={currentProject.projectName} placeholder="Enter Project Name" />  
              </Col>  
            </FormGroup>
            <FormGroup row>  
              <Label for="kimbleUrl" sm={2}>Kimble Url</Label>  
              <Col sm={10}>  
                <Input type="text" name="kimbleUrl" onChange={handleInputChange} value={currentProject.kimbleUrl} placeholder="Enter Kimble Url" />  
              </Col>  
            </FormGroup>
            <FormGroup>
                <ProjectOwnersView owners={projectFromList.projectOwners}/>                
            </FormGroup>  
          </Col>          
          <Col>  
            <FormGroup row>  
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={saveUpdatedProject} className="btn btn-success">Submit</button>  
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

export default UpdateProject;
