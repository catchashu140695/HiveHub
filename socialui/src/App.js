import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login/login.jsx'
import Register from './Pages/Register/register.jsx'
import Navbar from './Components/Navbar/navbar.jsx'
import Leftbar from './Components/Leftbar/leftbar.jsx'
import Rightbar from './Components/Rightbar/rightbar.jsx';
import Home from './Pages/Home/home.jsx'
import Profile from './Pages/Profile/profile.jsx'

function App() {

  const currentUser=true;

  const ProtectedRoute=({children})=>{
    if(!currentUser)
    {
      return <Navigate to="/Login"></Navigate>
    }
    return children;
  }



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={() => {
            return (
              <>
              <ProtectedRoute>
                <Navbar />
                <div style={{ display: "flex" }}>
                  <Leftbar />
                  <div style={{width:"50%"}}>
                    <Home />
                  </div>
                  
                  <Rightbar />
                </div>
                </ProtectedRoute>
              </>
            )
          }}></Route>
          <Route path='/login' Component={() => {
            return (
              <Login></Login>
            )
          }} ></Route>
          <Route path='/register' Component={() => {
            return (
              <Register></Register>
            )
          }} ></Route>
          <Route path='/profile' Component={() => {
            return (
              <>
                <Navbar />
                <div style={{ display: "flex" }}>
                  <Leftbar />
                  <div style={{width:"50%"}}>
                    <Profile />
                  </div>
                  <Rightbar />
                </div>
              </>
            )
          }} ></Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
