import React from "react";
import { CustomizedSwitches } from "../SwitchButton";
import { useColorScheme } from "@mui/material";

export const ThemeSwitch = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <>
      <CustomizedSwitches
        checked={mode === "dark"}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setMode((event.target as HTMLInputElement).checked ? "dark" : "light")
        }
      />
    </>
  );
};
