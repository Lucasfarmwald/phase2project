
import Navbar from './components/Navbar';
import DogPic from './components/Love';
import FetchPosts from './components/FetchPosts';
import SeeWhatOthers from './components/SeeWhatOthers';
import Post from './components/Post';
import FetchYourData from './components/FetchYourData';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home';



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
      <Route exact path="/DogPic" >
        <DogPic/>
      </Route>
      <Route exact path="/Post">
        <Post />
      </Route>
      <Route exact path="/FetchYourData" >
        <FetchYourData />
      </Route>
      <Route exact path="/SeeWhatOthers" >
        <SeeWhatOthers />
      </Route>
      <Route exact path='/FetchPosts' component={FetchPosts} />


    
    </Switch>
   </div>
  </Router>
  </div>
)

}

export default App;
