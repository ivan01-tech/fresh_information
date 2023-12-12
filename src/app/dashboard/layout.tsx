"use client";
import { usePathname } from "next/navigation";
import useToggle from "@/hooks/useToggle";
import Sidebar, { SidebarLink } from "@/components/Dasbord";
import { MdMenu } from "react-icons/md";
import { IoIosArrowForward, IoMdHome } from "react-icons/io";
import { LuUserCircle } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Mobile sidebar visibility state
  const router = usePathname();
  const [showSidebar, setShowSidebar] = useToggle(false);

  const title = SidebarLink.find((prev) => prev.path == router)?.title;
  console.log("passed", title, router);

  return (
    <div className="flex">
      {/* <MenuBarMobile setter={setShowSidebar} /> */}

      <Sidebar show={showSidebar} setter={setShowSidebar} />

      <div className="flex-1 flex flex-col p-2 min-h-[100vh]">
        <header className="p-2 flex gap-2 flex-col border-s shadow-sm justify-center">
          <div className="text-sm flex justify-between items-center ">
            <div className="flex gap-1 items-center">
              <button
                onClick={setShowSidebar}
                className="text-4xl text-gray-400 !bg-none items-center flex mr-4 "
              >
                <MdMenu />
              </button>
              <div className="text-2xl text-gray-600">
                <IoMdHome></IoMdHome>
              </div>
              <div className="flex gap-1 items-center text-gray-400">
                <IoIosArrowForward />
                <span className="text-[.7rem]">{title}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-1 items-center">
                <LuUserCircle></LuUserCircle>
                <span className="text-[.7rem] text-slate-500">Profile</span>
              </div>
              <div className="flex gap-1 text-white items-center py-2 px-4 bg-red-400 rounded">
                <FiLogOut></FiLogOut>
                <span className="text-[.7rem]">Logout</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary capitalize">
              {title}
            </h2>
          </div>
        </header>
        <main className="bg-slate-100 flex-1 ">{children}</main>
      </div>
    </div>
  );
}
