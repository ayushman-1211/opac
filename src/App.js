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

const App = () => {


  return (
<Router>
      <Routes>
        <Route path="/" element={<Agent />} />
        <Route path="/rank" element={<Rank/>} />
      </Routes>
    </Router>
  );
}

export default App;
