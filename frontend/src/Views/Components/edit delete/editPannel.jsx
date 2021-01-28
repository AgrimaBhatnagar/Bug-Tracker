import React from 'react';
import './editPannel.css'

export default (props)=>{
    return(
        <div className='edit-pannel'>
            <button onClick={props.editClicked}>Edit</button>
            <button onClick={props.deleteClicked} >Delete</button>
        </div>
    )
}