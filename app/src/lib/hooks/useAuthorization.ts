import { useCallback, useState } from "react";
import { AppDispatch, useAppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { logUser } from "../../redux/user/userSlice";
import userCheck from "../../api/queries/authorization";
import usersFetch from "../../api/queries/users";
import { UserFetchData } from "../types/userTypes";

export const useAuthorization = () => {
  //MUI password field  data logic
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = useCallback(
    () => setShowPassword((show) => !show),
    []
  );

  const handleMouseDownPassword = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    },
    []
  );

  const handleMouseUpPassword = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    },
    []
  );

  ////DATA
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();

  // input user data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorAuth, setErrorAuth] = useState<string | null>(null);

  // get user Id
  const { data } = useQuery({
    queryKey: ["usersData"],
    queryFn: usersFetch,
  });
  const userId = data?.find(
    (user: UserFetchData) => user.username === username
  )?.id;

  // log user
  const mutation = useMutation({
    mutationFn: userCheck,
    onSuccess: () => {
      dispatch(logUser(userId));
      navigate("/");
      setErrorAuth(null);
    },
    onError: () => {
      setErrorAuth("User does not exist");
    },
  });

  ////LOGIC
  //submit login data
  const handleLogin = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      mutation.mutate({ username, password });
    },
    [username, password, mutation]
  );

  return {
    mutation,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleMouseUpPassword,
    username,
    setUsername,
    password,
    setPassword,
    errorAuth,
    handleLogin,
    navigate,
  };
};
