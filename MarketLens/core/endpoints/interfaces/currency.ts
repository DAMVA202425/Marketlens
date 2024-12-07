// Define todas las interfaces relacionadas con divisas
export interface CurrencyExchangeRate {
  "1. From_Currency Code": string;
  "2. From_Currency Name": string;
  "3. To_Currency Code": string;
  "4. To_Currency Name": string;
  "5. Exchange Rate": string;
  "6. Last Refreshed": string;
  "7. Time Zone": string;
  "8. Bid Price": string;
  "9. Ask Price": string;
}

export interface CurrencyRates {
  usdToEur: CurrencyExchangeRate;
  usdToGbp: CurrencyExchangeRate;
}
