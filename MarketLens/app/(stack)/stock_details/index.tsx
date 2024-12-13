import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "expo-router/build/hooks";
import { finnhubApi } from "@/core/endpoints/api/finnhubApi";
import { SafeAreaView } from "react-native-safe-area-context";
import { LineChart } from "react-native-chart-kit";

const StockDetails = () => {
  const searchParams = useSearchParams();
  const symbol = searchParams.get("symbol");

  const [details, setDetails] = useState<StockDetails | null>(null);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockDetails = async () => {
      try {
        const [detailsResponse, quoteResponse] = await Promise.all([
          finnhubApi.get("/stock/profile2", { params: { symbol } }),
          finnhubApi.get("/quote", { params: { symbol } }),
        ]);

        if (detailsResponse.status === 200) {
          setDetails(detailsResponse.data);
        } else {
          console.log(
            "Error en la respuesta de detalles:",
            detailsResponse.status
          );
        }

        if (quoteResponse.status === 200) {
          setQuote(quoteResponse.data);
        } else {
          console.log(
            "Error en la respuesta de cotización:",
            quoteResponse.status
          );
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStockDetails();
  }, [symbol]);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text className="mt-4">Cargando detalles de la acción...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#1E002E] p-4">
      <Text className="text-3xl font-work-black mb-6 text-white">
        Detalles del activo: {symbol}
      </Text>
      {details ? (
        <View>
          <Text className="text-white">Nombre: {details.name}</Text>
          <Text className="text-white">Exchange: {details.exchange}</Text>
          <Text className="text-white">
            Capitalización: {details.marketCapitalization} B
          </Text>
          <Text className="text-white">Website: {details.weburl}</Text>
        </View>
      ) : (
        <Text className="text-gray-400">
          No se encontraron detalles para esta acción.
        </Text>
      )}

      {quote ? (
        <View className="mt-6">
          <Text className="text-white mb-2">
            Precio actual: ${quote.c?.toFixed(2)}
          </Text>
          <Text className="text-white mb-2">
            Precio de apertura: ${quote.o?.toFixed(2)}
          </Text>
          <Text className="text-white mb-2">
            Precio de cierre: ${quote.pc?.toFixed(2)}
          </Text>
          <Text className="text-white mb-2">
            Precio más alto del día: ${quote.h?.toFixed(2)}
          </Text>
          <Text className="text-white mb-2">
            Precio más bajo del día: ${quote.l?.toFixed(2)}
          </Text>

          <Text className="text-white mt-4">Gráfico de precios:</Text>
          <LineChart
            data={{
              labels: ["Apertura", "Máximo", "Mínimo", "Actual", "Cierre"],
              datasets: [
                {
                  data: [quote.o, quote.h, quote.l, quote.c, quote.pc],
                },
              ],
            }}
            width={350} // Ancho del gráfico
            height={220} // Altura del gráfico
            chartConfig={{
              backgroundColor: "#1E002E",
              backgroundGradientFrom: "#1E002E",
              backgroundGradientTo: "#1E002E",
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: { borderRadius: 16 },
            }}
            style={{ marginVertical: 8, borderRadius: 16 }}
          />
        </View>
      ) : (
        <Text className="text-gray-400 mt-4">
          No se encontraron precios para esta acción.
        </Text>
      )}
    </SafeAreaView>
  );
};

export default StockDetails;
