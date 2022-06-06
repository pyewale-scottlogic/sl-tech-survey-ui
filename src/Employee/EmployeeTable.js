import React, { Component } from 'react';  
import { Link } from 'react-router-dom';


class EmployeeTable extends Component {  
  constructor(props) {  
    super(props);  
    }       
 
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.firstName}  
          </td>  
          <td>  
            {this.props.obj.lastName}  
          </td>  
          <td>  
          <Link to={"/UpdateEmployee/"+this.props.obj.employeeId} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <Link to={"/DeleteEmployee/"+this.props.obj.employeeId} className="btn btn-danger">Delete</Link>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default EmployeeTable;  