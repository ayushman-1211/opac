import logo from './logo.svg';
import Agent from './comp/agents/agent.component';
import './App.css';
import './cate.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Rank from "./Rank"

const New = () =>{
  return(
    <h1> hyy </h1>
  );
}


const App = () => {


  return (
<Router>
      <Routes>
        <Route path="/" element={<Agent />} />
        <Route path="/rank" element={<Rank/>} />
        <Route path="/new" element={<New/>}/>
      </Routes>
    </Router>
  );
}

export default App;
