import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/captain/logout`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.removeItem("token");
            navigate("/captain-login");
          }
        })
        .catch((error) => {
          console.error("Error logging out", error);
        });
    } else {
      navigate("/captain-login");
    }
  }, [navigate]);
  return <div>Logging out...</div>;
};

export default CaptainLogout;
