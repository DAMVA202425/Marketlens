import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";
import { fetchStockData, fetchStocks } from "@/core/endpoints/api/finnhubApi";

const StockScreen = () => {
  // Cambia el estado de stocks para usar la interfaz Stock[]
  const [stocks, setStocks] = useState<StockWithPrice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStocks = async () => {
      try {
        const stockList = await fetchStocks("US"); // Obtenemos la lista de acciones del mercado de EE.UU.
        const limitedStockList = stockList.slice(0, 20);
        const enrichedStocks = await fetchStockData(limitedStockList);
        setStocks(enrichedStocks);
      } catch (error) {
        console.error("Error al cargar las acciones:", error);
      } finally {
        setLoading(false);
      }
    };

    loadStocks();
  }, []);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text className="mt-4">Cargando lista de activos...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#1E002E] p-4">
      <Text className="text-3xl font-work-black mb-6 text-white">Activos</Text>

      {/* Botones superiores */}
      <View className="flex-row justify-center items-center space-x-6 mt-6 mb-6">
        <CustomButton
          className="ml-2"
          color="primary"
          onPress={() => router.push("/home")}
        >
          Inicio
        </CustomButton>

        <CustomButton
          className="ml-2"
          color="primary"
          onPress={() => router.push("/news")}
        >
          Noticias
        </CustomButton>
      </View>

      {/* Lista de acciones */}
      <FlatList
        data={stocks}
        keyExtractor={(item) => item.symbol}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-gray-800 p-4 rounded-lg mb-4"
            onPress={() =>
              router.push({
                pathname: "/stock_details", // Incluye el prefijo del grupo (stack)
                params: { symbol: item.symbol }, // Pasa los parámetros dinámicos
              })
            }
          >
            <Text className="text-white text-lg">{item.description}</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-400">{item.symbol}</Text>
              <Text className="text-green-400">
                {item.price !== undefined && typeof item.price === "number"
                  ? `$${item.price.toFixed(2)}`
                  : "N/A"}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default StockScreen;
