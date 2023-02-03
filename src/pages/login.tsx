import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Lottie from "lottie-react";
import { IoAtSharp, IoLockClosedOutline } from "react-icons/io5";
import loginAnimation from "../../public/login.json";
import axios from "axios";
import { useAtom } from "jotai";
import { isOperatorAtom, userAtom } from "@/state";
import { toast } from "react-hot-toast";

const Login: NextPage = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [operator, setOperator] = useState<boolean>(false);
  const [operatorState, setOperatorState] = useAtom(isOperatorAtom);
  const [user, setUser] = useAtom(userAtom);
  const router = useRouter();

  const handleLogin = async () => {
    await axios
      .post(`${operator ? "operator/" : ""}login`, {
        email,
        password,
      })
      .then((res: any) => {
        if (res.data.status === "success") {
          setOperatorState(operator);
          setUser({
            id: res.data.user.id,
            name: res.data.user.name,
            email: res.data.user.email,
            token: res.data.authorisation.token,
          });
          toast.success("Login was successfull! Please wait to be redirected.");

          setTimeout(() => {
            router.push(`${operator ? "/operator" : "/"}`);
          }, 3000);
        }
      })
      .catch((err) =>
        toast.error("Login failed. Please check your credentials.")
      );

    setPassword("");
    setEmail("");
    setOperator(false);
  };

  return (
    <div className="grid grid-cols-2 h-screen overflow-auto ">
      <div className="bg-gradient-to-r from-blue-500 to-blue-300 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="flex flex-col justify-center w-2/3 h-fit  gap-8 m-auto p-10  rounded-lg bg-white"
        >
          <h1 className="text-2xl mb-4">Firstly, you need to login.</h1>
          <div className="flex flex-col gap-2  justify-center ">
            <label className="text-lg text-slate-500 flex items-center gap-2">
              <IoAtSharp />
              Email
            </label>
            <input
              placeholder="Enter the email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="transition-all duration-500 ring-0 border border-slate-300 rounded-lg px-2 py-3 outline-none bg-opacity-30 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:rounded"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2  justify-center ">
            <label className="text-lg text-slate-500 flex items-center gap-2">
              <IoLockClosedOutline />
              Password
            </label>
            <input
              placeholder="Enter the password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="transition-all duration-500 ring-0 border border-slate-300 rounded-lg px-2 py-3 outline-none bg-opacity-30 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:rounded"
              type="password"
            />
          </div>
          <label>
            <input
              type="checkbox"
              checked={operator}
              onChange={() => setOperator((current) => !current)}
            />{" "}
            Are you an operator?
          </label>
          <button
            type="submit"
            className="transition-all duration-500 border-2 border-blue-900 bg-blue-900 outline-none text-white text-xl uppercase rounded-lg p-2 tracking-wide hover:bg-white hover:rounded hover:tracking-widest hover:text-blue-900 "
          >
            login
          </button>
        </form>
      </div>

      <div className="bg-gradient-to-l  from-blue-500  to-blue-300 flex justify-center items-center ">
        <Lottie animationData={loginAnimation} />
      </div>
    </div>
  );
};

export default Login;
