import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import api from '../api'
import Select from 'react-select'

const CreateProject = () => {

    const navigate = useNavigate();

    const initialProjectState = {
      companyId : "",
      projectName : "",
    };

    const selectCompanyOptions = {
        companyId : "",
        name : ""
    };

    const [project, setProject] = useState(initialProjectState);
    const [companies, setCompanies] = useState(selectCompanyOptions);

    const getCompanies = () => {
        api.Company().fetchAll().then(response => 
            {                
               setCompanies(response.data);
            }).catch(e => { console.log(e);});        
    };

    useEffect(() => {        
            getCompanies();
        }, []);

    
    const handleInputChange = event => {
        const { name, value } = event.target;
        setProject({ ...project, [name]: value });
      };

    const onCancel = () => {
    navigate('/Projects');            
    };

    const handleCompanyChange = (e) => {
      setProject({ ...project, ["companyId"]: e.companyId });
    };

    const saveNewProject = () => {
        api.Project().create(project.companyId, {CompanyId:project.companyId,ProjectName:project.projectName})
        .then(json => {  
         if(json.status=='201'){  
           console.log(json.data.Status);  
             alert("Data Saved Successfully");  
             navigate('/Projects');
           }  
           else
           {  
               alert('Data not Saved');  
               navigate('/Projects');
           }  
         })  
    };    

     return(
        <Container className="App">  
        <h4 className="PageHeading">Enter Project Information</h4>  
        <Form className="form">  
          <Col>  
            <FormGroup row>  
              <Label for="companyId" sm={2}>Company Name</Label>  
              <Col sm={10}>  
                <Select 
                    name="companyId"
                    onChange={handleCompanyChange}
                    value={companies.value}
                    // labelKey={companies.name}
                    // valueKey={companies.companyId}
                    options={companies}
                    getOptionLabel={(companies) => companies['name']}
                    getOptionValue={(companies) => companies['companyId']}     
                >
                    {/* {companies.map((comp) => <option key={comp.companyId} value={comp.name}>{comp.name}</option>)} */}
                </Select>
              </Col>                
            </FormGroup>
            <FormGroup row>  
              <Label for="projectName" sm={2}>Project Name</Label>  
              <Col sm={10}>  
                <Input type="text" name="projectName" onChange={handleInputChange} value={project.projectName} placeholder="Enter Project First Name" />  
              </Col>  
            </FormGroup>                  
          </Col>  
          <Col>  
            <FormGroup row>  
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={saveNewProject} className="btn btn-success">Submit</button>  
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

export default CreateProject;