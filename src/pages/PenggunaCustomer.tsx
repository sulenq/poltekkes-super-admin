import React from "react";
import AdminContainer from "../components/AdminContainer";
import {
  Center,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { CaretLeft, CaretRight, MagnifyingGlass } from "@phosphor-icons/react";
import { iconSize } from "../const/sizes";
import SortTabelCustomer from "../components/SortTabelCustomer";
import TabelCustomer from "../components/TabelCustomer";

export default function PenggunaCustomer() {
  const bg = useColorModeValue("white", "dark");

  return (
    <AdminContainer active={["Pengguna", "Customer"]}>
      <VStack
        w={"100%"}
        align={"stretch"}
        gap={0}
        p={[4, 5, 6]}
        bg={bg}
        borderRadius={16}
        mb={6}
      >
        <HStack mb={4}>
          <InputGroup>
            <InputLeftElement>
              <Icon as={MagnifyingGlass} fontSize={iconSize} />
            </InputLeftElement>

            <Input placeholder={"Search"} maxW={"300px"} />
          </InputGroup>

          <SortTabelCustomer />
        </HStack>

        <TabelCustomer />

        <HStack justify={"center"} mt={4}>
          <IconButton
            aria-label="prev"
            icon={<Icon as={CaretLeft} fontSize={iconSize} />}
            variant={"ghost"}
            className="btn"
            size={"sm"}
          />

          <HStack mx={2}>
            <Center bg={"p.500"} w={"32px"} h={"32px"} borderRadius={8}>
              <Text color={"white"}>1</Text>
            </Center>
          </HStack>

          <IconButton
            aria-label="prev"
            icon={<Icon as={CaretRight} fontSize={iconSize} />}
            variant={"ghost"}
            className="btn"
            size={"sm"}
          />
        </HStack>
      </VStack>
    </AdminContainer>
  );
}
