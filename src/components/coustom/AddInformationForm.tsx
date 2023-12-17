import { AiOutlineDelete } from "react-icons/ai";
import React, { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Select as ChakraSelect } from "@chakra-ui/react";
import { MdDelete, MdWorkspacesOutline } from "react-icons/md";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { levels, niveaux, schoolList } from "@/utils/LevelDetailsList";

type Props = {};
type SchoolAdded = {
  school: string;
  filiere: string;
  niveau: string;
};
const initialState = {
  school: "",
  filiere: "",
  niveau: "",
};
function AddInformationForm({}: Props) {
  const [images, setImage] = useState<File[]>([]);
  const [currentSchoolAdd, setCurrentSchoolAdd] =
    useState<SchoolAdded>(initialState);
  const [schoolAdded, setSchoolAdded] = useState<SchoolAdded[]>([]);
  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files && e.target.files[0];
    if (image) {
      setImage((prev) => [...prev, image]);
    }
  };
  const filterLevelList = useMemo(
    function () {
      const levels =
        schoolList.find((school) => school.short() == currentSchoolAdd.school)
          ?.levels || [];

      const levelBySchool = levels.filter(
        (level) => Number(level.niveau) == Number(currentSchoolAdd.niveau)
      );

      const levelByLevel = levelBySchool.filter(
        (level) => Number(level.niveau) == Number(currentSchoolAdd.niveau)
      );

      return levelByLevel;
    },
    [currentSchoolAdd]
  );

  const onAddClassHandler = function () {
    console.log("currentSchoolAdd : ", currentSchoolAdd);
    setSchoolAdded((prev) => [...prev, currentSchoolAdd]);
    setCurrentSchoolAdd(initialState);
  };
  console.log(filterLevelList);

  const canAddaaClass =
    Boolean(currentSchoolAdd.niveau) && Boolean(currentSchoolAdd.school)
      ? true
      : false;

  return (
    <form action=" " className="flex !h-auto flex-col gap-3 ">
      <div className="grid gap-2 my-2">
        <Label htmlFor="email">
          Title <span className="text-red-500 text-[.7rem]">*</span>
        </Label>

        <Input
          // {...register("email", { required: true })}
          id="email"
          className="!p-0 h-8 focus:outline-none"
          type="email"
          placeholder=""
        />
        {/* {errors.email && (
            <p className="text-red-500 text-[.7rem]">
              {errors.email.message}
            </p>
          )} */}
      </div>

      <div className="grid gap-2 my-2">
        <Label htmlFor="description">
          Description <span className="text-red-500 text-[.7rem]">*</span>
        </Label>

        <Textarea id="description" />
        {/* {errors.email && (
            <p className="text-red-500 text-[.7rem]">
              {errors.email.message}
            </p>
          )} */}
      </div>

      <div className="grid gap-2 my-2">
        <p className="my-2">Ajouter une classe</p>
        <div className="rounded-md p-3 my-2 border-2 border-gray-200 border-dashed flex flex-wrap">
          {!schoolAdded.length ? (
            <div className="flex bg-gray-50 p-3 rounded-md justify-center items-center flex-col space-y-2 text-gray-700  w-full">
              <MdWorkspacesOutline className="text-xl opacity-30 text-gray-700" />
              <p className="text-gray-700 opacity-30 text-xs">
                {" "}
                Pas encore de classe créer{" "}
              </p>
            </div>
          ) : (
            schoolAdded.map((classe, ind) => {
              const school = schoolList.find(
                (school) => school.short() == classe.school
              );
              const filier = school?.levels?.find(
                (level) => level.value == classe.filiere
              );

              return (
                <div
                  key={school?.long}
                  className="flex w-full gap-4 space-x-1 max-w-[400px] items-center justify-center"
                >
                  <div className="relative w-full group my-4 rounded-md p-3 border-2 border-gray-200 bg-gray-200 bg-opacity-20 text-gray-700 hover:border-gray-400 duration-200 items-center justify-center">
                    <h1 className="text-md font-bold">{filier?.label}</h1>

                    <p className="text-[8px]">{school?.long}</p>
                    <div className="absolute group-hover:translate-x-0 opacity-0 group-hover:opacity-100 -translate-x-16 flex space-x-2 right-2 text-xl top-1 duration-200">
                      <button
                        type="button"
                        onClick={() => {
                          setSchoolAdded((prev) =>
                            prev.filter((s, i) => i !== ind)
                          );
                        }}
                        className="flex justify-center rounded-md items-center w-8 h-8 bg-red-500 bg-opacity-25 text-red-500 border-2 cursor-pointer duration-100 border-red-500 hover:bg-opacity-100 hover:text-white"
                      >
                        <AiOutlineDelete className="text-md hover:scale-105 duration-200 " />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="flex flex-wrap  gap-3">
          <div className="grid gap-2 my-2">
            <Label htmlFor="">Ajouter une école/faculté :</Label>

            <ChakraSelect
              onChange={(e) => {
                console.log("first change : ", e);
                setCurrentSchoolAdd((prev) => ({
                  ...prev,
                  school: e.target.value,
                }));
              }}
              value={currentSchoolAdd.school}
              placeholder="Choisir une Université"
            >
              {schoolList.map((item) => (
                <option key={item.long} value={item.short()}>
                  {item.long}
                </option>
              ))}
            </ChakraSelect>
          </div>

          <div className="grid gap-2 my-2">
            <Label htmlFor="">ajouter un niveau :</Label>

            <ChakraSelect
              onChange={(e) => {
                setCurrentSchoolAdd((prev) => ({
                  ...prev,
                  niveau: e.target.value,
                }));
                console.log("first change : ", currentSchoolAdd.niveau);
              }}
              value={currentSchoolAdd.niveau}
              placeholder="Choisir un niveau"
            >
              {niveaux.map((level) => (
                <option key={level.label} value={level.code}>
                  {level.label}
                </option>
              ))}
            </ChakraSelect>
          </div>
          <div className="grid gap-2 my-2">
            <Label htmlFor="">Ajouter filière :</Label>
            <ChakraSelect
              disabled={!currentSchoolAdd.school}
              placeholder="Choisir une filière"
              value={currentSchoolAdd.filiere}
              onChange={(e) => {
                setCurrentSchoolAdd((prev) => ({
                  ...prev,
                  filiere: e.target.value,
                }));

                console.log("current : ", e.target.value, currentSchoolAdd);
              }}
            >
              {filterLevelList &&
                filterLevelList.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
            </ChakraSelect>
          </div>
        </div>
        <div className="grid gap-2 my-2">
          <Button
            onClick={onAddClassHandler}
            disabled={!Boolean(currentSchoolAdd.filiere)}
            className={`w-max `}
            type="button"
          >
            Ajouter la classe
          </Button>
        </div>
      </div>

      <div className=" min-h-[400px] w-full">
        <div className="container mx-auto  h-full">
          {/* <!-- file upload modal --> */}
          <article
            aria-label="File Upload Modal"
            className="relative h-full flex flex-col bg-white shadow-xl rounded-md"
          >
            {/* <!-- scroll area --> */}
            <section className="h-full overflow-auto p-8 w-full flex flex-col">
              <label
                htmlFor="hidden-input"
                className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center"
              >
                <Input
                  id="hidden-input"
                  type="file"
                  onChange={handleAddImage}
                  accept="image/*"
                  className="hidden"
                />
                <p
                  id="button"
                  className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                >
                  Choisir une image
                </p>
              </label>

              <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                Images à uploader
              </h1>

              <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                {images.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {images.map((image, ind) => (
                      <div key={image.name} className="relative">
                        <Image
                          width={100}
                          height={100}
                          src={URL.createObjectURL(image)}
                          alt=""
                        />
                        <button
                          onClick={() => {
                            setImage((prev) =>
                              prev.filter((img, k) => k != ind)
                            );
                          }}
                          className="absolute p-1 top-0 left-0 m-2 text-white bg-red-600 rounded"
                        >
                          <MdDelete></MdDelete>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <li
                    id="empty"
                    className="h-full w-full text-center flex flex-col items-center justify-center "
                  >
                    <img
                      className="mx-auto w-32"
                      src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                      alt="no data"
                    />
                    <span className="text-small text-gray-500">
                      Aucun fichier choisi
                    </span>
                  </li>
                )}
              </ul>
            </section>

            {/* <!-- sticky footer --> */}
            <footer className="flex justify-end px-8 pb-8 pt-4">
              <button
                id="submit"
                className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
              >
                Uploader Maintenant
              </button>
              <button
                id="cancel"
                type="button"
                onClick={() => {
                  setImage([]);
                }}
                className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
              >
                Annuler
              </button>
            </footer>
          </article>
        </div>
      </div>

      {/* <!-- using two similar templates for simplicity in js code --> */}
      <template id="file-template">
        <li className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
          <article className="group w-full h-full rounded-md focus:outline-none focus:shadow-outline elative bg-gray-100 cursor-pointer relative shadow-sm">
            <img
              alt="upload preview"
              className="img-preview hidden w-full h-full sticky object-cover rounded-md bg-fixed"
            />

            <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
              <h1 className="flex-1 group-hover:text-blue-800"></h1>
              <div className="flex">
                <span className="p-1 text-blue-800">
                  <i>
                    <svg
                      className="fill-current w-4 h-4 ml-auto pt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                    </svg>
                  </i>
                </span>
                <p className="p-1 size text-xs text-gray-700"></p>
                <button className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md text-gray-800">
                  <svg
                    className="pointer-events-none fill-current w-4 h-4 ml-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="pointer-events-none"
                      d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                    />
                  </svg>
                </button>
              </div>
            </section>
          </article>
        </li>
      </template>

      <template id="image-template">
        <li className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
          <article className="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
            <img
              alt="upload preview"
              className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed"
            />

            <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
              <h1 className="flex-1"></h1>
              <div className="flex">
                <span className="p-1">
                  <i>
                    <svg
                      className="fill-current w-4 h-4 ml-auto pt-"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                    </svg>
                  </i>
                </span>

                <p className="p-1 size text-xs"></p>
                <button className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                  <svg
                    className="pointer-events-none fill-current w-4 h-4 ml-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="pointer-events-none"
                      d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                    />
                  </svg>
                </button>
              </div>
            </section>
          </article>
        </li>
      </template>

      <Button
        className="w-[80%] m-auto mt-4 mb-4 bg-green-700 text-white"
        type="submit"
      >
        {" "}
        Enregistrer l&apos;information
      </Button>

      {/* <div className="grid  w-full lg:max-w-sm items-center gap-1.5">
        <Label
          className="w-full h-[250px] border-[2px] border-forthColor rounded-md !border-dashed"
          htmlFor="picture"
        >
          <div className="w-full flex flex-col justify-center items-center text-forthColor/40 font-bold h-full gap-3">
            <p className="text-3xl">
              <SlCloudUpload></SlCloudUpload>
            </p>
            <p>
              clicquer pour importer une image relatif à l&apos;information{" "}
            </p>
          </div>
        </Label>
        <Input
          id="picture"
          type="file"
          className="file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 hidden"
        />
      </div> */}
    </form>
  );
}

export default AddInformationForm;
