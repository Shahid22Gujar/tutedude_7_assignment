import { Suspense,lazy } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/Navbar';
import {Routes,Route} from 'react-router'
import Home from './Components/Home';
const FormComponent = lazy(() => import('./Components/Form'));
const About = lazy(() => import('./Components/About'));

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<Suspense fallback={<div>Loading.....</div>}><FormComponent/></Suspense>} />
        <Route path='/about' element={<Suspense fallback={<div>Loading.....</div>}><About/></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
