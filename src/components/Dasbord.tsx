"use client";

// @/components/Layout/Sidebar.js
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SlHome } from "react-icons/sl";
import { BsInfoSquare, BsEnvelopeAt } from "react-icons/bs";
import { IconType } from "react-icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = {
  show: boolean;
  setter: (val: unknown) => void;
};
export default function Sidebar({ show, setter }: Props) {
  const router = usePathname();

  // Define our base class
  const className =
    "w-[250px] min-h-[100vh] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  // Append class based on state of sidebar visiblity
  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  // Clickable menu items
  const MenuItem = ({
    Icon,
    name,
    route,
  }: {
    Icon: IconType;
    name: string;
    route: string;
  }) => {
    // Highlight menu item based on currently displayed route
    const colorClass = router === route ? "" : "text-white/50 hover:text-white";

    return (
      <Link
        href={route}
        onClick={setter}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{<Icon />}</div>
        <div>{name}</div>
      </Link>
    );
  };

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex bg-black/20   md:hidden fixed top-0 right-0 bottom-0 left-0 z-100`}
      onClick={setter}
    />
  );

  return (
    <div className="relative">
      <div className={`${className}${appendClass} bg-blue-500`}>
        <div className="p-2 flex">
          <Link href="/">
            <h1 className="text-xl text-center font-bold p-2 uppercase">
              Course Program
            </h1>
          </Link>
        </div>
        <div className="flex gap-3 flex-col px-2">
          <MenuItem name="Home" route="/" Icon={SlHome} />
          <MenuItem name="About Us" route="/about" Icon={BsInfoSquare} />
          <MenuItem name="Contact" route="/contact" Icon={BsEnvelopeAt} />
          <Button>Text Btn</Button>

          <Input type="email" placeholder="Email" />
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </div>
  );
}
