import { LoginButton } from "./userPanelFields/LoginButton";
import { CartField } from "./userPanelFields/CartField";
import { UserField } from "./userPanelFields/UserField";
import { useUserPanelFields } from "../../lib/hooks/navbarFields/useUserPanelFields";

export const UserPanelFields = () => {
  //
  ////DATA
  const { auth } = useUserPanelFields();

  ////UI
  return (
    <>
      <CartField />
      {auth ? <UserField /> : <LoginButton />}
    </>
  );
};
