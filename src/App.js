import { useEffect } from 'react';
import './App.css';
import { Index } from './pages/main/Index';
import { useLocation } from 'react-router-dom';
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// import SignIn from './pages/signIn/SignIn';
// import SignUp from './pages/signUp/SignUp';



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
    
      
      <Index />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
       
    </div>
  );
}

export default App;
