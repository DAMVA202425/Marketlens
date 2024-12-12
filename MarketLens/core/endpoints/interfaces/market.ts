export interface MarketOverview {
  DowJones: string;
  NASDAQ: string;
  [date: string]:
    | {
        // Las claves dinámicas como fechas
        "1. open": string;
        "2. high": string;
        "3. low": string;
        "4. close": string;
        "5. volume": string;
      }
    | string; // Permite que DowJones y NASDAQ sean strings
}
