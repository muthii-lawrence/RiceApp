import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import Card from "antd";
import axios from "axios";

const Profile = () => {
  const [inputs, setInputs] = useState({
    names: "",
    email: "",
    address: "",
    location: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({
        inputs,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // if (response.status === 200) {
    //   alert("Registration successful");
    //   navigate("/login");
    // } else {
    //   alert("Please try again");
    // }
    console.log(response);
  }

  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };
  // const handleSubmit = async (e) => {
  //   e.preventdefault();
  //   try {
  //     const res = await axios.post("http://localhost:4000/register", inputs);
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="flex max-w-4xl w-full items-center justify-center mx-auto md:h-screen lg:py-0">
      <form
        className=" mx-auto px-3 py-2 md:px-8 md:py-6 border border-gray-300 rounded max-w-2xl w-full"
        onSubmit={handleSubmit}
      >
        {" "}
        <div className="mb-4">
          <label
            for="names"
            className="block text-sm font-medium text-gray-900 mb-2"
          >
            Full Names
          </label>
          <input
            type="text"
            name="names"
            id="names"
            onChange={handleChange}
            className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="john doe"
            required=""
          />
        </div>
        <div className="mb-4">
          <label
            for="email"
            className="block text-sm font-medium text-gray-900 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="name@company.com"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            // value={inputs.phones}
            onChange={handleChange}
            className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="eg. +254 795684016"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium mb-2">
            Physical Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            // value={inputs.address}
            onChange={handleChange}
            className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="eg. 100 - 10300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            // value={inputs.location}
            onChange={handleChange}
            className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="eg. Mwea"
            required
          />
        </div>
        <div>
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 text-white bg-blue-500 hover:bg-[#49bef0] font-medium rounded-2xl text-sm px-5 py-2 text-center"
        >
          register
        </button>
        <div className="my-4 flex items-center justify-center"></div>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-500 hover:underlin"
          >
            login
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Profile;
