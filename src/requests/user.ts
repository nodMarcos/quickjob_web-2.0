import apiClient from '@/config/apiClient'
import { currentUserResponse, loginParams, signUpParams } from "@/types/user";
import { setCookie } from 'nookies';

async function login(payload: loginParams) {
  delete apiClient.defaults.headers.Authorization
  try {
    const {data, headers} = await apiClient({
      method: "post",
      url: "/login",
      data: payload,
    });

    console.log(headers.authorization)
    console.log(data)
    
    setCookie(null, 'token', headers.authorization, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    return data
  } catch (e) {
    console.log(e);
  }
}

async function signUp(payload: signUpParams) {
  delete apiClient.defaults.headers.Authorization
  try {
    const {data, headers } = await apiClient<currentUserResponse>({
      method: 'post',
      url: '/signup',
      data: payload
    })
    
    setCookie(null, 'token', headers.authorization, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    console.log(data)
    return data
  }
  catch (e) {
    console.log(e)
  }
}

async function me() {
  try {
    const {data} = await apiClient({
      method: "get",
      url: "/me"
    })

    return data
  }
  catch (e) {
    console.log(e)
  }
}

export const userRequest = {
  login,
  signUp,
  me
}