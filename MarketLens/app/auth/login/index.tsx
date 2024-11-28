import { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  useWindowDimensions,
  ScrollView,
  Alert,
} from "react-native";

import { router } from "expo-router";

import { ThemedText } from "@/presentation/theme/components/ThemedText";
import ThemedTextInput from "@/presentation/theme/components/ThemedTextInput";
import ThemedButton from "@/presentation/theme/components/ThemedButton";
import ThemedLink from "@/presentation/theme/components/ThemedLink";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";

const LoginScreen = () => {
  const { login } = useAuthStore();

  const { height } = useWindowDimensions();

  const [isPosting, setIsPosting] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    const { email, password } = form;
    console.log({ email, password });
    if (form.email.length === 0 || form.password.length === 0) {
      return;
    }

    setIsPosting(true);
    const wasSuccessful = await login(email, password);
    setIsPosting(false);

    if (wasSuccessful) {
      router.replace("/(stack)/home");
      return;
    }

    Alert.alert("Error", "Usuario o contraseña no son correctos");
  };

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
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <ThemedTextInput
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            icon="lock-closed-outline"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
        </View>

        {/* spacer */}
        <View style={{ marginTop: 10 }} />

        {/* buton */}
        <ThemedButton
          icon="arrow-forward-outline"
          onPress={onLogin}
          disabled={isPosting}
        >
          Ingresar
        </ThemedButton>

        <ThemedText style={{ color: "black" }}>¿No tienes cuenta?</ThemedText>
        <ThemedLink href="/auth/register" style={{ marginHorizontal: 5 }}>
          Crear cuenta
        </ThemedLink>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
