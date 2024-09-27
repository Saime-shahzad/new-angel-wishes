import { useEffect } from 'react';
import './App.css';
import { Index } from './pages/main/Index';
import { useLocation } from 'react-router-dom';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';



function App() {
  const location = useLocation();


  useEffect(() => {
      window.AOS.init({
          duration: 1000,
          offset: 200,
      });
  }, [location]);

   
  return (
    <div className="">
      {/* <AppRoutes /> */}
      {/* <Home /> */}
      {location.pathname === "/sign-in" ? <SignIn /> : location.pathname === "/sign-up" ? <SignUp /> :
      
      <Index />
      }
       
    </div>
  );
}

export default App;
