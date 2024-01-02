import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Bg_image"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-lg">
        <h1 className="text-2xl py-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter name"
            className="p-2 my-3 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="email address"
          className="p-2 my-3 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 my-3 w-full  bg-gray-700"
        />
        <button className="p-3 my-5 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="p-2 my-1 cursor-pointer">
          {!isSignInForm
            ? "Already have account? Sign In Now"
            : "New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
