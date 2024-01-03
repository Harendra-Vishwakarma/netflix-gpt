import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/userSlice";
import { auth } from "../utils/firebase";
import { checkLoginData } from "../utils/validation";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = () => {
    const errorMessage = checkLoginData(
      email.current.value,
      password.current.value
    );
    setError(errorMessage);
    if (errorMessage) return;

    if (isSignInForm) {
      //signIn  logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage);
        });
    } else {
      //signUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
              console.log(user);
              navigate("/browse");
            })
            .catch((error) => {
              console.log("Error while Updating profile");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-lg"
      >
        <h1 className="text-2xl py-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <p className="text-red-700">{error != null && error}</p>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter name"
            className="p-2 my-3 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email address"
          className="p-2 my-3 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-3 w-full  bg-gray-700"
        />
        <button
          onClick={handleSubmit}
          className="p-3 my-5 bg-red-700 w-full rounded-lg"
        >
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
