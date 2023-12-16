import React, { FC, ReactNode } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

type Props = {
  modalTitle: string;
  isOpen: unknown;
  onClose: () => void;
  children: ReactNode;
  size?: string;
};

const ModalComp: FC<Props> = ({
  modalTitle,
  isOpen,
  onClose,
  children,
  size = "xl",
}) => {
  return (
    <Modal size={size} isOpen={isOpen as boolean} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalComp;
