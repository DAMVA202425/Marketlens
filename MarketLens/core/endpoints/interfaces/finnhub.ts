interface Stock {
  description: string;
  displaySymbol: string;
  symbol: string;
}

interface StockWithPrice extends Stock {
  price: number | "N/A";
}
