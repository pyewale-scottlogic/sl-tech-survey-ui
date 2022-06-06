import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const CreateSurvey = (props) => 
{
    const navigate = useNavigate();
    const {surveyFromList} = useLocation.state;
    const { projectId } = useParams();

    const initialSurveyState = {
        projectId : "",        
        companyId : ""        
      };
}

export default CreateSurvey;