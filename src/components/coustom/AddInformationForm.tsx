/* eslint-disable @next/next/no-img-element */
// / <reference types="firebase" />
import { AiOutlineDelete } from "react-icons/ai";
import React, { useMemo, useState } from "react";
import { Select as ChakraSelect } from "@chakra-ui/react";
import { MdDelete, MdWorkspacesOutline } from "react-icons/md";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { niveaux, schoolList } from "@/utils/LevelDetailsList";
import { useForm } from "react-hook-form";
import {
  InformationCreationSchema,
  InformationCreationType,
} from "@/model/Information";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../../../firebase";
import { toast } from "react-hot-toast";

type Props = {};

type SchoolAdded = {
  school: string;
  filiere: string;
  niveau: string;
};
// initial state to add and information
const initialState = {
  school: "",
  filiere: "",
  niveau: "",
};
function AddInformationForm({}: Props) {
  // Destructuring properties from react-hook-form
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<InformationCreationType>({
    resolver: zodResolver(InformationCreationSchema),
  });

  // State for handling errors and loading state
  const [error, setError] = useState<string | null>(null);
  const [Loading, setLoading] = useState<boolean>(false);

  // State for managing image files and URLs
  const [images, setImage] = useState<File[]>([]);
  const [imagesUrl, setImageUrl] = useState<string[]>([]);

  // State for the current school information being added
  const [currentSchoolAdd, setCurrentSchoolAdd] =
    useState<SchoolAdded>(initialState);

  // State for storing the list of added schools
  const [schoolAdded, setSchoolAdded] = useState<SchoolAdded[]>([]);

  // Event handler for adding an image
  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files && e.target.files[0];
    if (image) {
      setImage((prev) => [...prev, image]);
    }
  };

  // Memoized function for filtering the list of levels based on the selected school
  const filterLevelList = useMemo(() => {
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
  }, [currentSchoolAdd]);

  // Event handler for adding a class to the list
  const onAddClassHandler = () => {
    console.log("currentSchoolAdd : ", currentSchoolAdd);
    setSchoolAdded((prev) => [...prev, currentSchoolAdd]);
    setCurrentSchoolAdd(initialState);
  };
  console.log(filterLevelList);

  // Check if a class can be added based on selected school and level
  const canAddaaClass =
    Boolean(currentSchoolAdd.niveau) && Boolean(currentSchoolAdd.school)
      ? true
      : false;

  // Event handler for uploading images to Firestore
  const handleUplaodeImage = async () => {
    // Check if images are selected
    if (images.length === 0) {
      setError("Veuillez choisir au moins un fichier");
      return;
    }

    setLoading(true);

    // Upload each image
    const uploadPromises = images.map(async (file) => {
      const storage = getStorage(app);
      const storageRef = ref(storage, "images/" + file.name);
      return uploadBytesResumable(storageRef, file);
    });

    try {
      // Wait for all uploads to complete
      const uploadSnapshots = await Promise.all(uploadPromises);

      // Get download URLs for the uploaded images
      const urlsArr = uploadSnapshots.map(async (file) => {
        return getDownloadURL(file.ref);
      });

      // Wait for all URLs to be retrieved
      const downloadURLs = await Promise.all(urlsArr);

      // Reset error, clear image selection, and update image URLs
      setError(null);
      setImage([]);
      toast.success("Les images ont bien été uploader");
      setImageUrl((prev) => [...downloadURLs, ...prev]);
    } catch (error) {
      setError(`Erreur lors de l'upload `);
      toast.error("Une erreur s'est produite lors de l'ajout des images");
      console.log("error uploading: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Event handler for adding information (to be implemented)
  const handleAddInformations = async (data: InformationCreationType) => {
    // TODO: Implement the logic for adding information
  };

  // Check if the upload button should be disabled
  const uploadBtnMustBeDisabled = images.length <= 0;

  // Render the form
  return (
    <form
      action=" "
      className="flex !h-auto flex-col gap-3 "
      onSubmit={handleSubmit(handleAddInformations)}
    >
      <div className="grid gap-2 my-2">
        <Label htmlFor="email">
          Titre <span className="text-red-500 text-[.5rem]">*</span>
        </Label>

        <Input
          {...register("title", { required: true })}
          className="!p-0 h-8 focus:outline-none"
          type="text"
          placeholder=""
        />
        {errors.title && (
          <p className="text-red-500 text-[.5rem]">{errors.title.message}</p>
        )}
      </div>

      <div className="grid gap-2 my-2 ">
        <Label htmlFor="description">
          Description <span className="text-red-500 text-[.5rem]">*</span>
        </Label>

        <Textarea
          id="description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <p className="text-red-500 text-[.5rem]">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className={`   grid gap-2 my-2`}>
        <p className="my-2">Ajouter une classe</p>
        <div className="rounded-md !gap-2 p-3 my-2 border-2 border-gray-200 border-dashed flex flex-wrap">
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
                  className="flex w-full gap-4 space-x-1 m-1 max-w-[400px] items-center justify-center"
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
              {error && (
                <p className="my-2 text-red-500 text-[.8rem]">{error}</p>
              )}

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
              <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                Images déjà disponible
              </h1>
              <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                {imagesUrl.map((image, ind) => (
                  <div key={image} className="relative">
                    <img width={100} height={100} src={image} alt="" />
                    <button
                      onClick={() => {
                        // TODO comme here
                      }}
                      className="absolute p-1 top-0 left-0 m-2 text-white bg-red-600 rounded"
                    >
                      <MdDelete></MdDelete>
                    </button>
                  </div>
                ))}
              </ul>
            </section>
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
                            d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.511c.9 0 1.631-1.099 1.631-2h5.316c0 .901.53 2 1.631 2h5.511z"
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
                            d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.511c.9 0 1.631-1.099 1.631-2h5.316c0 .901.53 2 1.631 2h5.511z"
                          />
                        </svg>
                      </button>
                    </div>
                  </section>
                </article>
              </li>
            </template>
            {/* <!-- sticky footer --> */}
            <footer className="flex justify-end px-8 pb-8 pt-4">
              <button
                type="button"
                disabled={uploadBtnMustBeDisabled || Loading}
                onClick={handleUplaodeImage}
                className={`rounded-sm px-3 py-1 bg-blue-700  hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none ${
                  uploadBtnMustBeDisabled ? "!bg-gray-400" : ""
                }`}
              >
                {Loading ? "Operation en cours..." : "Uploader Maintenant"}
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

      <Button
        className="w-[80%] m-auto mt-4 mb-4 bg-green-700 text-white"
        type="submit"
      >
        {" "}
        Enregistrer l&apos;information
      </Button>
    </form>
  );
}

export default AddInformationForm;
