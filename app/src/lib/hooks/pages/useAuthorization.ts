import { useCallback, useState } from "react";
import { AppDispatch, useAppDispatch } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addOrder, logUser } from "../../../redux/user/userSlice";
import userCheck from "../../../api/queries/authorization";
import supabase from "../../../services/supabase";

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

  const fetchUserData = async () => {
    const { data, error } = await supabase
      .from("usersOrders")
      .select("orders")
      .eq("user", username)
      .single();
    if (data) {
      dispatch(addOrder(data.orders));
      console.log(data.orders);
    }
    if (error) {
      console.log(error);
    }
  };

  // log user
  const mutation = useMutation({
    mutationFn: userCheck,
    onSuccess: () => {
      dispatch(logUser(username));
      fetchUserData();
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
    mutation: {
      isPending: mutation.isPending,
    },
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
