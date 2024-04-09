/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

function Locate({}: Props) {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-2 bg-slate-800">
        <div className="row-span-full col-span-full grid grid-cols-1 grid-rows-1 h-96 w-full relative items-center justify-center">
          <div className="row-span-full  col-span-full bg-red-200 bg-hero-pattern bg-cover bg-center w-full h-full brightness-50">
            <Image
              className="object-cover w-full h-full"
              width={1280}
              height={400}
              alt="Banner image"
              src={"/images/hero-banner.jpg"}
            />
          </div>
          <div className="row-span-full col-span-full z-10">
            <div className="flex flex-col justify-center items-center space-y-3">
              <div className="space-y-8">
                <div className="max-w-[900px]">
                  <h1 className="text-[6vw] my-4 md:text-5xl  text-gray-50  text-center font-bold ">
                    Un problème de note ? Retrouve le fichier qu'il te faut
                  </h1>
                  <p className="text-xl text-gray-200 block text-center m-0">
                      Retrouvez facilement vos notes des sessions de cc SN et rattrapages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-start-2 col-span-full -mb-48 w-full self-center">
          <form>
            <div className="flex shadow-xl w-7/12 mx-auto rounded-xl brightness-100 bg-white">
              <input
                type="text"
                className="px-8 py-6 border-none w-full outline-none rounded-l-xl focus:ring-0"
                placeholder="Le nom d'un fichier..."
              />
              <div className="flex justify-center items-center mr-2">
                <Button>Rechercher</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Locate;
