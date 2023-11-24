import {
  Button,
  HStack,
  Icon,
  MenuItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { iconSize } from "../const/sizes";
import { Trash } from "@phosphor-icons/react";
import useBackOnClose from "../utils/useBackOnClose";

type Props = {
  id: string;
};

export default function HapusPegawaiModal({ id }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  const buttonBg = useColorModeValue("red.500", "red.200");
  const buttonBgHover = useColorModeValue("red.600", "red.300");
  const buttonBgActive = useColorModeValue("red.700", "red.400");
  const buttonColor = useColorModeValue("white", "black");

  const handleDeteleProduk = () => {
    // TODO delete produk
  };

  return (
    <>
      <MenuItem
        onClick={onOpen}
        bg={buttonBg}
        color={buttonColor}
        _hover={{ bg: buttonBgHover }}
        _active={{ bg: buttonBgActive }}
      >
        <HStack>
          <Icon as={Trash} fontSize={iconSize} />
          <Text>Hapus</Text>
        </HStack>
      </MenuItem>

      <Modal isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Hapus Data Pegawai</ModalHeader>

          <ModalBody>
            <Text>Anda yakin dengan menghapus data tersebut</Text>
          </ModalBody>

          <ModalFooter gap={2}>
            <Button
              variant={"outline"}
              colorScheme="red"
              className="lg-clicky"
              onClick={handleOnClose}
            >
              Tidak
            </Button>
            <Button
              colorScheme="red"
              className="lg-clicky"
              onClick={handleDeteleProduk}
            >
              Yakin
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
