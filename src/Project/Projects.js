import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom'; 
import Table from './ProjectTable';  
import api from '../api'
import { Col, FormGroup, Label, Button} from 'reactstrap';
import Select from 'react-select'


const Projects = (props) => {

    const selectCompanyOptions = {
        companyId : "",
        name : ""
    };

    const companyIdForSearchState = {
      companyId : "",
    };

    const [companyIdForSearch, setcompanyIdForSearch] = useState(companyIdForSearchState);
    const [currentList, setCurrentList] = useState([]);
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

    const tabRow = () => {
      return currentList.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }

    const handleCompanyChange = (e) => {
      setcompanyIdForSearch({ ...companyIdForSearch, ["companyId"]: e.companyId });
    };

    const searchProjectsClicked = () => {

      if(companyIdForSearch.companyId)
      {
        api.Project().fetchForCompany(companyIdForSearch.companyId).then(response => 
          {
            setCurrentList(response.data);
          }).catch(e => { console.log(e);});
      }

    };

    return (        
      <div>
          <div>
            <Link to={'/CreateProject'} className="nav-link">Add Project</Link>  
          </div>
          <div>
          <FormGroup row>  
            <Label for="companyId" sm={2}>Company Name</Label>  
            <Col sm={10}>  
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
              <Button color="primary" onClick={searchProjectsClicked}>Search</Button>         
        </div>        
        <h4 align="center">Project List</h4>  
        <table className="table table-striped" style={{ marginTop: 10 }}>  
          <thead>  
            <tr>  
              <th>Company Name</th>  
              <th>Project Name</th>  
              <th colSpan="4">Action</th>  
            </tr>  
          </thead>  
          <tbody>  
            { tabRow() }   
          </tbody>  
        </table>  
      </div>  
    );  
}

export default Projects