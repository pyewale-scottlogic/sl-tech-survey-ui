import React, { Component } from 'react';  
import { Link } from 'react-router-dom';


class CompanyTable extends Component {  
  constructor(props) {  
    super(props);  
    }       
 
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.name}  
          </td>         
          <td>  
          <Link to={"/UpdateCompany/"+this.props.obj.companyId} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <Link to={"/DeleteCompany/"+this.props.obj.companyId} className="btn btn-danger">Delete</Link>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default CompanyTable; 