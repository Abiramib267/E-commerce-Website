import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useUser } from "../context/UserContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogin = (data) => {
    const userData = {
      name: data.username,
      token: "fake-token-123", 
    };
    setUser(userData);
    localStorage.setItem("token", userData.token);
    navigate("/"); 
  };

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
      }}
    >
      <h1>Login</h1>
      <AuthForm onSuccess={handleLogin} />
    </div>
  );
}
