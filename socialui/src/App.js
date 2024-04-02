import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/login.jsx'
import Register from './Pages/Register/register.jsx'

function App() {

  return (
    <>
    
      <BrowserRouter>
        
        <Routes>
          <Route path='/' Component={() => {
            return (
              <Login />
            )
          }}></Route>
          <Route exact path='/login' Component={() => {
            return (
              <Login />
            )
          }}></Route>
          <Route exact path='/register' Component={() => {
            return (
              <Register />
            )
          }}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
