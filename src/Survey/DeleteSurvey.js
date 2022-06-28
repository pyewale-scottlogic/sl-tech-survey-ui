import { useNavigate, useParams } from 'react-router-dom';
import api from '../api'


const DeleteSurvey = (props) => {

    const { projectSurveyId } = useParams();
    const navigate = useNavigate();


    api.Survey().delete(projectSurveyId)
          .then(json => {  
            if(json.status=='204'){  
              console.log(json.data.Status);  
              alert("Record deleted Successfully");  
              navigate('/Surveys');
            }  
            else{  
                alert('Data delete failed');  
                navigate('/Surveys'); 
            }  
          }).catch(function (error){
            alert('Data delete failed');  
            navigate('/Surveys'); 
        });

}

export default DeleteSurvey;