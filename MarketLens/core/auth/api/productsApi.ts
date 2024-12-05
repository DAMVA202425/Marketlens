import axios from "axios";
import { Platform } from "react-native";

import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import { CurrencyExchangeRate } from "../interfaces/currency";
import { MarketOverview } from "../interfaces/market";

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
export const fetchMarketOverview = async (): Promise<MarketOverview> => {
  try {
    const response = await alphaVantageApi.get("", {
      params: {
        function: "TIME_SERIES_DAILY",
        symbol: "IBM",
      },
    });
    const data = response.data;
    if (!data || !data["Time Series (Daily)"]) {
      throw new Error("Datos del mercado no disponibles");
    }
    // Obtener la última fecha disponible
    const timeSeries = data["Time Series (Daily)"];
    const latestDate = Object.keys(timeSeries)[0]; // Toma la primera clave, que es la más reciente
    const latestData = timeSeries[latestDate];

    // Crear el objeto MarketOverview con claves estáticas y dinámicas
    const marketData: MarketOverview = {
      DowJones: latestData["1. open"], // Precio de apertura más reciente
      NASDAQ: latestData["2. high"], // Precio más alto del día más reciente
      ...Object.keys(timeSeries).reduce((acc, date) => {
        acc[date] = {
          "1. open": timeSeries[date]["1. open"],
          "2. high": timeSeries[date]["2. high"],
          "3. low": timeSeries[date]["3. low"],
          "4. close": timeSeries[date]["4. close"],
          "5. volume": timeSeries[date]["5. volume"],
        };
        return acc;
      }, {} as { [date: string]: { "1. open": string; "2. high": string; "3. low": string; "4. close": string; "5. volume": string } }),
    };

    return marketData;
  } catch (error) {
    console.error("Error al obtener datos del mercado:", error);
    throw error;
  }
};

// Función para obtener tasas de cambio
export const fetchCurrencyRates = async (
  fromCurrency: string,
  toCurrency: string
): Promise<CurrencyExchangeRate> => {
  try {
    const response = await alphaVantageApi.get("", {
      params: {
        function: "CURRENCY_EXCHANGE_RATE",
        from_currency: fromCurrency,
        to_currency: toCurrency,
      },
    });

    const data = response.data["Realtime Currency Exchange Rate"];

    if (!data) {
      throw new Error("Tasas de cambio no disponibles");
    }

    return data as CurrencyExchangeRate;
  } catch (error) {
    console.error("Error al obtener tasas de cambio:", error);
    throw error;
  }
};

export { productsApi, alphaVantageApi };
