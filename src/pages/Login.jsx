import React, { useState } from "react";
import { useAuth } from "../components/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Simulate user authentication with hardcoded credentials
    const validUsername = "juha";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
      const user = { username: validUsername };
      login(user);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex gap-x-3">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-gray-700">Login</h1>
          <p className="font-medium text-slate-500 mb-8">
            Welcome, Please enter your details
          </p>
          <div>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="*****"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm font-semibold text-center mb-5">
                {error}
              </p>
            )}

            <button
              onClick={handleLogin}
              className="bg-gray-700 w-full h-10 px-6 font-semibold rounded-md text-white"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
