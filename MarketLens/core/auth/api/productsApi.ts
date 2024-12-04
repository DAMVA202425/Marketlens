// Aqui debe de ir la conexion a nuestra api de bolsa

import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import axios from "axios";
import { Platform } from "react-native";

// Coneccion mediante envs vars, android
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

// Interceptores que agregan token a todas las solicitudes
productsApi.interceptors.request.use(async (config) => {
  // Verificamos si tenemos el token en el secure storage
  const token = await SecureStorageAdapter.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Configuracion para Alpha Vantage
const ALPHA_VANTAGE_API_KEY = process.env.EXPO_PUBLIC_ALPHA_VANTAGE_API_KEY;
const ALPHA_VANTAGE_BASE_URL = "https://www.alphavantage.co/query";

const alphaVantageApi = axios.create({
  baseURL: ALPHA_VANTAGE_BASE_URL,
  params: {
    apikey: ALPHA_VANTAGE_API_KEY, // Clave API
  },
});

// Función para obtener datos de mercado
export const fetchMarketOverview = async () => {
  try {
    const response = await alphaVantageApi.get("", {
      params: {
        function: "OVERVIEW", // Ejemplo de endpoint (puede variar según la necesidad)
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos del mercado:", error);
    throw error;
  }
};

// Función para obtener tasas de cambio
export const fetchCurrencyRates = async (
  fromCurrency: string,
  toCurrency: string
) => {
  try {
    const response = await alphaVantageApi.get("", {
      params: {
        function: "CURRENCY_EXCHANGE_RATE",
        from_currency: fromCurrency,
        to_currency: toCurrency,
      },
    });
    return response.data["Realtime Currency Exchange Rate"];
  } catch (error) {
    console.error("Error al obtener tasas de cambio:", error);
    throw error;
  }
};

export { productsApi, alphaVantageApi };
