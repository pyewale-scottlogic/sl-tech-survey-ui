
import * as React from 'react';  
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'; 
import './App.css';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from "reactstrap"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header  from './Components/Header';
import Summary from './Components/Summary';

import Employees from './Employee/Employees';
import CreateEmployee from './Employee/CreateEmployee';
import UpdateEmployee from './Employee/UpdateEmployee';
import DeleteEmployee from './Employee/DeleteEmployee';

import Companies from './Company/Companies';
import CreateCompany from './Company/CreateCompany';
import UpdateCompany from './Company/UpdateCompany';
import DeleteCompany from './Company/DeleteCompany';

import Platforms from './Platform/Platforms';
import CreatePlatform from './Platform/CreatePlatform';
import UpdatePlatform from './Platform/UpdatePlatform';
import DeletePlatform from './Platform/DeletePlatform';

import Technologies from './Technology/Technologies';
import CreateTechnology from './Technology/CreateTechnology';
import UpdateTechnology from './Technology/UpdateTechnology';
import DeleteTechnology from './Technology/DeleteTechnology';

import Projects from './Project/Projects';
import CreateProject from './Project/CreateProject';
import UpdateProject from './Project/UpdateProject';
import DeleteProject from './Project/DeleteProject';

import Surveys from './Survey/Surveys';
import CreateSurvey from './Survey/CreateSurvey';
import UpdateSurvey from './Survey/UpdateSurvey';
import DeleteSurvey from './Survey/DeleteSurvey';

import ProjectOwners from './ProjectOwner/ProjectOwners';
import CreateProjectOwner from './ProjectOwner/CreateProjectOwner';
import UpdateProjectOwner from './ProjectOwner/UpdateProjectOwner';
import DeleteProjectOwner from './ProjectOwner/DeleteProjectOwner';

function App(){

  return (
    <Router>
          <Header title="Technology Survey" />
          <Navbar bg="dark" variant="dark">
              <Container>                  
                      <Nav className="me-auto">                    
                        <NavbarBrand href="/Summary">Summary</NavbarBrand>
                        <NavLink href="/.auth/login/aad">Login</NavLink>
                        <NavLink to="/Employees" tag={Link}>Employees</NavLink>
                        <NavLink to="/Companies" tag={Link}>Companies</NavLink>
                        <NavLink to="/Platforms" tag={Link}>Platforms</NavLink>
                        <NavLink to="/Technologies" tag={Link}>Technologies</NavLink>
                        <NavLink to="/Projects" tag={Link}>Projects</NavLink>
                        <NavLink to="/ProjectOwners" tag={Link}>Project Owners</NavLink>
                        <NavLink to="/Surveys" tag={Link}>Surveys</NavLink>                      
                      </Nav>
              </Container>
          </Navbar>
         <Routes>
           <Route path='/Summary' element={<Summary/>}/>

           <Route path='/Employees' element={<Employees/>} />  
           <Route path='/CreateEmployee' element={<CreateEmployee/>} />
           <Route path='/UpdateEmployee/:empid' element={<UpdateEmployee/>} />
           <Route path='/DeleteEmployee/:empid' element={<DeleteEmployee/>} />

           <Route path='/Companies' element={<Companies/>} />
           <Route path='/CreateCompany' element={<CreateCompany/>} />
           <Route path='/UpdateCompany/:companyid' element={<UpdateCompany/>} />
           <Route path='/DeleteCompany/:companyid' element={<DeleteCompany/>} />

           <Route path='/Platforms' element={<Platforms/>} />
           <Route path='/CreatePlatform' element={<CreatePlatform/>} />
           <Route path='/UpdatePlatform/:platformId' element={<UpdatePlatform/>} />
           <Route path='/DeletePlatform/:platformId' element={<DeletePlatform/>} />

           <Route path='/Technologies' element={<Technologies/>} />
           <Route path='/CreateTechnology' element={<CreateTechnology/>} />
           <Route path='/UpdateTechnology/:technologyId' element={<UpdateTechnology/>} />
           <Route path='/DeleteTechnology/:technologyId' element={<DeleteTechnology/>} />

           <Route path='/Projects' element={<Projects/>} />
           <Route path='/CreateProject' element={<CreateProject/>} />
           <Route path='/UpdateProject/:projectId' element={<UpdateProject/>} />
           <Route path='/DeleteProject/:projectId' element={<DeleteProject/>} />

           <Route path='/ProjectOwners' element={<ProjectOwners/>} />
           <Route path='/CreateProjectOwner' element={<CreateProjectOwner/>} />
           <Route path='/UpdateProjectOwner/:projectOwnerId' element={<UpdateProjectOwner/>} />
           <Route path='/DeleteProjectOwner/:projectOwnerId' element={<DeleteProjectOwner/>} />

           <Route path='/Surveys' element={<Surveys/>} />
           <Route path='/CreateSurvey' element={<CreateSurvey/>} />
           <Route path='/UpdateSurvey/:projectSurveyId' element={<UpdateSurvey/>} />
           <Route path='/DeleteSurvey/:projectSurveyId' element={<DeleteSurvey/>} />
         </Routes>  
    </Router>
  );
}

export default App;
