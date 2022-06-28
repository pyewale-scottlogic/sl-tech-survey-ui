
import * as React from 'react';  
import { BrowserRouter as Router, Routes, Route,Link, NavLink } from 'react-router-dom'; 
import './App.css';
import Header  from './Components/Header';
import Employees from './Employee/Employees';
import { Container, Nav, Navbar } from "reactstrap"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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

// function App(){

//   return (
//     <Router>
//           <Header title="Technology Survey" />
//           <Navbar bg="dark" variant="dark">
//               <Container>
//                   <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//                       <Nav className="me-auto">
//                       <Nav.Link href="/Employees">Employees</Nav.Link>
//                       {/* <Nav.Link href="#features">Features</Nav.Link>
//                       <Nav.Link href="#pricing">Pricing</Nav.Link> */}
//                   </Nav>
//               </Container>
//           </Navbar>
//           <Routes>                
//              <Route path='/Employees' element={<Employees/>}/>  
//              {/* <Route path='/gorilla' component={Gorilla}/>               
//              <Route path='/rhino' component={Rhino}/> 
//              <Route path='/seaTurtle' component={SeaTurtle}/>  
//              <Route path='/' component={Home}/>             */}
//           </Routes>
//     </Router>
//   );
// }

function App() {  
  return (
    <Router>
      <Header title="Technology Survey" />
      <div className="container">
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/Employees'} className="nav-link">Employee</Link> 
                <Link to={'/Companies'} className="nav-link">Company</Link>
                <Link to={'/Platforms'} className="nav-link">Platform</Link>
                <Link to={'/Technologies'} className="nav-link">Technology</Link>
                <Link to={'/Projects'} className="nav-link">Project</Link>
                <Link to={'/Surveys'} className="nav-link">Survey</Link>
                <Link to={'/ProjectOwners'} className="nav-link">Project Owner</Link>
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Routes>  
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

          <Route path='/Surveys' element={<Surveys/>} />
          <Route path='/CreateSurvey' element={<CreateSurvey/>} />
          <Route path='/UpdateSurvey/:projectSurveyId' element={<UpdateSurvey/>} />
          <Route path='/DeleteSurvey/:projectSurveyId' element={<DeleteSurvey/>} />

          <Route path='/ProjectOwners' element={<ProjectOwners/>} />
          <Route path='/CreateProjectOwner' element={<CreateProjectOwner/>} />
          <Route path='/UpdateProjectOwner/:projectOwnerId' element={<UpdateProjectOwner/>} />
          <Route path='/DeleteProjectOwner/:projectOwnerId' element={<DeleteProjectOwner/>} />

        </Routes>         
      </div>  
    </Router>  
  );  
} 

export default App;
