import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Select from 'react-select'
import api from '../api'
import { Col, FormGroup, Label, Button, Container} from 'reactstrap';
import SurveyPeriodPicker  from '../Components/SurveyPeriodPicker';
import CompanyProject from '../Components/CompanyProject';
import TechnologyPlatform from '../Components/TechnologyPlatform';
import ProjectOwnersView from '../ProjectOwner/ProjectOwnersView';

const UpdateSurvey = (props) => 
{
    const navigate = useNavigate();
    const {projectSurveyFromList} = useLocation().state;
    const { projectSurveyId } = useParams();

    const localSurveyPeriodPicker = React.createRef();
    const localCompanyProject = React.createRef();
    const localTechnologyPlatform = React.createRef();

    const surveyState = {
        projectSurveyId     
    };


    const [currentSurvey, setCurrentSurvey] = useState(surveyState);

    useEffect(() => {
        if (projectSurveyId)
               setCurrentSurvey(projectSurveyFromList);
        }, [projectSurveyId]);
    
    const onCancel = () => {
        navigate('/Surveys');            
        };

    const saveUpdatedSurvey = () => {
        const currentSurveyPeriodPicker = localSurveyPeriodPicker.current;
        const currentCompanyProject = localCompanyProject.current;
        const currentTechnologyPlatform = localTechnologyPlatform.current;

        api.Survey().update({
        ProjectSurveyId:currentSurvey.projectSurveyId,
        Technologies:currentTechnologyPlatform.state.selectedTechnologies,
        Platforms:currentTechnologyPlatform.state.selectedPlatforms,        
        ProjectId:currentCompanyProject.state.selectedProjectId,        
        Year:currentSurveyPeriodPicker.state.selectedYear,
        Quarter:currentSurveyPeriodPicker.state.selectedQuarter,
        SurveyDate:currentSurveyPeriodPicker.state.selectedSurveyDate
        })
        .then(Response => {  
            if(Response.status =='204'){  
              console.log(Response.status);  
                alert("Data updated Successfully");  
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

    return (        
        <Container className='App'>
            <h4 className="PageHeading">Edit Survey</h4>           
            <FormGroup>
                <CompanyProject ref={localCompanyProject} selectedCompanyId={projectSurveyFromList.project.companyId} selectedProjectId={projectSurveyFromList.project.projectId} readOnly="true"/>                
            </FormGroup>            
            <FormGroup>
                <SurveyPeriodPicker ref={localSurveyPeriodPicker} selectedYear={projectSurveyFromList.year} selectedQuarter={projectSurveyFromList.quarter} selectedSurveyDate={projectSurveyFromList.surveyDate}/>                
            </FormGroup>
            <FormGroup>
                <TechnologyPlatform ref={localTechnologyPlatform} selectedTechnologies={projectSurveyFromList.technologies} selectedPlatforms={projectSurveyFromList.platforms}/>                
            </FormGroup>
            <FormGroup>
                <ProjectOwnersView owners={projectSurveyFromList.project.projectOwners}/>                
            </FormGroup>    
            <FormGroup row>  
                <Col sm={5}>  
                </Col>  
                <Col sm={1}>  
                <button type="button" onClick={saveUpdatedSurvey} className="btn btn-success">Submit</button>  
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

export default UpdateSurvey;