"use client";
import { Inter } from "next/font/google";
import "../app/globals.css";
import useToggle from "@/hooks/useToggle";
import { SidebarLink } from "@/components/Dasbord";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Mobile sidebar visibility state
  const router = usePathname();
  const [showSidebar, setShowSidebar] = useToggle(false);
  console.log("passed", showSidebar, setShowSidebar);

  const title = SidebarLink.find((prev) => prev.path == router)?.title;

  return (
    <html lang="en">
      <body className={inter.className + "bg-slate-100"}>{children}</body>
    </html>
  );
}
