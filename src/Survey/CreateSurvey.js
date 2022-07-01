import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../api'
import { Col, FormGroup, Button, Container} from 'reactstrap';
import SurveyPeriodPicker  from '../Components/SurveyPeriodPicker';
import CompanyProject from '../Components/CompanyProject';
import TechnologyPlatform from '../Components/TechnologyPlatform';

const CreateSurvey = (props) => 
{
    const navigate = useNavigate();
   
    const projectSurveyFromList = useLocation().state;
    

    const localSurveyPeriodPicker = React.createRef();
    const localCompanyProject = React.createRef();
    const localTechnologyPlatform = React.createRef();    

    const saveSurvey = () => {
        const currentSurveyPeriodPicker = localSurveyPeriodPicker.current;
        const currentCompanyProject = localCompanyProject.current;
        const currentTechnologyPlatform = localTechnologyPlatform.current;

        api.Survey().create({
        CompanyId:currentCompanyProject.state.selectedCompanyId,
        ProjectId:currentCompanyProject.state.selectedProjectId,
        Technologies:currentTechnologyPlatform.state.selectedTechnologies,
        Platforms:currentTechnologyPlatform.state.selectedPlatforms,
        Year:currentSurveyPeriodPicker.state.selectedYear,
        Quarter:currentSurveyPeriodPicker.state.selectedQuarter,
        SurveyDate:currentSurveyPeriodPicker.state.selectedSurveyDate
        })
        .then(Response => {  
          if(Response.status =='201'){  
            console.log(Response.status);  
              alert("Data Saved Successfully");  
              navigate('/Surveys');
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
        navigate('/Surveys');            
      };

    return (        
        <Container className='App'>
            <h4 className="PageHeading">Enter Survey Information</h4>
            <FormGroup>
                {projectSurveyFromList==null
                 ? <CompanyProject ref={localCompanyProject}/>                
                 :<CompanyProject ref={localCompanyProject} selectedCompanyId={projectSurveyFromList.projectFromList.project.companyId} selectedProjectId={projectSurveyFromList.projectFromList.project.projectId}/>                
                }
            </FormGroup>            
            <FormGroup>
                {projectSurveyFromList==null
                 ? <SurveyPeriodPicker ref={localSurveyPeriodPicker}/>            
                 : <SurveyPeriodPicker ref={localSurveyPeriodPicker} selectedYear={projectSurveyFromList.projectFromList.year} selectedQuarter={projectSurveyFromList.projectFromList.quarter}/>
                }
                
            </FormGroup>
            <FormGroup>
                {projectSurveyFromList==null
                 ? <TechnologyPlatform ref={localTechnologyPlatform}/>
                 : <TechnologyPlatform ref={localTechnologyPlatform} selectedTechnologies={projectSurveyFromList.projectFromList.technologies} selectedPlatforms={projectSurveyFromList.projectFromList.platforms}/>                
                }
            </FormGroup>
            <FormGroup row>  
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={saveSurvey} className="btn btn-success">Submit</button>  
              </Col>  
              <Col sm={1}>  
              <Button type="button" onClick={onCancel} color="danger">Cancel</Button>
              </Col>  
              <Col sm={5}>  
              </Col>  
            </FormGroup>  
        </Container>
        );
}

export default CreateSurvey;