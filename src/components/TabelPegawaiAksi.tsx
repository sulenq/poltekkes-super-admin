import { Icon, IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { DotsThreeVertical } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";
import UbahPegawaiModal from "./UbahPegawaiModal";
import HapusPegawaiModal from "./HapusPegawaiModal";

type Props = {
  id: string;
};

export default function TabelPegawaiAksi({ id }: Props) {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="button aksi"
        icon={<Icon as={DotsThreeVertical} fontSize={iconSize} weight="bold" />}
        borderRadius={"full"}
        variant={"ghost"}
        className="btn lg-clicky"
      />

      <MenuList minW={"140px"}>
        <UbahPegawaiModal id={id} />

        <HapusPegawaiModal id={id} />
      </MenuList>
    </Menu>
  );
}
