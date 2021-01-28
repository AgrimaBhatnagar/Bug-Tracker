
import './App.css';
import {useSelector} from 'react-redux';
import Login from './Views/Components/Login/Login';
import{ BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ViewBugPage from './Views/Pages/viewBugs'
import Sidebar from './Views/Sidebar/sidebar'
import DashBoard from './Views/Pages/dashBoard'
import CreateBug from './Views/Components/Bug Create  edit/bugForm'
function App() {
  const {auth} = useSelector(state => state)
  return (
    <Router>
    {!auth.LoggedIn ? <Login/>:
      <>
      <Sidebar/>
    <Switch>
    <Route path="/" exact> <DashBoard/></Route>
      <Route path="/viewbugs"><ViewBugPage/></Route>
      <Router path="/create"><div className='page-container'><CreateBug title='Create Bug'/></div> </Router>
    </Switch>
    </>}
    </Router>

  )
    
  
}

export default App;
