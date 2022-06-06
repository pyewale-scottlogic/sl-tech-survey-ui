import React, { Component } from 'react';  
import { Link } from 'react-router-dom';


class PlatformTable extends Component {  
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
            <Link to={"/UpdatePlatform/"+this.props.obj.platformId} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <Link to={"/DeletePlatform/"+this.props.obj.platformId} className="btn btn-danger">Delete</Link>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default PlatformTable;  