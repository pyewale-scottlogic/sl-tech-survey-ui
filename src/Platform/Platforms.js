import React from 'react';
import { Link } from 'react-router-dom'; 
import Table from './PlatformTable';  
import api from '../api'
  
class Platforms extends React.Component{   
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
        api.Platform().fetchAll()
        .then(response => {  
          this.setState({ business: response.data });  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (        
        <div>
          <br/>
            <div>
                <Link to={'/CreatePlatform'} className="nav-link">Add Platform</Link>  
            </div>
          <h4 align="center">Platform List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Name</th>  
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  } 

export default Platforms