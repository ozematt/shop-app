import { useColorScheme } from "@mui/material";

export const useThemeSwitchField = () => {
  //
  ////DATA
  const { mode, setMode } = useColorScheme();

  return { mode, setMode };
};
