import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div
        className="
        container
        flex flex-col flex-wrap
        px-4
        py-16
        mx-auto
        md:items-center
        lg:items-start
        md:flex-row md:flex-nowrap
      "
      >
        <div className="flex-shrink-0 min-w-64 mx-auto text-center md:mx-0 md:text-left max-w-[500px]">
          <Link href={"/"} className="text-2xl text-white">
            DigiatalCampus
          </Link>
          <p className="mt-2 text-xs text-justify text-gray-400">
            Digital Campus, votre portail vers une expérience éducative
            numérique intégrée ! Du partage d'informations à la création
            hebdomadaire de programmes par les administrateurs, en passant par
            la récupération aisée des relevés de notes, Digital Campus offre une
            connectivité transparente au cœur de l'apprentissage. Ensemble,
            façonnons le futur de l'éducation digitale !
          </p>
          {/* <div className="flex mt-4">
            <Input type="email" placeholder="Email" />
            <Button variant="destructive">Subscribe</Button>
          </div> */}
          {/* <div className="flex justify-center mt-4 space-x-4 lg:mt-2">
            <Link href={""}>
              <Facebook className="text-blue-500" />
            </Link>
            <Link href={""}>
              <Twitter className="text-sky-300" />
            </Link>
            <Link href={""}>
              <Instagram className="text-pink-500" />
            </Link>
            <Link href={""}>
              <Linkedin className="text-blue-400" />
            </Link>
          </div>{" "}
          * */}
        </div>
        <div className="justify-between w-full mt-4 text-center lg:flex">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-100">
              Produits et Services
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link href={"/"} className="text-gray-300">
                  Campus Explorer
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Locate Note App
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Course Planing
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-100">
              À Propos de Nous
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link href={"/"} className="text-gray-300">
                  Équipe
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-12">
        <p className="text-center text-white pb-2">
          @2024 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
