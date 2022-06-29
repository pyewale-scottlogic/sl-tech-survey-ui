import React from 'react';
import Select from 'react-select'
import api from '../api'
import { Col, FormGroup, Label} from 'reactstrap';

class TechnologyPlatform extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            platforms : [],
            selectedPlatforms: [],
            technologies : [],
            selectedTechnologies: []
        }

        this.handlePlatformChange = this.handlePlatformChange.bind(this);
        this.handleTechnologyChange = this.handleTechnologyChange.bind(this);

    }

    componentDidMount(){

        this.getTechnologies();
        this.getPlatforms();

        if(this.props.selectedTechnologies)
        {
          this.setState({selectedTechnologies: this.props.selectedTechnologies});
          this.setState({selectedPlatforms: this.props.selectedPlatforms});
        }        
      }

    getTechnologies() {
    api.Technology().fetchAll().then(response => 
        {                
            this.setState({technologies : response.data});
        }).catch(e => { console.log(e);});        
    };

    getPlatforms (){
    api.Platform().fetchAll().then(response => 
        {                
            this.setState({platforms : response.data});
        }).catch(e => { console.log(e);});        
    };

    handlePlatformChange = (e) => {
        this.setState({ selectedPlatforms : e });
      };

    handleTechnologyChange = (e) => {
        this.setState({ selectedTechnologies : e });
    };

    render() {        
        
    return (
    <div>
        <FormGroup row>  
                <Label for="technologyId" sm={2}>Technologies</Label>  
                <Col sm={5}>  
                <Select 
                    name="technologyId"
                    onChange={this.handleTechnologyChange}
                    value={this.state.selectedTechnologies}
                    options={this.state.technologies}
                    getOptionLabel={(technologies) => technologies['name']}
                    getOptionValue={(technologies) => technologies['technologyId']}
                    isMulti
                >                    
                </Select>
                </Col>                
        </FormGroup>
        <FormGroup row>
        <Label for="platformId" sm={2}>Platforms</Label>  
                <Col sm={5}>  
                <Select 
                    name="platformId"
                    onChange={this.handlePlatformChange}
                    value={this.state.selectedPlatforms}
                    options={this.state.platforms}
                    getOptionLabel={(platforms) => platforms['name']}
                    getOptionValue={(platforms) => platforms['platformId']}
                    isMulti
                >                    
                </Select>
                </Col>               
        </FormGroup>
    </div>  
    );
}

}

export default TechnologyPlatform;