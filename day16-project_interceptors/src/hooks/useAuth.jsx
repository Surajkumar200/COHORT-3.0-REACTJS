import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthStore } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const useAuth = () => {

      let navigate = useNavigate();
      const { registerdUsers, setRegisterdUsers,loggedInUsers, setLoggedInUsers } =
        useContext(AuthStore);
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const registerdUsersSubmit = (data) => {
        console.log("Register submitted:", data);
        let arr = [...registerdUsers, data];
        setRegisterdUsers(arr);
        localStorage.setItem("registeredUser", JSON.stringify(arr));
        setLoggedInUsers(data);
        localStorage.setItem("loggedInUser", JSON.stringify(data));

        toast.success("user Register successfully");
        reset();
        navigate("/main");
    };
    
     const loggedInUsersSubmit = (data) => {
       console.log("Login submitted:", data);

       let user = registerdUsers.find((val) => {
         return val.email === data.email && val.password === data.password;
       });

       if (!user) {
         toast.error("Invalid cre or user not found ");
         reset();
         return;
       }

       setLoggedInUsers(user);
       localStorage.setItem("loggedInUser", JSON.stringify(user));
       toast.success("user LoggedIn ");
       reset();
       navigate("/main");
     };
    


    return {
      register,
        handleSubmit,
        errors,
      navigate ,
        registerdUsersSubmit,
      loggedInUsersSubmit,
      registerdUsers,
      setRegisterdUsers,
      loggedInUsers,
        setLoggedInUsers,
    
    };
}