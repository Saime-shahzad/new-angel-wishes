import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useRoutFunction = () => {
    const navigate = useNavigate();

    const RoutFunction = (route) => {
        console.log("route>>", route);
        if (route) {
            navigate(route);
        }
    };

    return RoutFunction;
};





const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
