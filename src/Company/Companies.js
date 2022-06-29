import React from 'react';
import { Link } from 'react-router-dom'; 
import Table from './CompanyTable';  
import api from '../api'
  
class Companies extends React.Component{   
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
        api.Company().fetchAll()
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
                <Link to={'/CreateCompany'} className="nav-link">Add Company</Link>  
            </div>
          <h4 align="center">Company List</h4>  
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

export default Companies