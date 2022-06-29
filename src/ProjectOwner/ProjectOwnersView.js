import React, {useState, useEffect} from 'react';
import Table from './ProjectOwnerTable';  

const ProjectOwnersView = (props) => {    
    
    
    const [currentList, setCurrentList] = useState([]);
    
    useEffect(() => {
        if (props.owners)
            setCurrentList(props.owners);
        }, []);

    const tabRow = () => {
        return currentList.map(function(object, i){  
            return <Table obj={object} key={i} hideActionColumn={"collapse"}/>;  
        });  
      }

    return (
            <div>                

                <div>
                    <h5 align="center">Project Owners</h5>  
                    <table className="table table-striped" style={{ marginTop: 10 }}>  
                    <thead>  
                        <tr>                         
                            <th>Account Owner</th>
                            <th>Tech Lead</th>
                            <th>From Date</th>                            
                        </tr>  
                    </thead>  
                        <tbody>  
                            { tabRow() }   
                        </tbody>  
                    </table>  
                </div>
            </div>        
        );
}

export default ProjectOwnersView;