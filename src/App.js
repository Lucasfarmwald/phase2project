import LovePoems from './components/Love';
import Navbar from './components/Navbar';
import FunnyPoems from './components/Funny';
import FetchPosts from './components/FetchPosts';
import Post from './components/Post';
import FetchYourData from './components/FetchYourData';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home';



function App() {
  return (


    <>

      
  <Router>
    <div>
    <Navbar />
    <Switch>
      <Route path='/Home' >
        <Home />
      </Route>
      <Route path="/LovePoems" >
        <LovePoems />
      </Route>
      <Route exact path="/Post">
        <Post />
      </Route>
      <Route exact path="/FetchYourData" >
        <FetchYourData />
      </Route>
      <Route exact path='/Funny' component={FunnyPoems} />
      <Route exact path='/FetchPosts' component={FetchPosts} />


    
    </Switch>
   </div>
  </Router>
  </>
)

}

export default App;
