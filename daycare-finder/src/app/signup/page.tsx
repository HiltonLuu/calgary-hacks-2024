import React from "react";
import { useUserContext } from "../context/userContext";

export default function Signup() {
  const { googleSignIn, emailSignUp, emailSignIn, checkError, emailCheck } =
    useUserContext();
  return <div>hello</div>;
}
