export type currentUserResponse = {
  id: number | string;
  email: string;
  first_name: string;
  last_name: string;
  fullname: string;
};

export type loginParams = {
  user: {
    email: string;
    password: string;
  }
};

export type signUpParams = {
  user: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }
}