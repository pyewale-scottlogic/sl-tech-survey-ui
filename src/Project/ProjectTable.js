import React, { Component } from 'react';  
import { Link } from 'react-router-dom';


class ProjectTable extends Component {  
  constructor(props) {  
    super(props); 
    }       
 
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.companyName}  
          </td>  
          <td>  
            {this.props.obj.projectName}  
          </td>
          <td>  
            {this.props.obj.kimbleUrl}  
          </td>  
          <td>  
            <Link to={"/UpdateProject/"+this.props.obj.projectId} state={{ projectFromList : this.props.obj }}className="btn btn-success">Edit</Link>
          </td>  
          <td>  
            <Link to={"/DeleteProject/"+this.props.obj.projectId} className="btn btn-danger">Delete</Link>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default ProjectTable;  