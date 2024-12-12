import axios from "axios";

// Configuración para CoinGecko
const COINGECKO_BASE_URL = process.env.EXPO_PUBLIC_COINGECKO_BASE_URL;

const coingeckoApi = axios.create({
  baseURL: COINGECKO_BASE_URL,
});

// Función para obtener datos de Bitcoin
const fetchBitcoinData = async () => {
  try {
    const response = await coingeckoApi.get("/simple/price", {
      params: {
        ids: "bitcoin", // ID de Bitcoin en CoinGecko
        vs_currencies: "eur",
      },
    });
    console.log("Respuesta completa de la API:", response.data);
    return response.data.bitcoin; // Devuelve los datos de Bitcoin
  } catch (error) {
    console.error("Error al obtener datos de Bitcoin:", error);
    throw error;
  }
};

export { fetchBitcoinData };
