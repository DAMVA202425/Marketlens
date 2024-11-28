import { ActivityIndicator, Text, View } from "react-native";
import { Redirect, Stack } from "expo-router";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { useEffect } from "react";

const CheckAuthenticationLayout = () => {
  const { status, checkStatus } = useAuthStore();

  useEffect(() => {
    checkStatus();
  }, []);

  if (status === "checking") {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  if (status === "unauthenticated") {
    // Guardar la ruta del usuario
    return <Redirect href="/auth/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
        }}
      ></Stack.Screen>

      <Stack.Screen
        name="products/index"
        options={{
          title: "Noticias",
        }}
      ></Stack.Screen>

      <Stack.Screen
        name="profile/index"
        options={{
          title: "Activo",
        }}
      ></Stack.Screen>

      <Stack.Screen
        name="settings/index"
        options={{
          title: "Ajustes",
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default CheckAuthenticationLayout;
