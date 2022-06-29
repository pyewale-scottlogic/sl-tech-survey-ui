import React from 'react';
import Select from 'react-select'
import api from '../api'
import { Col, FormGroup, Label} from 'reactstrap';

class CompanyProject extends React.Component
{
    constructor(props) {
        super(props);
        
        this.state = {
            selectedCompanyId : "",
            selectedProjectId : "",
            companies : [],
            allProjects: [],
            companyProjects:[]
        }
        
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleProjectChange = this.handleProjectChange.bind(this);
    }

    componentDidMount(){

        this.getCompanies();
        this.getAllProjects();

        if(this.props.selectedCompanyId)
        {
          this.setState({selectedCompanyId: this.props.selectedCompanyId});
          this.setState({selectedProjectId: this.props.selectedProjectId});
        }        
      }

      getCompanies() {
        api.Company().fetchAll().then(response => 
            {                
               this.setState({companies : response.data});
            }).catch(e => { console.log(e);});        
      };

      getAllProjects (){
        api.Project().fetchAll().then(response => 
            {                
                this.setState({allProjects : response.data});
            }).catch(e => { console.log(e);});        
      };

      getProjectsForCompany = (selectedCompanyId) => {
        if(selectedCompanyId)
        {
            this.setState({companyProjects : this.state.allProjects.filter( item => item.companyId == selectedCompanyId)});            
        }
    }

    handleCompanyChange = (e) => {
        this.setState({ selectedCompanyId : e.companyId });
        this.getProjectsForCompany(e.companyId);
      };

    handleProjectChange = (e) => {
        this.setState({ selectedProjectId : e.projectId });
    };

    render() {

            if (this.props.selectedCompanyId && 
               this.state.companies.length > 0 && 
               this.state.allProjects.length > 0 &&
               this.state.companyProjects.length == 0)
            {
                this.getProjectsForCompany(this.props.selectedCompanyId);
            }
            
        return (           

            <div>
                <FormGroup row>  
            <Label for="companyId" sm={2}>Company Name</Label>  
            <Col sm={5}>  
            <Select 
                name="companyId"
                onChange={this.handleCompanyChange}              
                value={this.state.companies.filter(item => item.companyId == this.state.selectedCompanyId)}
                options={this.state.companies}
                getOptionLabel={(companies) => companies['name']}
                getOptionValue={(companies) => companies['companyId']}
                isDisabled={this.props.readOnly}
                 
            />
            </Col>                
        </FormGroup>
        <FormGroup row>  
            <Label for="projectId" sm={2}>Project Name</Label>  
            <Col sm={5}>  
            <Select 
                name="projectId"
                onChange={this.handleProjectChange}
                value={this.state.companyProjects.filter(item => item.projectId == this.state.selectedProjectId)}             
                options={this.state.companyProjects}
                getOptionLabel={(companyProjects) => companyProjects['projectName']}
                getOptionValue={(companyProjects) => companyProjects['projectId']}
                isDisabled={this.props.readOnly}
            >                    
            </Select>
            </Col>                
        </FormGroup>
            </div>  
        );
    }
}

export default CompanyProject;