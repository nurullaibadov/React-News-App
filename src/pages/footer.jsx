import React from "react";
import post from "../assets/post.png";
import { FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className="flex">
      <div className="footer-left bg-gray-200 w-[50%] p-10 rounded-r-[80px]">
        <div className="footer-head flex">
          <div className="mega">
            <h2 className="text-2xl capitalize">mega news</h2>
            <p className=" w-[98%] mt-4 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin
            </p>
            <h3 className="text-2xl capitalize">Newsletters</h3>
            <input
              type="text"
              className=" w-96 py-4 px-3 mt-4 mb-4  text-xl  rounded-lg bg-white"
              placeholder="Write your email"
            />
            <IoIosMail className="relative top-[-60px] left-[88%] text-3xl" />
          </div>
          <div className="categories pl-16 ">
            <h2 className=" text-2xl mb-6">Categories</h2>
            <ul>
              <li>
                <a href="#">Culture </a>
              </li>
              <li className="my-2">
                <a href="#">Fashion</a>
              </li>
              <li>
                <a href="#">Featured </a>
              </li>
              <li className="my-2">
                <a href="#">Food</a>
              </li>
              <li>
                <a href="#">Healthy Living </a>
              </li>
              <li className="my-2">
                <a href="#">Technology</a>
              </li>
            </ul>
            <h1 className=" text-2xl capitalize w-[150%] mt-6">
              social network
            </h1>
            <div className="btn flex mt-4">
              <button className="bg-gradient-to-r from-purple-400 text-white text-xl pb-1 to-pink-500 w-36 h-12 rounded-[20px]">
                Instagram
              </button>
              <button className="bg-gradient-to-r  from-cyan-500 to-blue-500 w-16 h-12 mx-5 pl-5 rounded-[20px]">
                <FaTwitter className="text-white text-2xl" />
              </button>
            </div>
          </div>
        </div>
        <footer className="flex justify-between p-5 rounded-3xl bg-gray-300">
          <p className=" capitalize">privacy policy | terms & conditions</p>
          <p className=" capitalize">all copyright (c) 2022 reserved</p>
        </footer>
      </div>
      <div className="footer-right flex">
        <div className="Comments p-6">
          <h1 className="text-3xl mt-[-10px] ml-1 mb-6">New Comments</h1>
          <div className="partition-1 p-4 w-82 rounded-t-3xl bg-gray-200">
            <h3 className="capitalize text-xl pb-2">ellsmartx</h3>
            <p className="capitalize">
              how nice does this look 😍 I feel it should be delicious, thank
              you
            </p>
          </div>
          <div className="partition-2  p-4 w-82 h-32 rounded-b-3xl bg-gray-200">
            <h3 className="capitalize text-xl pb-2">cassia</h3>
            <p>
              Take a rest, i'll be cheer up you again in 2 next game go go go
            </p>
          </div>
          <div className="partition-3  w-82 h-24 p-4 rounded-3xl bg-gray-200 mt-4 mb-8">
            <h3 className="capitalize text-xl pb-2">amanda</h3>
            <p>you were stunning today, jan! 💗 great match 👍🏽👍🏽</p>
          </div>
          <div className="partition-4  w-82 h-24 p-4 rounded-3xl bg-gray-200">
            <h3 className="capitalize text-xl pb-2">Denis Simonassi</h3>
            <p>It was a great match today Janzi! You did great😉🇩🇪</p>
          </div>
        </div>
        <div className="follow">
          <h1 className="text-3xl mb-6 mt-4">Follow on instagram</h1>
          <img src={post} className="h-96 w-96" alt="image path problem" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
