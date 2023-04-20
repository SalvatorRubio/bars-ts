import React, { createContext, useState } from "react";

type TypeContext = {
  username: string | null;
  id: number | null;
  role: number | null;
  group: number | null;
  setGroup: React.Dispatch<React.SetStateAction<number | null>>;
  signin: (username: string, id: number, role: number, cb: () => void) => void;
  signout: (cb: () => void) => void;
};

export const AuthContext = createContext<TypeContext>({
  signin(username: string, id: number, role: number, cb: () => void): void {},
  signout(cb: () => void): void {},
  username: null,
  id: null,
  role: null,
  group: null,
  setGroup(
    value: ((prevState: number | null) => number | null) | number | null
  ): void {},
});

type props = {
  children: JSX.Element;
};

export const AuthProvider: React.FC<props> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(
    localStorage.getItem("username")
  );
  const [role, setRole] = useState<number | null>(
    Number(localStorage.getItem("role"))
  );
  const [id, setId] = useState<number | null>(
    Number(localStorage.getItem("id"))
  );
  const [group, setGroup] = useState<number | null>(
    Number(localStorage.getItem("group"))
  );

  const signin = (
    username: string,
    id: number,
    role: number,
    cb: () => void
  ) => {
    setUsername(username);
    setId(id);
    setRole(role);
    cb();
  };

  const signout = (cb: () => void) => {
    setUsername(null);
    setId(null);
    setRole(null);
    localStorage.clear();
    cb();
  };

  const value = { username, id, role, group, setGroup, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
