import { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import { router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";
import { fetchNews } from "@/core/endpoints/api/finnhubApi";

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const newsData = await fetchNews("general");
        setNews(newsData);
      } catch (error) {
        console.error("Error al cargar las noticias:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-[#1E002E]">
        <ActivityIndicator size="large" color="#ffffff" />
        <Text className="text-white mt-4">Cargando noticias...</Text>
      </SafeAreaView>
    );
  }

  const renderItem = ({ item }: { item: any }) => (
    <View className="bg-gray-800 p-4 mb-4 rounded-lg">
      <Text className="text-white text-xl font-semibold">{item.headline}</Text>
      <Text className="text-gray-400 mt-2">{item.summary}</Text>
      <Text className="text-gray-500 mt-2 text-sm">Fuente: {item.source}</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#1E002E] p-4">
      <Text className="text-2xl font-work-black text-white mb-6">
        Noticias bursatiles
      </Text>

      <View className="flex-row  items-center space-x-4">
        <CustomButton
          className="ml-2 mb-5"
          color="primary"
          onPress={() => router.push("/")}
        >
          Inicio
        </CustomButton>

        <CustomButton
          className="ml-2 mb-5"
          color="primary"
          onPress={() => router.push("/stocks")}
        >
          Activos
        </CustomButton>

        <Image
          source={require("@/assets/images/bolsa.jpg")}
          style={{
            width: 185,
            height: 105,
            borderRadius: 10,
            marginLeft: 5,
            marginBottom: 15,
          }}
        />
      </View>

      <FlatList
        data={news}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default NewsScreen;
