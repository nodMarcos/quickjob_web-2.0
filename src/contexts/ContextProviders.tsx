import React from "react";
import { UserProvider } from "./UserContext";
import QueryProvider from './QueryProvider'


const contexts = [UserProvider, QueryProvider];

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return contexts.reduce((acc, Context) => {
    return <Context>{acc}</Context>;
  }, children);
}
