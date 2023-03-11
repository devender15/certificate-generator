import React, { useState } from "react";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "../utils/toast";

import { LockClosedIcon } from "@heroicons/react/20/solid";

import Logo from "../assets/logo.png";

const Register = () => {
  const [user, setUser] = useState({
    fname: "",
    phone: "",
    email: "",
    password: "",
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // creating the user
    await createUserWithEmailAndPassword(auth, user?.email, user?.password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user);
        notify(toast, "A verification link is sent to your email!", "success");
      })
      .catch((error) => {
        const errorMessage = error.message;
        notify(toast, errorMessage, "error");
      });
      
      // resetting all the values
      setUser({
        fname: '',
        phone: '',
        email: '',
        password: '',
      })
  };

  return (
    <div className="h-screen sm:w-full md:w-[40%] mx-auto flex justify-center items-center">
      <div className="flex min-h-1/2 w-full bg-gray-50 rounded-lg shadow-md items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src={Logo}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="fname" className="sr-only">
                  Full name
                </label>
                <input
                  id="fname"
                  name="fname"
                  type="text"
                  value={user?.fname}
                  onChange={(e) => setUser({ ...user, fname: e.target.value })}
                  autoComplete="name"
                  required
                  className="relative bg-white block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={user?.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  autoComplete="email"
                  required
                  className="relative bg-white block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={user?.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  autoComplete="phone"
                  required
                  className="relative bg-white block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Phone number"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={user?.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  autoComplete="current-password"
                  required
                  className="relative bg-white block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Create account
              </button>
            </div>
          </form>
          <div className="my-2 flex items-center space-x-2">
            <p className="text-black text-sm">Already have an account ?</p>
            <Link
              to="/login"
              className="text-blue-800 text-sm hover:underline hover:underline-offset-2"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
