import { useNavigate } from "react-router-dom";
import { setToken } from "../services/auth";
import { useEffect } from "react";
import axiosInstance from "../services/axios";

export function useLogin({ userData }) {
  const navigate = useNavigate();

  useEffect(() => {
    const login = async () => {
      try {
        const response = await axiosInstance.post("/auth", userData);
        const token = response.data.token;
        setToken(token);
        navigate("/app/users");
      } catch (error) {
        navigate("/");
      }
    };
    login();
  }, [navigate, userData]);
}
