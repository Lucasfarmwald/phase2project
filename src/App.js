import LovePoems from './components/Love';
import Navbar from './components/Navbar';
import FunnyPoems from './components/Funny';
import FetchPosts from './components/FetchPosts';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
   
    <>
  <Router>
    <Navbar />
  <Routes>
    <Route exact path='/Love' component={LovePoems} />
    <Route exact path='/Funny' component={FunnyPoems} />
    <Route exact path='/FetchPosts' component={FetchPosts} />


    
  </Routes>
  </Router>
  </>
)

}

export default App;
