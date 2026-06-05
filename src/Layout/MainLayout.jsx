  import react,{useState} from 'react'

  import { Outlet } from 'react-router-dom';
  import Navbar from '../myComponent/Navbar';
  import Footer from '../myComponent/Footer';
  import Login from '../myComponent/Login.jsx';

  const MainLayout = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLogin =()=>{
      setShowLogin(!showLogin);
    }
    return (
      <>
      <div>
        <Navbar handleLogin={handleLogin}/>
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      {
        showLogin && <Login handleLogin={handleLogin}/>
      }
      </>
    )
  }

  export default MainLayout