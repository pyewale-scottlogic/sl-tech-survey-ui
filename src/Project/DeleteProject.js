import { useNavigate, useParams } from 'react-router-dom';
import api from '../api'


const DeleteProject = (props) => {

    const { projectId } = useParams();
    const navigate = useNavigate();


    api.Project().delete(projectId)
          .then(json => {  
            if(json.status=='204'){  
              console.log(json.data.Status);  
              alert("Record deleted Successfully");  
              navigate('/Projects');
            }  
            else{  
                alert('Data delete failed');  
                navigate('/Projects'); 
            }  
          }).catch(function (error){
            alert('Data delete failed');  
            navigate('/Projects'); 
        });

}

export default DeleteProject;