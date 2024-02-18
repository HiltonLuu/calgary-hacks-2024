import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";
export default function Foot() {
  return (
    <div className="h-56 bg-blue-800 flex justify-evenly items-center text-white">
      <div className="flex flex-col gap-4 text-white">
        <div className="text-2xl">CareNest</div>
        <div className="text-lg">Email: contact@carenest.com</div>
        <div className="text-lg">(123)-456-7890</div>
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
