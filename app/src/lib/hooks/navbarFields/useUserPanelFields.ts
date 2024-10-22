import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export const useUserPanelFields = () => {
  //
  ////DATA
  const username = useSelector((state: RootState) => state.user.username);
  const auth = !!username;

  return { auth };
};
