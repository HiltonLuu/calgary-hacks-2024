"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "../context/userContext";
import { useRouter } from "next/navigation";
import { IoPerson } from "react-icons/io5";
import SearchBar from "./SearchBar";
const useUserContext = () => useContext(UserContext);
export default function Navbar() {
  const router = useRouter();
  const [popup, setPopup] = useState(false);
  const { currentUser, logout } = useUserContext();
  //   const isResultsPage = router.pathname === "/results";
  //   console.log(isResultsPage);
  return (
    <div className="flex justify-between px-12 py-0 items-center bg-white ">
      {/* <div className="text-xl">CareNest</div> */}
      <img
        src="/assets/newLogo.png"
        className="w-28 cursor-pointer"
        onClick={() => router.push("/")}
      />

      <div className="text-lg flex gap-12 items-center">
        <ul className="flex gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
        {currentUser && currentUser.username ? (
          <>
            <div
              className="border-2 text-lg rounded-xl px-3 py-2 cursor-pointer hover:bg-gray-100 transistion duration-100 ease-in "
              onClick={() => router.push("/auth/daycare-owner/onboarding")}
            >
              Switch to Hosting
            </div>
          </>
        ) : (
          <>
            {/* <div className="border-2 text-lg rounded-xl px-3 py-2 cursor-pointer">
              Nest Your Home
            </div> */}
          </>
        )}
        <div className="flex gap-4">
          <div className="flex border-2 px-5 relative rounded-xl py-2 cursor-pointer hover:bg-gray-100 transition duration-100 ease-in">
            {" "}
            <button
              onClick={() => {
                setPopup((prev) => !prev);
              }}
            >
              <IoPerson size={25} />
            </button>
            {popup && (
              <div className="flex flex-col absolute top-16 left-[-64px] bg-red w-40 shadow-xl p-4 gap-4 rounded-xl z-10 bg-white">
                {currentUser && currentUser.username ? (
                  <>
                    <div
                      className="text-lg p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={logout}
                    >
                      {" "}
                      Log Out
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="text-lg p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => router.push("/login")}
                    >
                      Log In
                    </div>
                    <div
                      className="text-lg p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => router.push("/signup")}
                    >
                      Sign Up
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* <button>Log In</button>
          <button className="rounded-2xl hover:brightness-110 transition ease-in duration-200 px-4 py-2 border-2 button bg-blue-400 text-white">
            Dashboard
          </button> */}
        </div>
      </div>
    </div>
  );
}
