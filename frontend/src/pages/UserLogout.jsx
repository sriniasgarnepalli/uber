import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.removeItem("token");
            navigate("/login"); // Navigate to login page after logout
          }
        })
        .catch((error) => {
          // Optionally handle error if logout request fails
          console.error("Error logging out", error);
        });
    } else {
      // If no token is found, just navigate to login
      navigate("/login");
    }
  }, [navigate]); // `navigate` is a dependency, ensuring it's stable

  return <div>Logging out...</div>;
};

export default UserLogout;
