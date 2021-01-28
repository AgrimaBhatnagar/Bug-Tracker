import bugModel from '../Models/bugModel'
import bugForm from '../Views/Components/Bug Create  edit/bugForm'

export function retrieveBugs(){
    
    let data =[];
    data.push(new bugModel({
        _id:23456789,
        name:"Crash on load",
        details:"Crashesh after 3 seconds",
        steps:"open application and it will crash",
        version:"V2.0",
        assigned:"Ryan Beasly",
        creator:"Joe Bloggs",
        priority:1,
        time:"23:38"
    }))
    data.push(new bugModel({
        _id:23456789,
        name:"Mont load",
        details:"Crashesh after 3 seconds",
        steps:"open application and it will crash",
        version:"V2.0",
        assigned:"Ryan Beasly",
        creator:"Kevin Joe",
        priority:3,
        time:"23:38"
    }))
    console.log(bugForm)
    
    let sorted =data.sort((a,b)=>{return a.priority-b.priority})
    return sorted;
}