import { DataTableDemo } from "@/components/table/DataTableComp";
import { NextPage } from "next";
import React from "react";

type Props = {};

const InformationPage: NextPage = ({}: Props) => {
  return (
    <div className="px-2 py-4 flex gap-4 flex-col bg-white m-2 ">
      <h2 className="text-2xl my-2 capitalize font-bold">All Information</h2>

      <DataTableDemo />
    </div>
  );
};

export default InformationPage;
