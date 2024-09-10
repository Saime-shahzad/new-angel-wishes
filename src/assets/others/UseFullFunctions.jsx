import { useNavigate } from "react-router-dom";

const useRoutFunction = () => {
    const navigate = useNavigate();

    const RoutFunction = (route) => {
        console.log("route>>", route);
        if (route) {
            navigate(route);
        }
    };

    return RoutFunction;
};

export default useRoutFunction;