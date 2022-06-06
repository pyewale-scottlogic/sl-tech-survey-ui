import { useNavigate, useParams } from 'react-router-dom';
import api from '../api'


const DeletePlatform = (props) => {

    const { platformId } = useParams();
    const navigate = useNavigate();


    api.Platform().delete(platformId)
          .then(json => {  
            if(json.status=='204'){  
              console.log(json.data.Status);  
              alert("Record deleted Successfully");  
              navigate('/Platforms');
            }  
            else{  
                alert('Data delete failed');  
                navigate('/Platforms'); 
            }  
          }).catch(function (error){
            alert('Data delete failed');  
            navigate('/Platforms'); 
        });

}

export default DeletePlatform;