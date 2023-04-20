import React from "react";
import { useAuth } from "@hooks/useAuth";
import { Navigate } from "react-router-dom";

type props = {
  children: JSX.Element;
};

export const RequireAuth: React.FC<props> = ({ children }) => {
  const { username } = useAuth();
  if (!username) return <Navigate to={"/login"} />;
  return children;
};
