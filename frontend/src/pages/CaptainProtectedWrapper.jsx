import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainDataContext";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);

  // Initialize loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If no token, redirect to login page
    if (!token) {
      navigate("/captain-login");
      return;
    }

    // Fetch captain profile
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false); // Set loading to false once data is fetched
        }
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
        navigate("/captain-login");
      });
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
