import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import { Pdf } from './components/Pdf/index.jsx';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cv-estanislao-olmedo' element={<Pdf />} />
      </Routes> 
    </div>
  );
}

export default App;
