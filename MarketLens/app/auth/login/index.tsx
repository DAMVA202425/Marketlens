import {
  View,
  Text,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { ThemedText } from "@/presentation/theme/components/ThemedText";
import { ScrollView } from "react-native-gesture-handler";
import ThemedTextInput from "@/presentation/theme/components/ThemedTextInput";
import ThemedButton from "@/presentation/theme/components/ThemedButton";
import ThemedLink from "@/presentation/theme/components/ThemedLink";

const LoginScreen = () => {
  const { height } = useWindowDimensions();
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView
        style={{
          paddingHorizontal: 40,
        }}
      >
        <View
          style={{
            paddingTop: height * 0.35,
          }}
        >
          <ThemedText type="title">Ingresar</ThemedText>
          <ThemedText style={{ color: "grey" }}>
            <Text>Por favor ingresa para continuar</Text>
          </ThemedText>
        </View>

        <View style={{ marginTop: 20 }}>
          <ThemedTextInput
            placeholder="Correo eléctronico"
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail-outline"
          />
          <ThemedTextInput
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            icon="lock-closed-outline"
          />
        </View>

        {/* spacer */}
        <View style={{ marginTop: 10 }} />

        {/* buton */}
        <ThemedButton icon="arrow-forward-outline">Ingresar</ThemedButton>

        <ThemedText>¿No tienes cuenta?</ThemedText>
        <ThemedLink href="/auth/register" style={{ marginHorizontal: 5 }}>
          Crear cuenta
        </ThemedLink>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
