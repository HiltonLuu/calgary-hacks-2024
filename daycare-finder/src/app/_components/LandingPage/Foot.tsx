import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
export default function Foot() {
  return (
    <div className="h-80 bg-rose-400 flex justify-evenly items-center text-black pb-12 pt-4">
      <div className="flex flex-col gap-4 ">
        {/* <div className="text-2xl">CareNest</div> */}
        <img src="/assets/logo.png" className="w-32" />
        <div className="text-lg flex gap-2 items-center">
          <IoMailSharp /> contact@carenest.com
        </div>
        <div className="text-lg flex gap-2 items-center">
          <FaPhoneAlt /> (123)-456-7890
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-lg">About</div>
        <div className="text-lg">Host Now</div>
        <div className="text-lg">Contact page</div>
      </div>
      <div className="flex flex-row gap-3">
        <FaFacebook size={25} />
        <FaInstagram size={25} />
        <FaTwitter size={25} />
      </div>
    </div>
  );
}
