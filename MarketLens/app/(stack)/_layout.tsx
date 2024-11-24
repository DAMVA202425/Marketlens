import { Text, View } from "react-native";
import { Stack } from "expo-router";

const StackLayout = () => {
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

export default StackLayout;
