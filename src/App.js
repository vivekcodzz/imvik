import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import Work from './Work';
import Writing from './Writing';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<About/>}></Route>
      <Route path='work' element={<Work/>}></Route>
      <Route path='writing' element={<Writing/>}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
