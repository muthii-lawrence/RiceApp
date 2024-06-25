import React from "react";
import { Link } from "react-router-dom";
// import { Rice } from "../assets/Index";

const Herosection = () => {
  return (
    <section className="h-fit font-comfortaa relative mt-14">
      <div className="absolute inset-0">
        <img
          src="../bags.jpg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
        />
      </div>
      <div className="max-w-6xl mx-auto  flex justify-center items-center mt-10 py-4">
        <div className="text-center h-fit relative">
          <h1 className="text-blue-950 font-bold text-3xl md:text-5xl md:mt-16">
            Premium Pure Mwea <br />
            Pishori!
          </h1>

          <Link to="/Order">
            <button className=" py-1 px-6 flex  justify-center items-center m-auto mt-10 mb-0 border-2 bg-white border-blue-800 hover:border-[#2f2e57] hover:shadow-sm hover:shadow-[#2f2e57] hover:scale-[106%] text-black text-xl font-bold relative">
              Order Now
            </button>
          </Link>
          <div className="flex flex-wrap gap-10 my-10">
            <img
              className="flex items-center justify-center m-auto w-40 h-40 rounded-full"
              src="../gunia3.jpeg"
              alt="image one"
            />
            <img
              className="flex items-center justify-center m-auto w-40 h-40 rounded-full"
              src="../gunia1.png"
              alt="image one"
            />{" "}
            <img
              className="flex items-center justify-center m-auto w-40 h-40 rounded-full"
              src="../gunia2.jpeg"
              alt="image one"
            />
          </div>
          <h4 className="text-green-950 font-serif font-bold mb-10 text-3xl">
            Experience the taste of quality
            <br /> with every grain
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
