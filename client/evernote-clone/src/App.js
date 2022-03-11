import './App.css';
import {Route, Routes} from 'react-router-dom'

import LoginPage from './login/Login';
import LandingPage from './components/Landing';
import NotesPage from './notes/Notes';
import MainNav from './components/layout/MainNav';

function App() {
  
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/notes' element={<NotesPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
