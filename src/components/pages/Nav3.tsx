import {
  Image,
  Flex,
  HStack,
  chakra,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import DrawerExample from "./Nav2";
import { Button } from "../ui/button";
import { listItems } from "./HeaderComp";
import SearchBar from "../coustom/SearchComp";
import Link from "next/link";

const CTA = "Get Started";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  return (
    <>
      <header className="p-3 fixed top-0 left-0 right-0">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 text-slate-300 mr-16 flex-1">
            <span className="font-semibold text-xl tracking-tight">
              DigitalCampus
            </span>
          </div>

          <Link
            href={"#"}
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-600  hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
          >
            contact
          </Link>
          <Link
            href="/sign-up"
            className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
          >
            Sign in
          </Link>

          <Link
            href="/log-in"
            className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
          >
            login
          </Link>

          <Button
            className="flex bg-transparent items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
            ref={btnRef}
            onClick={onOpen}
          >
            <IoMdMenu size="26px" />
          </Button>
        </div>
      </header>

      <DrawerExample
        isOpen={isOpen}
        onClose={onClose}
        width={250}
        btnRef={btnRef}
        footer={null}
        p={0}
      >
        <div className=" !w-[250px]">
          <ul className="w-full  m-0  list-none p-0">
            <li className="w-full">
              <a className=" text-xl w-full cursor-pointer truncate rounded-[5px] px-4 py-2 text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 flex ">
                Contact
              </a>
            </li>

            <li className="w-full">
              <a className=" text-xl w-full cursor-pointer truncate rounded-[5px] px-4 py-2 text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 flex ">
                A Propos
              </a>
            </li>
          </ul>

          <div className="flex ">
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
          </div>
        </div>
      </DrawerExample>
    </>
  );
}
