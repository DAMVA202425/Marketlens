import { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
} from "react-native";
import { Link, router } from "expo-router";

import CustomButton from "@/components/shared/CustomButton";
import { CurrencyRates } from "@/core/endpoints/interfaces/currency";
import { MarketOverview } from "@/core/endpoints/interfaces/market";
import MarketChart from "@/components/charts/MarketChart";
import {
  fetchCurrencyRates,
  fetchMarketOverview,
} from "@/core/endpoints/api/alphaVantageApi";
import { fetchBitcoinData } from "@/core/endpoints/api/coingeckoApi";

const HomeScreen = () => {
  const [marketOverview, setMarketOverview] = useState<MarketOverview | null>(
    null
  );
  const [currencyRates, setCurrencyRates] = useState<CurrencyRates | null>(
    null
  );
  const [bitcoinData, setBitcoinData] = useState<{ eur: number } | null>(null);

  const [loading, setLoading] = useState(true);

  const [marketLabels, setMarketLabels] = useState<string[]>([]); // Etiquetas del grafico
  const [marketData, setMarketData] = useState<number[]>([]); // Datos del grafico

  useEffect(() => {
    const loadData = async () => {
      try {
        const marketData = await fetchMarketOverview();
        const usdToEur = await fetchCurrencyRates("USD", "EUR");
        const usdToGbp = await fetchCurrencyRates("USD", "GBP");
        const bitcoin = await fetchBitcoinData();

        setMarketOverview(marketData);
        setCurrencyRates({
          usdToEur,
          usdToGbp,
        });
        setBitcoinData(bitcoin);

        // Aqui vamos a procesar los datos para el grafico
        if (marketData) {
          const labels = Object.keys(marketData)
            .filter((key) => key !== "DowJones" && key !== "NASDAQ") // Excluir claves estáticas
            .slice(0, 5);
          const data = labels.map((key) => {
            const dayData = marketData[key]; // Ahora sabemos que key no es una clave estática
            if (typeof dayData === "string") return 0; // Evitar errores si por alguna razón es una string
            return parseFloat(dayData["1. open"]); // Valores de apertura
          });
          setMarketLabels(labels);
          setMarketData(data);
        }
      } catch (error) {
        console.log("Error loading data", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
  console.log("Labels:", marketLabels); // Fechas
  console.log("Data:", marketData); // Números
  console.log("Kripto:", bitcoinData);
  if (loading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text className="mt-4">Cargando datos del mercado......</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#1E002E] p-4">
      <Text className="text-3xl font-work-black mb-6 text-white">
        MarketLens
      </Text>
      <View className="flex-row justify-center items-center space-x-6 mt-6">
        <CustomButton
          className="ml-2"
          color="primary"
          onPress={() => router.push("/news")}
        >
          Noticias
        </CustomButton>

        <CustomButton
          className="ml-2"
          color="primary"
          onPress={() => router.push("/profile")}
        >
          Activos
        </CustomButton>

        <CustomButton
          className="ml-2"
          color="primary"
          onPress={() => router.push("/settings")}
        >
          Configuracion
        </CustomButton>
      </View>
      <Link href="/profile" asChild>
        <CustomButton variant="text-only" className="mb-10" color="secondary">
          Perfil
        </CustomButton>
      </Link>

      {/* Market Overwiev */}
      <View className="bg-gray-800 p-4 rounded-lg mb-4">
        <Text className="text-white text-xl font-semibold">
          Market Overview
        </Text>
        {marketOverview ? (
          <View>
            <MarketChart labels={marketLabels} data={marketData} />
            <Text className="text-white mt-2">
              Dow Jones: {marketOverview.DowJones}
            </Text>
            <Text className="text-white mt-2">
              NASDAQ: {marketOverview.NASDAQ}
            </Text>
            {/* Agrega más datos del mercado aquí */}
          </View>
        ) : (
          <Text className="text-gray-400 mt-2">
            No se pudo cargar la información del mercado.
          </Text>
        )}
      </View>

      {/* Currency rates y Bitcoin*/}
      <View className="bg-gray-800 p-4 rounded-lg mb-4">
        <View className="flex-row justify-between mt-2">
          <View>
            <Text className="text-white text-xl font-semibold">
              Tasas de Cambio
            </Text>
            {currencyRates ? (
              <>
                <Text className="text-white mt-2">
                  USD/EUR: {currencyRates.usdToEur["5. Exchange Rate"]}
                </Text>
                <Text className="text-white mt-2">
                  USD/GBP: {currencyRates.usdToGbp["5. Exchange Rate"]}
                </Text>
              </>
            ) : (
              <Text className="text-gray-400 mt-2">
                No se pudo cargar las tasas de cambio.
              </Text>
            )}
          </View>

          <View>
            <Text className="text-white text-xl font-semibold">Bitcoin</Text>
            {bitcoinData ? (
              <Text className="text-white mt-2">
                EUR: ${bitcoinData.eur.toFixed(2)}
              </Text>
            ) : (
              <Text className="text-gray-400 mt-2">
                No se pudo cargar los datos de Bitcoin.
              </Text>
            )}
          </View>
          <Image
            source={require("@/assets/images/bitcoin.jpeg")}
            style={{ width: 70, height: 70, marginTop: 3 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
