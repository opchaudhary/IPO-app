// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header'
import Dashboard from './components/MainDashboard';
import { AuthProvider } from './context/AuthContext';
import AuthGuard from './guards/AuthGaurd';
const App = () => {


  return ( 
<>
<AuthProvider>
    <Router>
      <div >
      <Header/>
      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route element={<AuthGuard/>} >
        <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
      </div>
    </Router>
   </AuthProvider>
    </>
  );
};

export default App;
