import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password
    });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9lZFwvMTg4MTFcL2M0YWEwMGFkZDg0MmMyYzAxMmFiYzljOGQwZjI3ZDY1LTE2MjQzODUwOTguc3ZnIn0:postmates:OjicWr3Vd8E0jiG7blub9mF1JjPCJVb69cMbQNt_z74?width=2400"
          alt="uber logo"
          className="w-20 mb-7"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="email@example.com"
            autoComplete=""
          />
          <h3 className="text-xl mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            autoComplete=""
          />
          <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
