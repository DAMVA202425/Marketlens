export type AuthStatus = "authenticated" | "unauthenticated" | "checking";

export interface Authstate {
  status: AuthStatus;
  token?: string;
}
