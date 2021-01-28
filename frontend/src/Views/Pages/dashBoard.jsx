import React,{useEffect} from 'react'
import {getBugs} from '../../Controllers/Redux/bugSlice'
import {useDispatch,useSelector} from 'react-redux'
import Card from '../Components/Dashboard/card';
 import {useHistory} from 'react-router-dom'
export default()=>{
    const dispatch =useDispatch();
    const bugs = useSelector(state => state.bugs);
    const browserhistory=useHistory()


    let highcount=0
    let midcount=0
    let lowcount=0
    if (bugs!=undefined){
        highcount= filterBugs(1);
        midcount=filterBugs(2);
        lowcount=filterBugs(3);

    }
    function redirect(){
        browserhistory.push('/viewbugs')

    }


    function filterBugs(priority){
        return bugs.filter((bug)=>{return bug.priority==priority} )
    }
    useEffect(()=>{
         dispatch(getBugs())
    },[bugs == undefined])
    return(
        <div className='page-container'>
        <Card priority="1" count={highcount.length} clicked={redirect}/>
        <Card priority="2" count={midcount.length} clicked={redirect} />
        <Card priority="3" count={lowcount.length} clicked={redirect} />


        </div>
    )
}