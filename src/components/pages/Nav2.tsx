import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function DrawerExample({
  p = 5,
  width,
  isOpen,
  children,
  onClose,
  btnRef,
  footer,
}) {
  return (
    <div className={`w-[250px] bg-red-400 !p-0`}>
      <Drawer
        isOpen={isOpen}
        placement={"left"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent alignItems="start" className="!p-0 ">
          <DrawerCloseButton alignSelf="end" mx={p} my={p} />
          <DrawerBody className="mt-8">{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
