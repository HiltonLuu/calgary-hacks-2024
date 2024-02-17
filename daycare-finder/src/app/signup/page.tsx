"use client";
import React, { useContext, useState } from "react";
// import { useUserContext } from "../context/userContext";
import { UserContext } from "../context/userContext";
const useUserContext = () => useContext(UserContext);
import { FcGoogle } from "react-icons/fc";
export default function Signup() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // ARE YOU READING THIS?
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("signin");
    if (type === 0 && step === 0) {
      // If type is 0 and step is 0, proceed with initial signup step
      try {
        await emailCheck({
          email: formData.email,
        });
        setStep(1); // Move to the next step after successful email check
        console.log("Signup success, proceed to next step");
      } catch (error) {
        console.error("Signup error:", error);
        // setError(error.message);
        // Handle errors (e.g., show error message)
      }
    } else if (type === 1) {
      // If type is 1, proceed with login
      try {
        await emailSignIn(formData.email, formData.password);
        console.log("Login success");
        // Optionally, redirect the user or show a success message
      } catch (error) {
        console.error("Login error:", error);
        // Handle errors (e.g., show error message)
      }
    }
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    if (type === 0 && step === 1) {
      // If type is 0 and step is 1, proceed with email signup
      try {
        await emailSignUp({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        });
        console.log("Signup complete");
        // Optionally, redirect the user or show a success message
        // You might want to navigate to a different page or reset the form
      } catch (error) {
        console.error("Email signup error:", error);
        // Handle errors (e.g., show error message)
      }
    }
  };
  const { googleSignIn, emailSignUp, emailSignIn, checkError, emailCheck } =
    useUserContext();
  return (
    <div className="min-h-screen bg-primary-blue-100 ">
      <div className=" px-10 py-6">
        <img src="" alt="" className="w-52 cursor-pointer" />
      </div>
      <div className="mt-12 flex h-full justify-center ">
        <div className="rounded-4xl flex h-3/4 w-3/5 bg-white p-4 shadow-lg">
          {/* Left side */}
          <div className="relative  w-1/2 grow px-10 py-4 flex justify-center items-center">
            <img src="" className="bottom-12 h-96" />
          </div>
          {/* Right Side */}
          {step == 0 ? (
            <>
              {" "}
              <div className="shadow-deep-inner flex h-full w-1/2 flex-col  items-center rounded-2xl p-4">
                <div className="flex w-56 overflow-hidden rounded-xl border-2">
                  <div
                    onClick={() => setType(0)}
                    className={`duration-400 w-full cursor-pointer px-4 py-2 text-center text-lg transition hover:bg-purple-400 hover:text-white ${
                      type == 0 ? "bg-purple-400 text-white" : ""
                    }`}
                  >
                    Sign Up
                  </div>
                  <div
                    onClick={() => setType(1)}
                    className={`duration-400 w-full cursor-pointer px-4 py-2 text-center text-lg transition hover:bg-purple-400 hover:text-white ${
                      type == 1 ? "bg-purple-400 text-white" : ""
                    }`}
                  >
                    Log In
                  </div>
                </div>
                {/* {error && <div className="error">{error}</div>} */}

                <form
                  onSubmit={handleSubmit}
                  className={`mt-8 flex  w-full flex-col gap-3  ${
                    type == 0 ? "" : "h-52"
                  }`}
                >
                  <div className="flex  flex-col gap-2">
                    <label htmlFor="email" className="label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={"rounded-lg border-2 px-3 py-2 outline-none"}
                    />
                  </div>
                  {type == 1 && (
                    <div className="flex flex-col gap-2 mt-6">
                      {" "}
                      <label htmlFor="password" className="label">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className={"rounded-lg border-2 px-3 py-2 outline-none"}
                      />
                    </div>
                  )}
                  <button
                    type="submit"
                    className="bg-purple-400 mt-3 rounded py-2 font-semibold text-white transition duration-100 hover:brightness-110"
                  >
                    {type === 0 ? "Continue" : "Log In"}
                  </button>
                </form>

                <div className="mt-20 flex w-full items-center justify-center ">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 flex-shrink text-sm text-gray-600">
                    Or
                  </span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <button
                  onClick={googleSignIn}
                  className="mt-4 flex w-full items-center justify-center rounded-lg border bg-white px-4 py-2 shadow-sm hover:bg-gray-50"
                >
                  <FcGoogle className="mr-6" size={20} />
                  <div className="text-lg">Continue with Google</div>
                </button>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="shadow-deep-inner flex  w-1/2 flex-col  items-center rounded-2xl p-4">
                <form onSubmit={handleFinalSubmit}>
                  <div className="flex  gap-2">
                    <div className="flex w-1/2 flex-col gap-2">
                      <label htmlFor="firstName" className="label">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={"rounded-lg border-2 px-3 py-2 outline-none"}
                      />
                    </div>

                    <div className="flex w-1/2 flex-col gap-2">
                      <label htmlFor="lastName" className="label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={"rounded-lg border-2 px-3 py-2 outline-none"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-6">
                    {" "}
                    <label htmlFor="password" className="label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className={"rounded-lg border-2 px-3 py-2 outline-none"}
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-purple-400 mt-8 rounded py-2 font-semibold text-white transition duration-100 hover:brightness-110 w-full"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
