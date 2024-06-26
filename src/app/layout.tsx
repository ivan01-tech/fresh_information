"use client";
import "../app/globals.css";
import useToggle from "@/hooks/useToggle";
import { SidebarLink } from "@/components/Dasbord";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import Header from "@/components/pages/Nav3";

import Footer from "@/components/pages/Footer";
import Navbar from "@/components/pages/NaviagtionMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Mobile sidebar visibility state
  const router = usePathname();
  const [showSidebar, setShowSidebar] = useToggle(false);

  const title = SidebarLink.find((prev) => prev.path == router)?.title;
  const pathnam = usePathname();
  const cantShowHeader = ["auth/signup", "auth/login"].includes(pathnam);
  console.log("path: ", pathnam, cantShowHeader);

  return (
    <html lang="en">
      <NextTopLoader
        color="rgb(255, 108, 34)"
        initialPosition={0.08}
        crawlSpeed={200}
        height={10}
        crawl={true}
        // showSpinner={true}
        easing="ease"
        speed={400}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
      <body className={"bg-slate-50  "}>
        <ChakraProvider>
          {/* {cantShowHeader && <Header></Header>} */}
          {/* {<Header />} */}
          <Navbar />
          {children}

          {/* {cantShowHeader && <Footer />} */}
          {<Footer />}
        </ChakraProvider>
        <Toaster />
      </body>
    </html>
  );
}
