import { useNavigate, useParams } from 'react-router-dom';
import api from '../api'


const DeleteProjectOwner = (props) => {

    const { projectOwnerId } = useParams();
    const navigate = useNavigate();


    api.ProjectOwner().delete(projectOwnerId)
          .then(json => {  
            if(json.status=='204'){  
              console.log(json.data.Status);  
              alert("Record deleted Successfully");  
              navigate('/ProjectOwners');
            }  
            else{  
                alert('Data delete failed');  
                navigate('/ProjectOwners'); 
            }  
          }).catch(function (error){
            alert('Data delete failed');  
            navigate('/ProjectOwners'); 
        });

}

export default DeleteProjectOwner;