import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Image,
  Input,
  Text,
  VStack,
  Link as ChakraLink,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import PasswordInput from "../components/PasswordInput";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { setCookie } from "typescript-cookie";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: yup.object().shape({
      username: yup.string().required("Username harus diisi"),
      password: yup.string().required("Kata Sandi harus diisi"),
    }),

    onSubmit: (values, { resetForm }) => {
      const data = {
        username: values.username,
        password: values.password,
      };

      const options = {
        method: "post",
        baseUrl: process.env.REACT_APP_BASE_URL,
        url: "https://development.avanafish.com/api/login",
        data: data,
      };

      async function signin() {
        setLoading(true);

        try {
          const response = await axios.request(options);
          setCookie("userData", JSON.stringify(response.data.data));
          navigate("/dashboards");
        } catch (error) {
          console.log(error);
          // alert("Something wrong, try refreshing the page  or comeback later");
        } finally {
          setLoading(false);
        }
      }
      signin();
    },
  });

  const bg = useColorModeValue("white", "dark");

  return (
    <VStack
      minH={"100vh"}
      justify={"center"}
      p={6}
      bgImage={"/images/gedung.jpg"}
      bgSize={"cover"}
      bgPos={"center"}
    >
      <Box w={"100%"} maxW={"400px"} p={6} borderRadius={16} bg={bg}>
        <HStack
          justify={"space-between"}
          align={"flex-start"}
          mb={6}
          position={"relative"}
        >
          <HStack>
            <Image src="/logo192.png" w={"100%"} maxW={"48px"} />

            <Box>
              <Text fontSize={[24, null, 26]} fontWeight={700} lineHeight={1}>
                Masuk
              </Text>
              <Text fontWeight={500} lineHeight={1} color={"p.500"}>
                Super Admin
              </Text>
            </Box>
          </HStack>

          <ColorModeSwitcher position={"absolute"} right={-2} top={-2} />
        </HStack>

        <Box mb={6}>
          <form id="signinForm" onSubmit={formik.handleSubmit}>
            <FormControl
              isInvalid={formik.errors.username ? true : false}
              mb={4}
            >
              <FormLabel>Username</FormLabel>
              <Input
                name="username"
                placeholder="Masukkan username"
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={formik.errors.password ? true : false}
              mb={2}
            >
              <FormLabel>Kata Sandi</FormLabel>
              <PasswordInput formik={formik} name={"password"} />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>

            <Text mb={4}>
              Lupa kata sandi?{" "}
              <ChakraLink
                href={"/reset-password"}
                isExternal
                color={"p.500"}
                fontWeight={600}
              >
                Reset
              </ChakraLink>
            </Text>
          </form>
        </Box>

        <Button
          w={"100%"}
          className="lg-clicky"
          colorScheme="ap"
          isLoading={loading}
          type="submit"
          form="signinForm"
        >
          Masuk
        </Button>
      </Box>
    </VStack>
  );
}
