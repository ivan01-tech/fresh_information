/* eslint-disable react/no-unescaped-entities */
import { GithubIcon, Link as LinkIcon, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

type Props = {};

function contact({}: Props) {
  return (
    <div className="m-auto flex flex-col gap-6 my-10 max-w-[1028px] w-full px-4">
      <section className="pt-10 w-full border-b pb-3 mb-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold my-3 tracking-tight lg:text-5xl">
          Rencontrer L'équipe
        </h1>
        <p>Voici ceux qui contribuent au développement de cette application</p>
      </section>

      <div className="w-full justify-center flex flex-wrap gap-8 flex-col md:flex-row">
        {/* contributor */}

        <div className="flex flex-col   p-4 flex-1  gap-4 hover:bg-slate-200 rounded-sm max-w-[600px]">
          <div className="flex gap-3 items-center">
            <Image
              width={500}
              height={500}
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="/images/photo_ivan.jpeg"
              alt="Ivan image"
            />
            <div>
              <h2 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
                Ivan Silatsa
              </h2>
              <h4>Développeur Fullstack</h4>
              <p>Cameroun</p>
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <Link
              href="https://www.linkedin.com/in/ivan-silatsa-581152264/"
              className="flex items-center justify-center uppercase gap-4 px-4 py-2  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Linkedin className="text-white" />
              Me suivre
            </Link>

            <div className="flex gap-3">
              <Link
                href="http://ivan01-tech.vercel.app/"
                className="inline-flex rounded-full items-center px-3 py-3 text-sm font-medium text-center text-black bg-slate-300  hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <LinkIcon />
              </Link>
              <Link
                href="https://github.com/ivan01-tech"
                className="inline-flex rounded-full items-center px-3 py-3 text-sm font-medium text-center text-black bg-slate-300  hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <GithubIcon></GithubIcon>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col   p-4 flex-1  gap-4 hover:bg-slate-200 rounded-sm max-w-[600px]">
          <div className="flex gap-3 items-center">
            <Image
              width={500}
              height={500}
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="/images/photo_ivan.jpeg"
              alt="Ivan image"
            />
            <div>
              <h2 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
                Ivan Silatsa
              </h2>
              <h4>Développeur Fullstack</h4>
              <p>Cameroun</p>
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <Link
              href="https://www.linkedin.com/in/ivan-silatsa-581152264/"
              className="flex items-center justify-center uppercase gap-4 px-4 py-2  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Linkedin className="text-white" />
              Me suivre
            </Link>

            <div className="flex gap-3">
              <Link
                href="http://ivan01-tech.vercel.app/"
                className="inline-flex rounded-full items-center px-3 py-3 text-sm font-medium text-center text-black bg-slate-300  hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <LinkIcon />
              </Link>
              <Link
                href="https://github.com/ivan01-tech"
                className="inline-flex rounded-full items-center px-3 py-3 text-sm font-medium text-center text-black bg-slate-300  hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <GithubIcon></GithubIcon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
