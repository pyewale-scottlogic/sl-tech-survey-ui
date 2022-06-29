import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';
import Select, { components } from 'react-select'
import api from '../api'
import { Col, FormGroup, Label, Button, Container} from 'reactstrap';

const minOffset = -1;
const maxOffset = 10; 

class SurveyPeriodPicker extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedYear: "",
      selectedQuarter:""
    }

    
  }

componentDidMount(){

  if(this.props.selectedYear)
  {
    this.setState({selectedYear: this.props.selectedYear});
    this.setState({selectedQuarter: this.props.selectedQuarter});
  }
  else{
  const thisYear = (new Date()).getFullYear();
    this.setState({selectedYear: thisYear});
    this.setState({selectedQuarter: 2});
  }
}

  onYearChange = (evt) => {
    this.setState({ selectedYear: evt.target.value });    
  };

  onQuarterChange = (evt) => {
    this.setState({ selectedQuarter: evt.target.value });
  };

  render() {
    const thisYear = (new Date()).getFullYear();
    const yearOptions = [];
    const quarterOptions = [];
    
    for (let i = minOffset; i <= maxOffset; i++) {
      const year = thisYear - i;
      yearOptions.push(<option value={year}>{year}</option>);
    }

    for (let i = 1; i <= 4; i++) {
        quarterOptions.push(<option value={i}>{i}</option>);
    }

    return (
      <div>
        <FormGroup row>
        <Label for="year" sm={2}>Year</Label>
        <Col sm={5}>  
          <select  name="year" value={this.state.selectedYear} onChange={this.onYearChange}> 
            {yearOptions}
          </select>
          </Col>
        </FormGroup>

        <FormGroup row>
        <Label for="quarter" sm={2}>Quarter</Label>
        <Col sm={5}>  
          <select  name="quarter" value={this.state.selectedQuarter} onChange={this.onQuarterChange}> 
            {quarterOptions}
          </select>
          </Col>
        </FormGroup>
      </div>
    );
  }
}

export default SurveyPeriodPicker;