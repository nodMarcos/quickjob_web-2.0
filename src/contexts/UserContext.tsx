'use client'
import { currentUserResponse, loginParams, signUpParams } from "@/types/user";
import { ReactNode, createContext, useEffect, useCallback, useState } from 'react'
import { userRequest } from "@/requests/user";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { destroyCookie, parseCookies } from 'nookies'
import { useRouter } from "next/navigation";

export interface UserContextType {
  user: currentUserResponse | null;
  setUser: React.Dispatch<React.SetStateAction<currentUserResponse | null>>;
  loadingUser: boolean;
  setLoadingUser: React.Dispatch<boolean>;
  handleLoginRequest: (loginParams: loginParams) => void;
  handleSignUpRequest: (signUpParams: signUpParams) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => { },
  loadingUser: false,
  setLoadingUser: () => { },
  handleLoginRequest: () => { },
  handleSignUpRequest: () => { }
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<currentUserResponse | null>(null)
  const [loadingUser, setLoadingUser] = useState(true);
  const token = parseCookies()?.token
  const queryClient = useQueryClient();
  const { push } = useRouter();

  const { data: userResponse, isError } = useQuery({
    queryKey: ["me"],
    queryFn: userRequest.me,
    enabled: !!token,
  });

  useEffect(() => {
    if (userResponse) {
      setUser(userResponse.user);
      setLoadingUser(false);
    }

    if (isError) {
      setUser(null);
      setLoadingUser(false);
    }

    return () => {
      setUser(null);
      setLoadingUser(false);
    };
  }, [userResponse, isError]);


  const removeToken = useCallback(() => {
    destroyCookie(null, "token");
  }, [destroyCookie]);

  const { mutateAsync: handleLoginRequest } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (payload: loginParams) => {
      removeToken();
      return await userRequest.login(payload);
    },
    onSuccess: (data) => {
      if (!data) return;
      queryClient.invalidateQueries({
        queryKey: ["me"],
      });
      push('dashboard')

    },
    onError: (error) => {
      toast.error('There was an error logging in. Please try again.')
      console.log(error)
    },
  })

  const { mutateAsync: handleSignUpRequest } = useMutation({
    mutationKey: ["signup"],
    mutationFn: async (payload: signUpParams) => {
      removeToken()
      return await userRequest.signUp(payload);
    },
    onSuccess: (data) => {
      if (!data) return;
      queryClient.invalidateQueries({
        queryKey: ["me"],
      });
      toast.success("You're logged in!")
    },
    onError: (error) => {
      toast.error("Something went wrong while trying to sign up. Please try again.")
      console.log(error)
    }

  })

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loadingUser,
        setLoadingUser,
        handleLoginRequest,
        handleSignUpRequest
      }}
    >
      {children}
    </UserContext.Provider>
  );
}