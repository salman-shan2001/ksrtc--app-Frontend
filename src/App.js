import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>

<Route path='/' element={<SignUp/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
