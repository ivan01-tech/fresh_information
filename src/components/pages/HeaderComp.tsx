"use client";
import React, { useState } from "react";
import SearchBar from "../coustom/SearchComp";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";

export const people = ["Contact", "A Propos"];

export const listItems = people.map((person) => (
  <li key={person} className=" cursor-pointer rounded">
    <Link
      href="#"
      className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
    >
      {person}
    </Link>
  </li>
));

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container fixed  top-0 left-0 right-0 h-auto m-auto p-3 flex justify-between items-center">
      <h1 className="font-xl font-bold text-white text-2xl">CampusExplorer</h1>
      <SearchBar></SearchBar>
      <nav className={isOpen ? "flex " : " hidden md:flex "}>
        <ul className="flex md:bg-inherit bg-white  absolute md:relative flex-col md:flex-row w-full shadow md:shadow-none text-center top-16 left-0 md:top-0  md:flex">
          {listItems}
          <li className="flex ">
            <a
              href="#"
              className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              Sign in
            </a>

            <a
              href="#"
              className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              login
            </a>
          </li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button
          //   className="flex justify-center items-center"
          onClick={toggleNavbar}
          id="nav"
          className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
        >
          <IoMenuSharp></IoMenuSharp>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
