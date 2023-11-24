import {
  Badge,
  Box,
  Center,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowDown, ArrowUp, UsersThree } from "@phosphor-icons/react";
import React, { useState } from "react";
import { iconSize } from "../const/sizes";
import useFormatNumber from "../utils/useFormatNumber";

export default function DashboardsSummary() {
  // TODO get data
  // const [loading, setLoading] = useState(false);
  const dummy = {
    totalCustomer: {
      total: 1624,
      pertumbuhan: true,
      rate: 31.2,
    },
    totalPegawai: {
      total: 136,
      pertumbuhan: false,
      rate: 5.5,
    },
  };
  const [data] = useState(dummy);
  const bg = useColorModeValue("white", "dark");
  const fn = useFormatNumber;

  return (
    <SimpleGrid columns={[1, 2, 2]} gap={4} w={"100%"}>
      <Box borderRadius={16} p={[4, 6, 6]} bg={bg}>
        <HStack mb={4} gap={3} justify={"space-between"}>
          <Center borderRadius={8} p={2} bg={"var(--divider2)"}>
            <Icon as={UsersThree} weight="fill" fontSize={[22, null, 24]} />
          </Center>

          <Badge
            p={2}
            borderRadius={8}
            colorScheme={data.totalCustomer.pertumbuhan ? "ap" : "red"}
            fontWeight={400}
          >
            <HStack>
              <Icon
                as={data.totalCustomer.pertumbuhan ? ArrowUp : ArrowDown}
                fontSize={iconSize}
              />
              <Text>{data.totalCustomer.rate}%</Text>
            </HStack>
          </Badge>
        </HStack>

        <Text fontWeight={500} mb={4}>
          Total Customer
        </Text>

        <Text fontSize={[22, null, 24]} fontWeight={700}>
          {fn(data.totalCustomer.total)}
        </Text>
      </Box>

      <Box borderRadius={16} p={[4, 6, 6]} bg={bg}>
        <HStack mb={4} gap={3} justify={"space-between"}>
          <Center borderRadius={8} p={2} bg={"var(--divider2)"}>
            <Icon as={UsersThree} weight="fill" fontSize={[22, null, 24]} />
          </Center>

          <Badge
            p={2}
            borderRadius={8}
            colorScheme={data.totalPegawai.pertumbuhan ? "ap" : "red"}
            fontWeight={400}
          >
            <HStack>
              <Icon
                as={data.totalPegawai.pertumbuhan ? ArrowUp : ArrowDown}
                fontSize={iconSize}
              />
              <Text>{data.totalPegawai.rate}%</Text>
            </HStack>
          </Badge>
        </HStack>

        <Text fontWeight={500} mb={4}>
          Total Pegawai
        </Text>

        <Text fontSize={[22, null, 24]} fontWeight={700}>
          {fn(data.totalPegawai.total)}
        </Text>
      </Box>
    </SimpleGrid>
  );
}
