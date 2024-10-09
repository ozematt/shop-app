import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export const useUserPanelFields = () => {
  //
  ////DATA
  const auth = useSelector((state: RootState) => state.user.isLoggedIn);

  return { auth };
};
