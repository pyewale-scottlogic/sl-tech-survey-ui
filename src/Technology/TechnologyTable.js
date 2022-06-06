import React, { Component } from 'react';  
import { Link } from 'react-router-dom';


class TechnologyTable extends Component {  
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
            <Link to={"/UpdateTechnology/"+this.props.obj.technologyId} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <Link to={"/DeleteTechnology/"+this.props.obj.technologyId} className="btn btn-danger">Delete</Link>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default TechnologyTable;  