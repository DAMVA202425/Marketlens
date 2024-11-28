import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { User } from "../interfaces/user";

export interface AuthResponse {
  user: User;
  token: string;
}

export const authLogin = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;

    const userData: User = {
      id: user.uid,
      email: user.email || "",
      fullName: user.displayName || "Usuario",
      isActive: true, // Puedes personalizar esto si usas Firestore
      roles: ["user"], // Asume un rol predeterminado
    };

    return {
      user: userData,
      token: await user.getIdToken(),
    };
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return null;
  }
};

export const authRegister = async (
  fullName: string,
  email: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;

    // Actualiza el perfil del usuario con el nombre completo
    await updateProfile(user, { displayName: fullName });

    return true;
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return false;
  }
};

export const authCheckStatus = async () => {
  return new Promise<AuthResponse | null>((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData: User = {
          id: user.uid,
          email: user.email || "",
          fullName: user.displayName || "Usuario",
          isActive: true,
          roles: ["user"],
        };

        resolve({
          user: userData,
          token: await user.getIdToken(),
        });
      } else {
        resolve(null);
      }
    });
  });
};

export const authLogout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    return false;
  }
};
