import { useNavigate, useParams } from 'react-router-dom';
import api from '../api'


const DeleteCompany = (props) => {

    const { companyid } = useParams();
    const navigate = useNavigate();


    api.Company().delete(companyid)
          .then(json => {  
            if(json.status=='204'){  
              console.log(json.data.Status);  
              alert("Record deleted Successfully");  
              navigate('/Companies');
            }  
            else{  
                alert('Data delete failed');  
                navigate('/Companies'); 
            }  
          }).catch(function (error){
            alert('Data delete failed');  
            navigate('/Companies'); 
        });

}

export default DeleteCompany;