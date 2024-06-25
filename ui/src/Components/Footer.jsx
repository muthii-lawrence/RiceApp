import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaRegCopyright, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex justify-center items-center bg-[#163083] text-white">
      <div className="my-6">
        <Link
          to="contact/"
          className="flex justify-center items-center text-[26px] my-2 font-serif"
        >
          Contact Us
        </Link>
        <div className="text-white flex justify-center items-center text-[25px] gap-10 my-4  rounded-xl bg-black py-2 ">
          <Link
            to="https://www.facebook.com/murage.lawrenzilia"
            target="_blank"
          >
            <FaFacebookF className="hover hover:scale-125" />
          </Link>
          <Link to="https://twitter.com/murage_lao" target="_blank">
            <FaXTwitter />{" "}
          </Link>
          <Link to="https://ig.me/m/murage-lao" target="_blank">
            <FaInstagram />
          </Link>
          <Link to="https://wa.me/+254795684016" target="_blank">
            <FaWhatsapp />
          </Link>
        </div>
        <div className="flex justify-center items-center text-white">
          Copyright
          <span className="px-1">
            <FaRegCopyright className="text-white text-[13px]" />{" "}
          </span>
          2024 Leta Mchele Ltd. All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
