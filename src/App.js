
import * as React from 'react';  
import { BrowserRouter as Router, Routes, Route,Link, NavLink } from 'react-router-dom'; 
import './App.css';
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
// import CreateSurvey from './Survey/CreateSurvey';
// import UpdateSurvey from './Survey/UpdateSurvey';
// import DeleteSurvey from './Survey/DeleteSurvey';

function App() {  
  return (  
    <Router>  
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
          {/* <Route path='/CreateSurvey' element={<CreateSurvey/>} />
          <Route path='/UpdateSurvey/:platformid' element={<UpdateSurvey/>} />
          <Route path='/DeleteSurvey/:platformid' element={<DeleteSurvey/>} /> */}

        </Routes>         
      </div>  
    </Router>  
  );  
} 

// function App() {
//     return (
//       <div className='main-nav'>  
//             <div className='navbar navbar-inverse'>  
//                 <div className='navbar-header'>  
//                     <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>  
//                         <span className='sr-only'>Toggle navigation</span>  
//                         <span className='icon-bar'></span>  
//                         <span className='icon-bar'></span>  
//                         <span className='icon-bar'></span>  
//                     </button>  
//                     {/* <Link className='navbar-brand' to={'/'}>ReactCrudDemo</Link>   */}
//                 </div>  
//                 <div className='clearfix'></div>  
//                 <div className='navbar-collapse collapse'>  
//                     <ul className='nav navbar-nav'>  
//                         {/* <li>  
//                             <NavLink to={'/'} exact activeClassName='active'>  
//                                 <span className='glyphicon glyphicon-home'></span> Home  
//                             </NavLink>  
//                         </li>   */}
//                         {/* <li>  
//                             <NavLink to={'/Employees'} activeClassName='active'>  
//                                 <span className='glyphicon glyphicon-th-list'></span> Employee  
//                             </NavLink>  
//                         </li>   */}
//                     </ul>  
//                 </div>  
//             </div>  
//         </div>
//     );
//   }





export default App;
