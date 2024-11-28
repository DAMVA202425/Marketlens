import { create } from "zustand";
import { User } from "@/core/auth/interfaces/user";
import {
  authCheckStatus,
  authLogin,
  authLogout,
} from "@/core/auth/actions/auth-actions";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";

export type AuthStatus = "authenticated" | "unauthenticated" | "checking";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  // Methods
  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  status: "checking",
  token: undefined,
  user: undefined,

  login: async (email: string, password: string) => {
    const resp = await authLogin(email, password);
    if (resp) {
      set({ status: "authenticated", token: resp.token, user: resp.user });
      await SecureStorageAdapter.setItem("token", resp.token);
      return true;
    }
    set({ status: "unauthenticated" });
    return false;
  },

  checkStatus: async () => {
    const resp = await authCheckStatus();
    if (resp) {
      set({ status: "authenticated", token: resp.token, user: resp.user });
    } else {
      set({ status: "unauthenticated" });
    }
  },

  logout: async () => {
    await authLogout();
    SecureStorageAdapter.deleteItem("token");
    set({ status: "unauthenticated", token: undefined, user: undefined });
  },
}));
