import React, { Component } from 'react';  
import { Link } from 'react-router-dom';


class SurveyTable extends Component {  
  constructor(props) {  
    super(props); 
    }       
 
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.project.companyName}  
          </td>  
          <td>  
            {this.props.obj.project.projectName}  
          </td>
          <td>  
            {this.props.obj.year}  
          </td>  
          <td>  
            {this.props.obj.quarter}  
          </td>
          <td>  
            {this.getAllInOneStringString(this.props.obj.platforms)}  
          </td>  
          <td>  
          {this.getAllInOneStringString(this.props.obj.technologies)}  
          </td>          
          <td>  
            <Link to={"/UpdateSurvey/"+this.props.obj.projectSurveyId} state={{ projectSurveyFromList : this.props.obj }}className="btn btn-success">Edit</Link>
          </td>      
          <td>  
            <Link to={"/CreateSurvey/"} state={{ projectFromList : this.props.obj }} className="btn btn-success">Copy & New</Link>
          </td> 
          <td>  
            <Link to={"/DeleteSurvey/"+this.props.obj.projectSurveyId} className="btn btn-danger">Delete</Link>  
          </td>  
        </tr>  
    );  
  }
  
  getAllInOneStringString(objCollection)
  {
    var href="";
    {objCollection.map((object, i) => {href = href + object.name + ","})}
    return href;
  };
    
}  
  
export default SurveyTable;  