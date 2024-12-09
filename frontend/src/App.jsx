import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserSignUp from "./pages/UserSignUp";
import Login from "./pages/Login";
import CaptainLogin from "./pages/CaptainLogin";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
// import CaptainSignUp from "./pages/CaptainSignUp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        {/* <Route path="/captain-signup" element={<CaptainSignUp />} /> */}
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
