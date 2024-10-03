import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { LoginButton } from "./LoginButton";
import { CartField } from "./userPanelFields/CartField";
import { UserField } from "./userPanelFields/UserField";

export const UserPanelFields = () => {
  //
  ////DATA
  const auth = useSelector((state: RootState) => state.user.isLoggedIn);

  ////UI
  return (
    <>
      <CartField />
      {auth ? <UserField /> : <LoginButton />}
    </>
  );
};
