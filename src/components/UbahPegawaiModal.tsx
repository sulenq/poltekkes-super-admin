import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Input,
  MenuItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import useBackOnClose from "../utils/useBackOnClose";
import { useFormik } from "formik";
import * as yup from "yup";
import RequiredForm from "./RequiredForm";
import { PencilSimpleLine } from "@phosphor-icons/react";
import { iconSize } from "../const/sizes";
import useFormatNumber from "../utils/useFormatNumber";
import useReverseFormatNumber from "../utils/useReverseFormatNumber";
import PasswordInput from "./PasswordInput";

type Props = {
  id: string;
};

export default function UbahPegawaiModal({ id }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);
  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  //   TODO get data update
  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      id: id,
      username: "panjulisme",
      kataSandi: "panjul123",
      namaLengkap: "Panjul Simonsely",
      email: "panjul@email.com",
      nomorPonsel: "084712876357",
      alamat: "Jalan kenangan mantan",
    },

    validationSchema: yup.object().shape({
      namaProduk: yup.string().required("Nama Produk harus diisi"),
      kategori: yup.string().required("Kategori Produk harus diisi"),
      harga: yup.number().required("Harga harus diisi"),
      deskripsi: yup.string().required("Deskripsi harus diisi"),
    }),

    onSubmit: (values) => {
      // TODO update produk
      console.log(values);
    },
  });

  const fn = useFormatNumber;
  const rfn = useReverseFormatNumber;

  return (
    <>
      <MenuItem onClick={onOpen}>
        <HStack>
          <Icon as={PencilSimpleLine} fontSize={iconSize} />
          <Text>Ubah</Text>
        </HStack>
      </MenuItem>

      <Modal isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Ubah Pegawai</ModalHeader>

          <ModalBody>
            <form id="updateProdukForm" onSubmit={formik.handleSubmit}>
              <FormControl
                mb={4}
                isInvalid={formik.errors.username ? true : false}
              >
                <FormLabel>
                  Username
                  <RequiredForm />
                </FormLabel>
                <Input
                  name="username"
                  placeholder="Masukkan nama produk"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
              </FormControl>

              <FormControl
                mb={4}
                isInvalid={formik.errors.kataSandi ? true : false}
              >
                <FormLabel>
                  Kata Sandi
                  <RequiredForm />
                </FormLabel>
                <PasswordInput
                  name={"kataSandi"}
                  formik={formik}
                  placeholder={"Masukkan kata sandi"}
                />
                <FormErrorMessage>{formik.errors.kataSandi}</FormErrorMessage>
              </FormControl>

              <FormControl
                mb={4}
                isInvalid={formik.errors.namaLengkap ? true : false}
              >
                <FormLabel>
                  Nama Lengkap
                  <RequiredForm />
                </FormLabel>
                <Input
                  name="namaLengkap"
                  placeholder="Masukkan nama lengkap"
                  onChange={formik.handleChange}
                  value={formik.values.namaLengkap}
                />
                <FormErrorMessage>{formik.errors.namaLengkap}</FormErrorMessage>
              </FormControl>

              <FormControl
                mb={4}
                isInvalid={formik.errors.email ? true : false}
              >
                <FormLabel>
                  Email
                  <RequiredForm />
                </FormLabel>
                <Input
                  name="email"
                  placeholder="Masukkan email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.nomorPonsel ? true : false}
                mb={4}
              >
                <FormLabel>
                  Nomor ponsel
                  <RequiredForm />
                </FormLabel>
                <Input
                  name="nomorPonsel"
                  placeholder="Masukkan harga produk"
                  onChange={formik.handleChange}
                  value={formik.values.nomorPonsel}
                />
                <FormErrorMessage>{formik.errors.nomorPonsel}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.alamat ? true : false}>
                <FormLabel>
                  Alamat instansi
                  <RequiredForm />
                </FormLabel>
                <Textarea
                  name="alamat"
                  placeholder="Masukkan alamat instansi"
                  onChange={formik.handleChange}
                  value={formik.values.alamat}
                />
                <FormErrorMessage>{formik.errors.alamat}</FormErrorMessage>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              form="updateProdukForm"
              colorScheme="ap"
              className="lg-clicky"
            >
              Simpan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
