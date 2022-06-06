import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import api from '../api'

const UpdatePlatform = (props) => {

    const navigate = useNavigate();
    const { platformId } = useParams();

    const initialPlatformState = {
      platformId : "",
      name : ""      
    };

    const [currentPlatform, setCurrentPlatform] = useState(initialPlatformState);

    const getPlatform = platformId => {
        api.Platform().fetchById(platformId)
          .then(response => {
            setCurrentPlatform(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

    
    useEffect(() => {
    if (platformId)
        getPlatform(platformId);
    }, [platformId]);


    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentPlatform({ ...currentPlatform, [name]: value });
      };

    const saveUpdatedPlatform = () => {
        const obj = {  
            PlatformId:currentPlatform.platformId,  
            Name: currentPlatform.name
          };

          api.Platform().update(obj.PlatformId, obj)
          .then(json => {  
            if(json.status=='204'){  
              console.log(json.data.Status);  
              alert("Data Updated Successfully");  
              navigate('/Platforms');
            }  
            else{  
                alert('Data update failed');  
                navigate('/Platforms'); 
            }  
            });
    };

    const onCancel = () => {
      navigate('/Platforms');            
    };

    return(
        <Container className="App">  
        <h4 className="PageHeading">Enter Platform Information</h4>  
        <Form className="form">  
          <Col>  
            <FormGroup row>  
              <Label for="name" sm={2}>Platform</Label>  
              <Col sm={10}>  
                <Input type="text" name="name" onChange={handleInputChange} value={currentPlatform.name} placeholder="Enter Platform" />  
              </Col>  
            </FormGroup>                  
          </Col>  
          <Col>  
            <FormGroup row>  
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={saveUpdatedPlatform} className="btn btn-success">Submit</button>  
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

export default UpdatePlatform;
