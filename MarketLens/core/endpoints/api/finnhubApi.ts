import axios from "axios";

const FINNHUB_API_KEY = process.env.EXPO_PUBLIC_FINNHUB_API_KEY;
const FINNHUB_BASE_URL = process.env.EXPO_PUBLIC_FINNHUB_BASE_URL;

const finnhubApi = axios.create({
  baseURL: FINNHUB_BASE_URL,
  params: {
    token: FINNHUB_API_KEY, // El token que colocaste en el .env
  },
});

// Función para obtener la lista de noticias
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

// Función para obtener la lista de acciones
export const fetchStocks = async (exchange = "US") => {
  try {
    const response = await finnhubApi.get("/stock/symbol", {
      params: {
        exchange, // Pasamos el mercado como parámetro
      },
    });
    const stockList = response.data;
    return stockList;
  } catch (error) {
    console.error("Error al obtener la lista de acciones:", error);
    throw error;
  }
};

// Función para obtener los datos de precios de las acciones
export const fetchQuote = async (symbol: string) => {
  try {
    const response = await finnhubApi.get("/quote", {
      params: {
        symbol, // Pasamos el símbolo como parámetro
      },
    });
    return response.data; // Devuelve el objeto con los precios
  } catch (error) {
    console.error(`Error al obtener datos del símbolo ${symbol}:`, error);
    throw error;
  }
};

// Función para enriquecer los datos de acciones con precios
export const fetchStockData = async (
  stocks: Stock[]
): Promise<StockWithPrice[]> => {
  return Promise.all(
    stocks.map(async (stock) => {
      try {
        const quote = await fetchQuote(stock.symbol); // Obtener el precio
        return { ...stock, price: quote.c }; // Agregar el precio actual al objeto stock
      } catch (error) {
        console.error(`Error al obtener datos para ${stock.symbol}:`, error);
        return { ...stock, price: "N/A" }; // Si falla, asignamos "N/A"
      }
    })
  );
};

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export { finnhubApi };
