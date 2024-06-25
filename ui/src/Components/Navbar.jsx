import { React, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import { logo } from "../assets/Index";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="py-0 lg:px-[5px] px-4 lg:flex  justify-center lg:items-center fixed top-0 z-50 bg-gray-300 md:bg-[#163083] w-full ">
      <div className="flex justify-between items-center lg:w-[130px] w-full">
        <a href="/">
          <img src="/bags.jpg" alt="" className="h-16 w-16 p-1 rounded-full" />
        </a>
        <div
          className="md:max-w-[480px] lg:hidden mx-4 my-4 cursor-pointer shadow-sm shadow-neutral-500 p-2 hover hover:scale-125 text-black md:text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      <div
        className={`${isMenuOpen ? "block" : "hidden"}
        md:static md:min-h-fit min-h-fit relative left-0 top-[100%] md:w-auto w-full lg:block`}
      >
        <div
          className="flex lg:space-x-4 lg:flex-row flex-col lg:items-start left-0 md:gap-[2vw] gap-4 m-4 p-2 font-mediumbold scroll-smooth  md:text-white text-black "
          onClick={toggleMenu}
        >
          <div className="relative gap-2 hidden md:flex">
            <input
              type="search"
              placeholder="Search"
              className="font- text-sm border border-gray-400 px-3 outline-none text-black focus:border-blue-500"
            />
            <button
              className="z-[2] inline-block border text-sm bg-yellow-200 text-black px-3 py-1 rounded"
              type="submit"
            >
              Search
            </button>
          </div>

          <Link
            to="cart/"
            className={`text-[16px] transition-all hover:border-t-2 hover:border-solid hover:border-white ${
              activeLink === "/cart" ? "text-black border-t-2 border-white" : ""
            }`}
            onClick={() => handleNavLinkClick("/cart")}
          >
            Cart
          </Link>
          <select
            className="bg-white text-blue-700 px-2 py-1 w-fit text-sm"
            name=""
            id=""
          >
            <option value="" className="font-poppins bg-blue-300">
              Help
            </option>
            <option>
              <Link to="">Desk </Link>{" "}
            </option>
            <option>Order</option>
          </select>
          <div className="">
            <Link to="login/">Account</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
