
import './App.css';
import Navbar from './components/Navbar';
import SeeWhatOthers from './components/SeeWhatOthers';
import AddNotes from './components/AddNotes';
import GetMyNotes from './components/GetMyNotes';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";




function App() {

  const styleObject = {
    div:{
      background: "antiqueWhite"
    }
  }
  return (

  <div style={styleObject.div} >
      
  <Router>
    <div >
    <Navbar />
    <Switch>
      <Route exact path='/Home' >
        <Home />
      </Route>
      <Route exact path="/AddNotes">
        <AddNotes />
      </Route>
      <Route exact path="/GetMyNotes" >
        <GetMyNotes />
      </Route>
      <Route exact path="/SeeWhatOthers" >
        <SeeWhatOthers />
      </Route>
      
    
    </Switch>
   </div>
  </Router>
  </div>
)

}

export default App;
