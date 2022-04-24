import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(res.data.msg);
      router.push("/");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="bodyCss p-4 lg:p-0 h-screen flex justify-center items-center">
      <div className="border-2 border-[#537895] text-gray-100 font-Josefin  w-[30rem] p-10">
        <h1 className="text-3xl text-center mb-8">Login Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label>-: Email :-</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="conInp py-3 rounded-lg "
            />
          </div>
          <div className="space-y-2">
            <label>-: Password :-</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="conInp py-3 rounded-lg "
            />
          </div>
          <div className="flex justify-center ">
            <button
              disabled={!email || !password}
              className="bg-[#537895] scaleAnim rounded-lg px-6 py-2 mt-6 disabled:cursor-not-allowed"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
