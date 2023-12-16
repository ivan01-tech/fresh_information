import { AiOutlineDelete } from "react-icons/ai";
import { SlCloudUpload } from "react-icons/sl";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { MdWorkspacesOutline } from "react-icons/md";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { SelectDemo } from "./SelectComp";

type Props = {};

function AddInformationForm({}: Props) {
  return (
    <form action=" " className="flex !h-auto flex-col gap-3">
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

        <Textarea />
        {/* {errors.email && (
            <p className="text-red-500 text-[.7rem]">
              {errors.email.message}
            </p>
          )} */}
      </div>

      <div className="grid gap-2 my-2">
        <p className="my-2">Ajouter une filiere</p>
        <div className="rounded-md p-3 my-2 border-2 border-gray-200 border-dashed flex flex-wrap">
          <div className="flex bg-gray-50 p-3 rounded-md justify-center items-center flex-col space-y-2 text-gray-700">
            <MdWorkspacesOutline className="text-xl opacity-30 text-gray-700" />
            <p className="text-gray-700 opacity-30 text-xs">
              {" "}
              Pas encore d&apos;exole créer{" "}
            </p>
          </div>
          <div className="flex w-full gap-4 space-x-1 max-w-[400px]">
            <div className="relative w-full group my-4 rounded-md p-3 border-2 border-gray-200 bg-gray-200 bg-opacity-20 text-gray-700 hover:border-gray-400 duration-200">
              <h1 className="text-md font-bold">INF - L3 dfvdfv</h1>
              <h1 className="text-xs "> Campus 3</h1>
              <p className="text-[8px]">dfvdfvdfv</p>
              <div className="absolute group-hover:translate-x-0 opacity-0 group-hover:opacity-100 -translate-x-16 flex space-x-2 right-2 text-xl top-1 duration-200">
                <button className="flex justify-center rounded-md items-center w-8 h-8 bg-red-500 bg-opacity-25 text-red-500 border-2 cursor-pointer duration-100 border-red-500 hover:bg-opacity-100 hover:text-white">
                  <AiOutlineDelete className="text-md hover:scale-105 duration-200 " />
                </button>
              </div>
            </div>
          </div>

          <div className="flex w-full space-x-1 max-w-[400px]">
            <div className="relative w-full group my-4 rounded-md p-3 border-2 border-gray-200 bg-gray-200 bg-opacity-20 text-gray-700 hover:border-gray-400 duration-200">
              <h1 className="text-md font-bold">INF - L3 dfvdfv</h1>
              <h1 className="text-xs "> Campus 3</h1>
              <p className="text-[8px]">dfvdfvdfv</p>
              <div className="absolute group-hover:translate-x-0 opacity-0 group-hover:opacity-100 -translate-x-16 flex space-x-2 right-2 text-xl top-1 duration-200">
                <button className="flex justify-center rounded-md items-center w-8 h-8 bg-red-500 bg-opacity-25 text-red-500 border-2 cursor-pointer duration-100 border-red-500 hover:bg-opacity-100 hover:text-white">
                  <AiOutlineDelete className="text-md hover:scale-105 duration-200 " />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap  gap-3">
          <SelectDemo></SelectDemo>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Faculté/Ecole" />
            </SelectTrigger>
            <SelectContent className="!w-full hr">
              <SelectGroup>
                <SelectLabel>Faculté/Ecole</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selectionner un campus" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filiere</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selectionner une filiere" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Niveau</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid  w-full lg:max-w-sm items-center gap-1.5">
        <Label
          className="w-full h-[250px] border-[2px] border-forthColor rounded-md !border-dashed"
          htmlFor="picture"
        >
          <div className="w-full flex flex-col justify-center items-center text-forthColor/40 font-bold h-full gap-3">
            <p className="text-3xl">
              <SlCloudUpload></SlCloudUpload>
            </p>
            <p>Select to upload related images </p>
          </div>
        </Label>
        <Input
          id="picture"
          type="file"
          className="file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 hidden"
        />
      </div>
    </form>
  );
}

export default AddInformationForm;
