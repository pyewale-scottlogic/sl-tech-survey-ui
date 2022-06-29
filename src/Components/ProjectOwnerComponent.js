import React from 'react';
import Select from 'react-select'
import api from '../api'
import { Col, FormGroup, Label} from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ProjectOwnerComponent extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            selectedOwnerId : "",
            selectedTechLeadId : "",
            selectedFromDate: new Date(),
            employeesForOwner: [],
            employeesForLead: []           
        }
        
        this.handleOwnerChange = this.handleOwnerChange.bind(this);
        this.handleTechLeadChange = this.handleTechLeadChange.bind(this);
    }

    componentDidMount(){

        this.getEmployees();        

        if(this.props.ownerToEdit)
        {
          this.setState({selectedOwnerId: this.props.ownerToEdit.accountOwnerId});
          this.setState({selectedTechLeadId: this.props.ownerToEdit.techLeadId});
          this.setState({selectedFromDate: new Date(this.props.ownerToEdit.fromDate)});
        }        
      }

    getEmployees() {
    api.Employee().fetchAll().then(response => 
        {                
            this.setState({employeesForOwner : response.data});
            this.setState({employeesForLead : response.data});            
        }).catch(e => { console.log(e);});        
    };

    handleOwnerChange = (e) => {
        this.setState({ selectedOwnerId : e.employeeId });        
      };

    handleTechLeadChange = (e) => {
        this.setState({ selectedTechLeadId : e.employeeId });
    };

    handleFromDateChange = (date) => {
        this.setState({ selectedFromDate : date });
    };

    render() {        
        
    return (           

        <div>
            <FormGroup row>  
        <Label for="accountOwnerId" sm={2}>Account Owner</Label>  
        <Col sm={5}>  
        <Select 
            name="accountOwnerId"
            onChange={this.handleOwnerChange}              
            value={this.state.employeesForOwner.filter(item => item.employeeId == this.state.selectedOwnerId)}
            options={this.state.employeesForOwner}
            getOptionLabel={(employeesForOwner) => employeesForOwner['firstName'] + ' ' + employeesForOwner['lastName']}
            getOptionValue={(employeesForOwner) => employeesForOwner['employeeId']}            
             
        />
        </Col>                
    </FormGroup>
    <FormGroup row>  
        <Label for="techLeadId" sm={2}>Tech Lead</Label>  
        <Col sm={5}>  
        <Select 
            name="techLeadId"
            onChange={this.handleTechLeadChange}
            value={this.state.employeesForLead.filter(item => item.employeeId == this.state.selectedTechLeadId)}             
            options={this.state.employeesForLead}
            getOptionLabel={(employeesForLead) => employeesForLead['firstName'] + ' ' + employeesForLead['lastName']}
            getOptionValue={(employeesForLead) => employeesForLead['employeeId']}            
        >                    
        </Select>
        </Col>                
    </FormGroup>
    <FormGroup row>  
        <Label for="fromDate" sm={2}>Owners From Date</Label>  
        <Col sm={5}>
            <DatePicker 
            selected={this.state.selectedFromDate} 
            onChange={(date) => this.handleFromDateChange(date)} 
            dateFormat={"dd/MM/yyyy"}/>
        </Col>   
    </FormGroup>    
        </div>  
    );
}
    
}

export default ProjectOwnerComponent;