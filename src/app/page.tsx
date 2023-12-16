"use client";

import { useModal } from "@/hooks/useModal";
import ModalComp from "@/components/coustom/ModalComp";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { IoMdAdd } from "react-icons/io";
import AddInformationForm from "@/components/coustom/AddInformationForm";
import FormDrawer from "@/components/coustom/FormDrawer";
export default function Home() {
  const {
    onOpen: onOpenPIModal,
    isOpen: isOpenPIModal,
    onClose: onClosePIModal,
  } = useModal();
  return (
    <div>
      <h1>Home</h1>;<Link href="/dashboard">Dashbord Link</Link>
      <Button
        onClick={onOpenPIModal}
        className="flex items-center gap-2 mr-2 bg-forthColor text-white font-bold"
      >
        <IoMdAdd />
        <span>Create new</span>
      </Button>
      {/* <ModalComp
        modalTitle={"title__pers_form"}
        isOpen={isOpenPIModal}
        onClose={onClosePIModal}
      >
        <div className="flex justify-center items-center bg-white rounded p-4">
          <AddInformationForm />
        </div>
      </ModalComp> */}
      <FormDrawer
        drawerTitle="Suggérer une nouvelle entreprise"
        isOpen={isOpenPIModal}
        onClose={onClosePIModal}
        size="md"
      >
        <AddInformationForm />
      </FormDrawer>
    </div>
  );
}
