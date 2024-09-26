import { useEffect } from 'react';
import './App.css';
import { Index } from './pages/main/Index';
import { useLocation } from 'react-router-dom';



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
       
    </div>
  );
}

export default App;
