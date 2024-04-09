"use client";
import Banner2 from "@/components/pages/Banner2";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    (async () => {
      try {
        const userStats = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URI}/auth/status`,
          {
            method: "GET",
            credentials: "include", // Include credentials (cookies)
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((response) => response.json());

        console.log("userStats", userStats);
      } catch (err) {
        console.log("error fetching:", err);
      }
    })();
  }, []);

  return (
    <div>
      <Banner2 />
    </div>
  );
}
