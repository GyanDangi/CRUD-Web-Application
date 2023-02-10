import logo from './logo.svg';
import './App.css';
import Adduser from './components/Adduser.jsx';
import Navbar from './components/Navbar';
import CodeforInterview from './components/CodeforInterview';
import Alluser from './components/Alluser';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter >
        <Navbar/>  
        <Routes>
          <Route path='/'element={<CodeforInterview/>} />
          <Route path='/all' element={ <Alluser/>}  />
          <Route path='/add' element= {<Adduser/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
