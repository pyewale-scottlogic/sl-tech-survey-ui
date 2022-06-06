import React, { useState, useEffect  } from 'react';
import Select from 'react-select'
import api from '../api'
import { Col, FormGroup, Label, Button} from 'reactstrap';
import { Link } from 'react-router-dom'; 

const Surveys = (props) => {

    const selectCompanyOptions = {
        companyId : "",
        name : ""
    };

    const selectProjectOptions = {
        projectId : "",
        projectName : ""
    };

    const companyIdForSearchState = {
        companyId : "",
      };

    const projectIdForSearchState = {
        projectId : "",
    };


    const [companies, setCompanies] = useState(selectCompanyOptions);
    const [projects, setProjects] = useState(selectProjectOptions);
    const [companyIdForSearch, setcompanyIdForSearch] = useState(companyIdForSearchState);
    const [projectIdForSearch, setProjectIdForSearch] = useState(projectIdForSearchState);

    const getCompanies = () => {
        api.Company().fetchAll().then(response => 
            {                
               setCompanies(response.data);
            }).catch(e => { console.log(e);});        
      };

    const getProjectsForCompanies = (selectedCompanyId) => {
        if(selectedCompanyId)
        {
            api.Project().fetchForCompany(selectedCompanyId).then(response => 
            {
                setProjects(response.data);
            }).catch(e => { console.log(e);});
        }
    }

    useEffect(() => {        
        getCompanies();
    }, []);

    const handleCompanyChange = (e) => {
        setcompanyIdForSearch({ ...companyIdForSearch, ["companyId"]: e.companyId });
        getProjectsForCompanies(e.companyId);
      };

    const handleProjectChange = (e) => {
        setcompanyIdForSearch({ ...projectIdForSearch, ["projectId"]: e.projectId });
    };

    const searchSurveys = () => {

    }

    const createSurvey = () => {

    }

    return (        
    <div>
        <div>
            <Link to={'/CreateSurvey'} className="nav-link">Add Survey</Link>  
        </div>
        <div>
        <FormGroup row>  
            <Label for="companyId" sm={2}>Company Name</Label>  
            <Col sm={5}>  
            <Select 
                name="companyId"
                onChange={handleCompanyChange}
                value={companies.value}
                options={companies}
                getOptionLabel={(companies) => companies['name']}
                getOptionValue={(companies) => companies['companyId']}     
            >                    
            </Select>
            </Col>                
        </FormGroup>
        <FormGroup row>  
            <Label for="projectId" sm={2}>Project Name</Label>  
            <Col sm={5}>  
            <Select 
                name="projectId"
                onChange={handleProjectChange}
                value={projects.value}
                options={projects}
                getOptionLabel={(projects) => projects['projectName']}
                getOptionValue={(projects) => projects['projectId']}     
            >                    
            </Select>
            </Col>                
        </FormGroup>

        <Button color="primary" onClick={searchSurveys}>Search</Button>       

        </div>        
    </div>  
    );
}

export default Surveys