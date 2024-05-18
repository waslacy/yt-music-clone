import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//components
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Playbar from './components/Playbar/Playbar'

//pages
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="main-content">
          <Sidebar />

          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>

        {false && <Playbar />}
      </BrowserRouter>
    </div>
  );
}

export default App;
