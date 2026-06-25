import axios from "axios";
import { setAuth } from "../slices/AuthSlice";
import toast from "react-hot-toast";

export const loginApi = (loginData, setSuccess, setError, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        loginData
      );

      const data= response.data
      console.log("loginapi",data)
      if (response.status === 200) {
        // Handle successful login
        toast.success(data.message)
        setSuccess("Login Successful");
        setError(null); // Clear error
        console.log("Login Successful:", response.data);
          dispatch(setAuth(data.user ))
        // Redirect to another page after successful login
        navigate("/"); // Replace '/dashboard' with your desired route
      }
    } catch (err) {
      // Handle error response
      setSuccess(null); // Clear success message
      if (err.response) {
        const errorMsg = err.response.data.message || "Something went wrong";
        setError(errorMsg);
        toast.error(errorMsg);
      } else {
        const errorMsg = "Network error or server is not responding";
        setError(errorMsg);
        toast.error(errorMsg);
      }
      console.log("Login Error:", err);
    }
  };
};


export const register = (loginData, setSuccess, setError, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/register",
        loginData
      );

      const data= response.data
      console.log("loginapi",data)
      if (response.status === 200) {
        toast.success(data.message)
        // Handle successful login
        setSuccess("Login Successful");
        setError(null); // Clear error
        console.log("Login Successful:", response.data);
          dispatch(setAuth(data.user ))
        // Redirect to another page after successful login
        navigate("/login"); // Replace '/dashboard' with your desired route
      }
    } catch (err) {
      // Handle error response
      setSuccess(null); // Clear success message
      if (err.response) {
        const errorMsg = err.response.data.message || "Something went wrong";
        setError(errorMsg);
        toast.error(errorMsg);
      } else {
        const errorMsg = "Network error or server is not responding";
        setError(errorMsg);
        toast.error(errorMsg);
      }
      console.log("Login Error:", err);
    }
  };
};

