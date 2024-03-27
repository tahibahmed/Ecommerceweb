import React from 'react';
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div className="bg-slate-300 flex w-full h-screen">
        <div className="w-full flex items-center justify-center md:w-1/2">
          <form>
            <div className="px-10 py-10 rounded-3xl border-2 bg-white border-gray-100">
              <h1 className="text-5xl text-center font-semibold">Signup</h1>
              <div className="mt-8">
              <div>
                  <label htmlFor="name" className="text-lg font-medium">
                   User Name
                  </label>
                  <input
                    className="w-full border-2 borer-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your User Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-lg font-medium">
                    Email
                  </label>
                  <input
                    className="w-full border-2 borer-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                  />
                </div>
                <div>
                  <div>
                    <label htmlFor="password" className="text-lg font-medium">
                      Password
                    </label>
                    <input
                      className="w-full border-2 borer-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your Password"
                    />
                  </div>
                  <button className="font-medium text-base text-violet-500 mt-8">
                    Forgot Passowrd
                  </button>
                </div>
  
                <div className="mt-5">
                  <button className="bg-violet-500 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl w-full text-white text-lg font-bold">
                    Create Account
                  </button>
                  <p className="mt-2">
                    {" "}
                    <Link to={"/login"}>
                      Already Account ? Login here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden relative md:flex h-full w-1/2 items-center justify-center bg-gray-200">
          <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full  animate-spin"></div>
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
        </div>
      </div>
    )
}

export default Register;