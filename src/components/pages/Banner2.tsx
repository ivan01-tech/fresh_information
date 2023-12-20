import React from "react";

type Props = {};

function Banner2({}: Props) {
  return (
    <div
      className="w-full bg-cover bg-center min-h-[100vh]"
      style={{
        height: "32rem",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
      }}
    >
      <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-80">
        <div className="text-center">
          <h1
            className="text-white text-2xl font-bold capitalize md:text-5xl px-16 "
            style={{ wordSpacing: "1rem", lineHeight: "1.3" }}
          >
            Transformez votre Expérience Académique avec{" "}
            <span className="underline text-blue-400">CampusExplorer</span> -
            Votre Référence Ultime pour l&apos;Information !
          </h1>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Démarrez la Recherche !
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
