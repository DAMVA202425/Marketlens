import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

const App = () => {
  return <Redirect href="/home" />;
};

export default App;

{
  /* <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className="text-3xl font-work-medium text-primary">
          Hi Verden
        </Text>
        <Text className="text-3xl font-work-medium text-secondary-200">
          Hi Verden
        </Text>
        <Text className="text-3xl font-work-medium text-tertiary">
          Hi Verden
        </Text>
        <Link href="/products">Productos</Link>
      </View>
    </SafeAreaView> */
}
