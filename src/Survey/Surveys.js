import React, { useState, useEffect  } from 'react';
import Select from 'react-select'
import api from '../api'
import { Col, FormGroup, Label, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import Table from './SurveyTable';  

const Surveys = (props) => {

    // const selectAllProjectOptions = {
    //     projectId : "",
    //     projectName : "",
    //     companyId : "",
    //     companyName : ""
    // }

    const selectCompanyOptions = {
        companyId : "",
        name : ""
    };

    const selectCompanyProjectOptions = {
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
    const [allProjects, setAllProjects] = useState([]);
    const [companyProjects, setCompanyProjects] = useState(selectCompanyProjectOptions);
    const [companyIdForSearch, setcompanyIdForSearch] = useState(companyIdForSearchState);
    const [projectIdForSearch, setProjectIdForSearch] = useState(projectIdForSearchState);
    const [currentList, setCurrentList] = useState([]);
    

    const getAllProjects = () => {
        api.Project().fetchAll().then(response => 
            {                
               setAllProjects(response.data);
            }).catch(e => { console.log(e);});        
      };

    const getCompanies = () => {
        api.Company().fetchAll().then(response => 
            {                
               setCompanies(response.data);
            }).catch(e => { console.log(e);});        
      };

    const getProjectsForCompany = (selectedCompanyId) => {
        if(selectedCompanyId)
        {
            setCompanyProjects(null);
            setCompanyProjects(allProjects.filter( item => item.companyId == selectedCompanyId));
        }
    }

    useEffect(() => {        
        getCompanies();
        getAllProjects();
    }, []);

    const handleCompanyChange = (e) => {
        setcompanyIdForSearch({ ...companyIdForSearch, ["companyId"]: e.companyId });
        getProjectsForCompany(e.companyId);
      };

    const handleProjectChange = (e) => {
        setProjectIdForSearch({ ...projectIdForSearch, ["projectId"]: e.projectId });
    };

    const searchSurveys = () => {
        if(companyIdForSearch.companyId && projectIdForSearch.projectId)
        {
            api.Survey().fetchByProjectId(projectIdForSearch.projectId).then(response => 
            {
                if(response.data.length==0)
                {
                    alert("No data found for selected criteria!");  
                }
                else
                {
                    setCurrentList(response.data);
                }
            }).catch(e => { console.log(e);});
        }
    }

    const tabRow = () => {
        return currentList.map(function(object, i){  
            return <Table obj={object} key={i} />;  
        });  
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
                value={companyProjects.value}
                options={companyProjects}
                getOptionLabel={(companyProjects) => companyProjects['projectName']}
                getOptionValue={(companyProjects) => companyProjects['projectId']}     
            >                    
            </Select>
            </Col>                
        </FormGroup>
            <Button color="primary" onClick={searchSurveys}>Search</Button>
        </div>
        <div>
            <h4 align="center">Survey List</h4>  
            <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
                <tr>  
                <th>Company</th>  
                <th>Project</th>
                <th>Year</th>
                <th>Quarter</th>
                <th>Platforms</th>
                <th>Technologies</th>               
                <th colSpan="2">Actions</th>  
                </tr>  
            </thead>  
            <tbody>  
                { tabRow() }   
            </tbody>  
            </table>  
        </div>
    </div>  
    );
}

export default Surveys