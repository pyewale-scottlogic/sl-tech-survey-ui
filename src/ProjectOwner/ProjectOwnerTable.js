import React, { Component } from 'react';  
import { Link } from 'react-router-dom';
import { format } from 'date-fns'


class ProjectTable extends Component {  
  constructor(props) {  
    super(props); 
    }       
 
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.accountOwner.firstName + ' ' + this.props.obj.accountOwner.lastName}  
          </td>          
          <td>  
            {this.props.obj.techLead.firstName + ' ' + this.props.obj.techLead.lastName}  
          </td>
          <td>  
            {format(new Date(this.props.obj.fromDate), 'dd/MM/yyyy')}  
          </td>  
          <td style={{visibility:this.props.hideActionColumn}}>
            <Link to={"/UpdateProjectOwner/"+this.props.obj.projectOwnerId} state={{ projectOwnerFromList : this.props.obj }}className="btn btn-success">Edit</Link>
          </td>  
          <td style={{visibility:this.props.hideActionColumn}}>
            <Link to={"/DeleteProjectOwner/"+this.props.obj.projectOwnerId} className="btn btn-danger">Delete</Link>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default ProjectTable;  