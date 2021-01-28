import React,{useState} from 'react'
import ViewSection from './component/bugViewSection'
import './bugView.css'
import BugModel  from '../../../Models/bugModel'
import {useDispatch} from 'react-redux';
import {markComplete} from '../../../Controllers/Redux/bugSlice'
import EditPannel from '../edit delete/editPannel'
import EditBug from '../Bug Create  edit/bugForm'
import { retrieveBugs } from '../../../Controllers/bugController';
export default(props)=>{
    const dispatch= useDispatch()
    const bug = new BugModel(props.bug);
    const [displayEdit,setDisplayEdit]=useState(false)
    // const [displaydelete,setDisplaydelete]=useState(true)
    function editClicked(){
        setDisplayEdit(!displayEdit)
        
        

    }
    function deleteClicked(){
        
        
       
       
    
    }

    return(
        <>
        <div className='bug-view'>
            <EditPannel editClicked={editClicked} deleteClicked={deleteClicked} />
            <button onClick={props.clicked}  className='close-btn'>Close</button>
            <h1>{bug.name}</h1>
            <ViewSection title='Details' info ={bug.details}/>
            <ViewSection title='Steps' info ={bug.steps}/>
            <ViewSection title='Priority' info ={bug.priority}/>
            <ViewSection title='Creator' info ={bug.creator}/>
            <ViewSection title='App Version' info ={bug.version}/>
            <ViewSection title='Time Created' info ={bug.time}/>
            <button  onClick={props.clicked}>Mark Complete</button>
        </div>
        {displayEdit && <EditBug title="Edit Bug" bug={bug} close={editClicked} />}
        
   </>
   )
}