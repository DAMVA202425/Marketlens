import axios from "axios";

const FINNHUB_API_KEY = process.env.EXPO_PUBLIC_FINNHUB_API_KEY;
const FINNHUB_BASE_URL = process.env.EXPO_PUBLIC_FINNHUB_BASE_URL;

const finnhubApi = axios.create({
  baseURL: FINNHUB_BASE_URL,
  params: {
    token: FINNHUB_API_KEY, // El token que colocaste en el .env
  },
});

export const fetchNews = async (category = "general") => {
  try {
    const response = await finnhubApi.get("/news", {
      params: {
        category, // Pasamos el parámetro de categoría
      },
    });
    const allNews = response.data;
    const limitedNews = allNews.slice(0, 15);
    return limitedNews;
  } catch (error) {
    console.error("Error al obtener noticias:", error);
    throw error;
  }
};
