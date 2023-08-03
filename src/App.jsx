import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import {NoMatch} from "./pages/NoMatch.jsx";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NoMatch/>}/>
        </Routes>
      </Router>
  );
}

export default App;
