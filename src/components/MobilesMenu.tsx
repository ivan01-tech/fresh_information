"use client";

// @/components/Layout/MenuBarMobile.js
import React from "react";
import Link from "next/link";
import { FiMenu as Icon } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

export default function MenuBarMobile({
  setter,
}: {
  setter: (val: unknown) => void;
}) {
  return (
    <nav className="md:hidden z-20 fixed top-0 left-0 right-0 h-[60px] bg-black flex [&>*]:my-auto px-2">
      <button className="text-4xl flex " onClick={setter}>
        <Icon />
      </button>
      <Link href="/" className="mx-auto">
        <h1>Course Program</h1>
      </Link>
      <Link className="text-3xl flex " href="/login">
        <FaUser />
      </Link>
    </nav>
  );
}
