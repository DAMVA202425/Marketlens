interface Stock {
  description: string;
  displaySymbol: string;
  symbol: string;
}

interface StockWithPrice extends Stock {
  price: number | "N/A";
}

interface StockDetails {
  name: string; // Nombre de la acción
  exchange: string; // Bolsa donde cotiza
  marketCapitalization: number; // Capitalización de mercado
  weburl: string; // Sitio web de la empresa
}

interface Quote {
  c: number; // Precio actual
  o: number; // Precio de apertura
  pc: number; // Precio de cierre
  h: number; // Precio más alto del día
  l: number; // Precio más bajo del día
}

// Define la interfaz para las acciones
interface Stock {
  description: string;
  displaySymbol: string;
  symbol: string;
}
