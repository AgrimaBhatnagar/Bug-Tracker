import React,{useState} from 'react'
import './bugForm.css';
import BugModel from '../../../Models/bugModel'
import { useDispatch,useSelector} from  'react-redux';

import { retrieveBugs } from '../../../Controllers/bugController';


export default(props)=>{
    const [bugObject,setBugObject]=useState(new BugModel)
 
    function inputChanged(e){
        setBugObject({
            ...bugObject,
            [e.target.name]:e.target.value
        })

    }
    
    
    return (
        <div className='bug-create'>
           {props.title=="Edit Bug" && <button className='close-btn' onClick={props.close}>Close</button>}
         <h1>{props.title}</h1>
         <form>
             <label>Name:</label>
             <input name='name' onChange={inputChanged} value={bugObject.name} placeholder='Bug-Name' required></input>
             <label>Details:</label>
             <textarea name='details' placeholder='Detailed description on bug' required onChange={inputChanged} value={bugObject.details}></textarea>
             <label>Steps:</label>
             <textarea name='steps' placeholder='Steps to recreate the bug' required onChange={inputChanged} value={bugObject.steps}></textarea>
             <label>Priority:</label>
             <select name='priority' required onChange={inputChanged} value={bugObject.priority}>
                <option value="1">High </option>
                <option value="2">Mid </option>
                <option value="3">Low </option>
             </select>
            <label>Assigned:</label>
            <select name='assigned' onChange={inputChanged} value={bugObject.assigned}>
                <option>Agrima Bhatnagar</option>

            </select>
            <label>Application Version:</label>
            <input name='version' placeholder='Application version' onChange={inputChanged} value={bugObject.version}></input>
            <button type='submit' onClick={props.close} >{props.title}</button>
         
         
         </form>

        </div>
    )
}

