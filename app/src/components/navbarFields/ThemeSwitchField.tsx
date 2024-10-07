import * as React from "react";
import {
  FormControlLabel,
  FormGroup,
  Tooltip,
  useColorScheme,
} from "@mui/material";
import { MaterialUISwitch } from "../../mui/styledComponents";

export const ThemeSwitchField = () => {
  //
  ////DATA
  const { mode, setMode } = useColorScheme();

  ////UI
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Tooltip title="Switch theme">
            <MaterialUISwitch
              sx={{ margin: "0 -20px 0 20px" }}
              checked={mode === "dark"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setMode(
                  (event.target as HTMLInputElement).checked ? "dark" : "light"
                )
              }
            />
          </Tooltip>
        }
        label=""
      />
    </FormGroup>
  );
};
