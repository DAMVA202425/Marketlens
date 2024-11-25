import { View, Text, SafeAreaView } from "react-native";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
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
    </SafeAreaView>
  );
};

export default HomeScreen;
{
  /* <View className="px-10">
        <Link className="mb-5" href="/products">
          Productos{" "}
        </Link>

        <Link className="mb-5" href="/profile">
          Perfil{" "}
        </Link>

        <Link className="mb-5" href="/settings">
          Ajustes{" "}
        </Link>
      </View> */
}
