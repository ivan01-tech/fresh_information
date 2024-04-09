/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "../ui/button";

import Link from "next/link";

type Props = {};
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { FiUser, FiLogOut } from "react-icons/fi";
import { MdPerson, MdExitToApp } from "react-icons/md";
import Image from "next/image";

// Profile Icons
const ProfileIcon1 = <FaUserCircle />;
const ProfileIcon2 = <FiUser />;
const ProfileIcon3 = <MdPerson />;

// Logout Icons
const LogoutIcon1 = <FaSignOutAlt />;
const LogoutIcon2 = <FiLogOut />;
const LogoutIcon3 = <MdExitToApp />;

const Navbar = (props: Props) => {
  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();
  return (
    <nav
      style={{
        backgroundColor: "#3A6376",
      }}
      className="w-full lg:px-8  py-3 sticky top-0 z-10 border-gray-100  text-gray-800 "
    >
      {" "}
      <div className="w-full flex justify-between ">
        <div className="lg:hidden flex">
          <div className="flex items-center flex-shrink-0 text-slate-300 mr-16 flex-1">
            <span className="font-semibold text-xl tracking-tight">Locate</span>
          </div>
        </div>
        <div className="lg:flex w-3/4 space-x-4 hidden">
          <div className="flex">
            <div className="flex items-center flex-shrink-0 text-slate-300 mr-16 flex-1">
              <span className="font-semibold text-xl tracking-tight">
                Locate
              </span>
            </div>
          </div>
        </div>

        {/* */}

        {/*  */}
        <div className="hidden  justify-end lg:flex gap-4 ">
          <div className="flex items-center space-x-2 ">
            <Link
              href="/products"
              className="flex my-auto duration-200 hover:text-secondary"
            >
              <p> A propos </p>
            </Link>

            <Button className="rounded duration-300 hover:bg-gradient-to-tl bg-gradient-to-br from-primary to-green-500 font-bold text-white">
              <Link href={"/sign-in"}>Téléverser un document</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
