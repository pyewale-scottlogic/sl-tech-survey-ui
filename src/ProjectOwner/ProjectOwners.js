import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../api'
import { Col, FormGroup, Label, Button, Container} from 'reactstrap';
import CompanyProject from '../Components/CompanyProject';
import Table from './ProjectOwnerTable';  

const ProjectOwners = (props) => {    
    
    const localCompanyProject = React.createRef();   

    const [currentList, setCurrentList] = useState([]);

    const searchProjectOwners = () => {
        const currentCompanyProject = localCompanyProject.current;
        if(currentCompanyProject.state.selectedProjectId)
        {
            api.ProjectOwner().fetchByProjectId(currentCompanyProject.state.selectedProjectId).then(response => 
            {
                setCurrentList(response.data);
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

                <FormGroup>
                    <Link to={'/CreateProjectOwner'} className="nav-link">Add Project Owner</Link> 
                </FormGroup>                

                <div>
                    <FormGroup>
                            <CompanyProject ref={localCompanyProject}/>                
                    </FormGroup>
                    <Button color="primary" onClick={searchProjectOwners}>Search</Button>
                </div>

                <div>
                    <h4 align="center">Project Owners List</h4>  
                    <table className="table table-striped" style={{ marginTop: 10 }}>  
                    <thead>  
                        <tr>  
                        {/* <th>Company</th>  
                        <th>Project</th> */}
                        <th>Account Owner</th>
                        <th>Tech Lead</th>
                        <th>From Date</th>                        
                        <th colSpan="2">Action</th>  
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

export default ProjectOwners;