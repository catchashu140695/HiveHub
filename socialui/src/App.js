import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './Pages/Login/login.jsx'
import Register from './Pages/Register/register.jsx'
import Navbar from './Components/Navbar/navbar.jsx'
import Leftbar from './Components/Leftbar/leftbar.jsx'
import Home from './Pages/Home/home.jsx'
import Profile from './Pages/Profile/profile.jsx'

function App() {

  const currentUser = true;
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Login"></Navigate>
    }
    return children;
  }

  const Layout = () => {
    return (
      <ProtectedRoute>
        <Navbar />
        <div className='app'>
          <Leftbar />
          <div className='home'>
          <Outlet />
          </div>  
        </div>
      </ProtectedRoute>
    )
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
