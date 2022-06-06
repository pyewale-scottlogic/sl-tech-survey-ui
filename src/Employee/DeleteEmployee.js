import { useNavigate, useParams } from 'react-router-dom';
import api from '../api'


const DeleteEmployee = (props) => {

    const { empid } = useParams();
    const navigate = useNavigate();


    api.Employee().delete(empid)
          .then(json => {  
            if(json.status=='204'){  
              console.log(json.data.Status);  
              alert("Record deleted Successfully");  
              navigate('/Employees');
            }  
            else{  
                alert('Data delete failed');  
                navigate('/Employees'); 
            }  
          }).catch(function (error){
            alert('Data delete failed');  
            navigate('/Employees'); 
        });

}

export default DeleteEmployee;