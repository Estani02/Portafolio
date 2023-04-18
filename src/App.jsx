import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/NavBar/NavBar';
import { Pdf } from './components/Pdf/index.jsx';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      {/* {location.pathname === '/' ? undefined : <NavBar />} */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cv-estanislao-olmedo' element={<Pdf />} />
      </Routes>
      
    </div>
  );
}

export default App;
