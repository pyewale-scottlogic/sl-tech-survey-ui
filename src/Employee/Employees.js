import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import Table from './EmployeeTable';  
import api from '../api'
  
class Employees extends React.Component{   
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
        api.Employee().fetchAll()
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
            <div>
                <Link to={'/CreateEmployee'} className="nav-link">Add Employee</Link>  
            </div>
          <h4 align="center">Employee List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>First Name</th>  
                <th>Last Name</th>  
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

export default Employees