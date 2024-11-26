import { productsApi } from "../api/productsApi";
import { User } from "../interfaces/user";

export interface AuthResponse {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

const returnedUserToken = (
  data: AuthResponse
): {
  user: User;
  token: string;
} => {
  const { token, ...user } = data;
  //   const { id, email, fullName, isActive, roles, token } = data;

  //   const user: User = {
  //     id,
  //     email,
  //     fullName,
  //     isActive,
  //     roles,
  //   };

  return {
    user,
    token,
  };
};

export const authLogin = async (email: string, password: string) => {
  email = email.toLocaleLowerCase();

  try {
    const { data } = await productsApi.post<AuthResponse>("/auth/login", {
      email,
      password,
    });

    return returnedUserToken(data);
  } catch (error) {
    //throw new Error("User and/or password not valid");
    return null;
  }
};

export const authCheckStatus = async () => {
  try {
    const { data } = await productsApi.get<AuthResponse>("/auth/check-status");

    return returnedUserToken(data);
  } catch (error) {
    return null;
  }
};

//Todo hacer el register
