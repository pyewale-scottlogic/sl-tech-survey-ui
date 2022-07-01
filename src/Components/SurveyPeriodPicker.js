import React from 'react';
import { Col, FormGroup, Label} from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const minOffset = -1;
const maxOffset = 10; 

class SurveyPeriodPicker extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedYear: "",
      selectedQuarter:"",
      selectedSurveyDate : new Date()
    }

    
  }

componentDidMount(){

  if(this.props.selectedYear)
  {
    this.setState({selectedYear: this.props.selectedYear});
    this.setState({selectedQuarter: this.props.selectedQuarter});
    this.setState({selectedSurveyDate: new Date(this.props.selectedSurveyDate)});
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

  onSurveyDateChange = (date) => {
    this.setState({ selectedSurveyDate : date });
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
        <FormGroup row>  
        <Label for="fromDate" sm={2}>Survey Date</Label>  
        <Col sm={5}>
            <DatePicker 
            selected={this.state.selectedSurveyDate} 
            onChange={(date) => this.onSurveyDateChange(date)} 
            dateFormat={"dd/MM/yyyy"}/>
        </Col>   
    </FormGroup>    
      </div>
    );
  }
}

export default SurveyPeriodPicker;