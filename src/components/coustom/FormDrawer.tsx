import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

type Props = {
  drawerTitle: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: string;
  ref?: any;
};

const FormDrawer: FC<Props> = ({
  drawerTitle,
  isOpen,
  onClose,
  children,
  size = "xl",
}) => {
  const btnRef = React.useRef(null);

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={size}
      >
        <DrawerOverlay />
        <DrawerContent className="font-display">
          <DrawerCloseButton />
          <DrawerHeader>{drawerTitle}</DrawerHeader>

          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FormDrawer;
