import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
const Header = () => {
  const nevigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        nevigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-48  "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      {user && (
        <div className="flex m-4  justify-items-center">
          {user.displayName ? (
            <h1 className="text-2xl mx-2">{user.displayName} </h1>
          ) : (
            <h1 className="text-2xl mx-2">{user.email}</h1>
          )}
          <button onClick={handleLogout} className="bg-red-400 px-2 rounded-xl">
            LogOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
