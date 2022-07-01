import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import api from '../api'

const UpdateTechnology = (props) => {

    const navigate = useNavigate();
    const { technologyId } = useParams();

    const initialTechnologyState = {
      technologyId : "",
      name : ""      
    };

    const [currentTechnology, setCurrentTechnology] = useState(initialTechnologyState);

    const getTechnology = technologyId => {
        api.Technology().fetchById(technologyId)
          .then(response => {
            setCurrentTechnology(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

    
    useEffect(() => {
    if (technologyId)
        getTechnology(technologyId);
    }, [technologyId]);


    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentTechnology({ ...currentTechnology, [name]: value });
      };

    const saveUpdatedTechnology = () => {
        const obj = {  
            TechnologyId:currentTechnology.technologyId,  
            Name: currentTechnology.name
          };

          api.Technology().update(obj.TechnologyId, obj)
          .then(Response => {  
            if(Response.status =='204'){  
              console.log(Response.status);  
                alert("Data updated Successfully");  
                navigate('/Technologies');
              }
              else if(Response.status=='409')
              {
                 alert("Data conflicting with existing records!");               
              }
              else
              {  
                  alert('Something went wrong, Data not Saved!');             
              }  
            })  
    };

    const onCancel = () => {
      navigate('/Technologies');            
    };

    return(
        <Container className="App">  
        <h4 className="PageHeading">Enter Technology Information</h4>  
        <Form className="form">  
          <Col>  
            <FormGroup row>  
              <Label for="name" sm={2}>Technology</Label>  
              <Col sm={10}>  
                <Input type="text" name="name" onChange={handleInputChange} value={currentTechnology.name} placeholder="Enter Technology" />  
              </Col>  
            </FormGroup>                  
          </Col>  
          <Col>  
            <FormGroup row>  
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={saveUpdatedTechnology} className="btn btn-success">Submit</button>  
              </Col>  
              <Col sm={1}>  
              <Button type="button" onClick={onCancel} color="danger">Cancel</Button>
              </Col>  
              <Col sm={5}>  
              </Col>  
            </FormGroup>  
          </Col>  
        </Form>  
      </Container>      
    );
}

export default UpdateTechnology;
