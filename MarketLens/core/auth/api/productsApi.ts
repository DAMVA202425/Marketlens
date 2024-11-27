// Aqui debe de ir la conexion a nuestra api de bolsa

import axios from "axios";
import { Platform } from "react-native";

// TODO conectar mediant envs vars, android
const STAGE = process.env.EXPO_PUBLIC_STAGE || "dev";

export const API_URL =
  STAGE === "prod"
    ? process.env.EXPO_PUBLIC_API_URL
    : Platform.OS === "ios"
    ? process.env.EXPO_PUBLIC_API_URL_IOS
    : process.env.EXPO_PUBLIC_API_URL_ANDROID;

console.log({ STAGE, [Platform.OS]: API_URL });

const productsApi = axios.create({
  baseURL: API_URL,
});

// TODO: interceptores

export { productsApi };
// Aqui debe de ir la conexion a nuestra api de bolsa