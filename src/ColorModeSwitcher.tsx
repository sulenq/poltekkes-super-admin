import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
  Icon,
} from "@chakra-ui/react";
import { MoonStars, Sun } from "@phosphor-icons/react";
import { iconSize } from "./const/sizes";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (
  props: any
) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonStars, Sun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={
        <Icon
          as={SwitchIcon}
          fontSize={props?.fontSize || iconSize}
          weight={props?.weight}
        />
      }
      className="btn"
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};
