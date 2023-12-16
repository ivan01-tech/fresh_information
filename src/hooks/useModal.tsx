import { useDisclosure } from "@chakra-ui/react";

export const useModal = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return {
    onOpen,
    isOpen,
    onClose,
  };
};
