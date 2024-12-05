import { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import { Link, router } from "expo-router";

import CustomButton from "@/components/shared/CustomButton";
import { CurrencyRates } from "@/core/auth/interfaces/currency";
import {
  fetchCurrencyRates,
  fetchMarketOverview,
} from "@/core/auth/api/productsApi";
import { MarketOverview } from "@/core/auth/interfaces/market";

const HomeScreen = () => {
  const [marketOverview, setMarketOverview] = useState<MarketOverview | null>(
    null
  );
  const [currencyRates, setCurrencyRates] = useState<CurrencyRates | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const marketData = await fetchMarketOverview();
        const usdToEur = await fetchCurrencyRates("USD", "EUR");
        const usdToGbp = await fetchCurrencyRates("USD", "GBP");

        setMarketOverview(marketData);
        setCurrencyRates({
          usdToEur,
          usdToGbp,
        });
      } catch (error) {
        console.log("Error loading data", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text className="mt-4">Cargando datos del mercado......</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <CustomButton
        className="mb-2"
        color="primary"
        onPress={() => router.push("/products")}
      >
        Noticias
      </CustomButton>

      <CustomButton
        className="mb-2"
        color="secondary"
        onPress={() => router.push("/profile")}
      >
        Activos
      </CustomButton>

      <CustomButton
        className="mb-2"
        color="tertiary"
        onPress={() => router.push("/settings")}
      >
        Configuracion
      </CustomButton>

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

      {/* Currency rates */}
      <View className="bg-gray-800 p-4 rounded-lg mb-4">
        <Text className="text-white text-xl font-semibold">
          Tasas de Cambio
        </Text>
        {currencyRates ? (
          <View>
            <Text className="text-white mt-2">
              USD/EUR:{currencyRates.usdToEur["5. Exchange Rate"]}
            </Text>
            <Text className="text-white mt-2">
              USD/GBP:{currencyRates.usdToGbp["5. Exchange Rate"]}
            </Text>
          </View>
        ) : (
          <Text className="text-gray-400 mt-2">
            No se pudo cargar las tasas de cambio.
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
