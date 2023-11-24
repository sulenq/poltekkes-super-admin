import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import useScreenWidth from "../utils/useGetScreenWidth";
import { CaretDown, SignOut } from "@phosphor-icons/react";
import { iconSize } from "../const/sizes";
import AdminNav from "./AdminNav";

type Props = {
  children: JSX.Element;
  active: string[];
};

export default function AdminContainer({ children, active }: Props) {
  //TODO get user data
  const contentBg = useColorModeValue("var(--divider)", "#111827");
  const sw = useScreenWidth();

  const buttonBg = useColorModeValue("red.500", "red.200");
  const buttonBgHover = useColorModeValue("red.600", "red.300");
  const buttonBgActive = useColorModeValue("red.700", "red.400");
  const buttonColor = useColorModeValue("white", "black");

  const handleSignout = () => {
    //TODO singout
  };

  return (
    <HStack gap={0} minH={"100vh"} align={"stretch"} bg={contentBg}>
      <AdminNav active={active} />

      <Box
        flex={1}
        pl={sw < 770 ? "" : "80px"}
        pb={sw < 770 ? "60px" : ""}
        w={"100%"}
        // maxW={sw < 770 ? "100vw" : "calc(100vw - 95px)"}
      >
        <VStack px={[4, null, 6]} w={"100%"} gap={0} align={"stretch"}>
          <HStack py={4} justify={"space-between"}>
            <Text fontSize={[20, null, 24]} fontWeight={600} noOfLines={1}>
              {active[active.length - 1]}
            </Text>

            <HStack>
              <ColorModeSwitcher fontSize={20} className="btn-solid" />

              <Menu>
                <MenuButton as={Button} px={0} className="btn-solid">
                  <HStack borderRadius={8} p={2} cursor={"pointer"}>
                    <Icon as={CaretDown} fontSize={iconSize} />

                    <Text>Super Admin</Text>

                    <Avatar name="Jolitos Kurniawan" size={"xs"} />
                  </HStack>
                </MenuButton>

                <MenuList minW={"126px"} border={"none"}>
                  <MenuItem
                    bg={buttonBg}
                    color={buttonColor}
                    _hover={{ bg: buttonBgHover }}
                    _active={{ bg: buttonBgActive }}
                    onClick={handleSignout}
                  >
                    <HStack>
                      <Icon as={SignOut} fontSize={iconSize} />
                      <Text>Keluar</Text>
                    </HStack>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>

          {children}
        </VStack>
      </Box>
    </HStack>
  );
}
