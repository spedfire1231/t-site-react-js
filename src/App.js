import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import NavBar from './components/Navbar/NavBar'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/UI/AppRouter';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <AppRouter />
    </BrowserRouter>
  );
}

export default App;
