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

import { authRegister } from "@/core/auth/actions/auth-actions";

const RegisterScreen = () => {
  const { height } = useWindowDimensions();
  const [isPosting, setIsPosting] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const onRegister = async () => {
    const { fullName, email, password } = form;

    if (!fullName || !email || !password) {
      Alert.alert("Error", "Por favor completa todos los campos.");
      return;
    }

    setIsPosting(true);

    try {
      const wasSuccessful = await authRegister(fullName, email, password);
      setIsPosting(false);

      if (wasSuccessful) {
        Alert.alert(
          "Éxito",
          "Usuario registrado con éxito. Por favor inicia sesión."
        );
        router.replace("/auth/login");
      } else {
        Alert.alert("Error", "No se pudo registrar al usuario.");
      }
    } catch (error) {
      setIsPosting(false);
      Alert.alert("Error", "Ocurrió un error al registrar el usuario.");
    }
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
          <ThemedText type="title">Crear Cuenta</ThemedText>
          <ThemedText style={{ color: "grey" }}>
            <Text>Por favor crea una cuenta para continuar</Text>
          </ThemedText>
        </View>

        <View style={{ marginTop: 20 }}>
          <ThemedTextInput
            placeholder="Nombre completo"
            autoCapitalize="words"
            icon="person-outline"
            value={form.fullName}
            onChangeText={(value) => setForm({ ...form, fullName: value })}
          />
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

        {/* Spacer */}
        <View style={{ marginTop: 10 }} />

        {/* Button */}
        <ThemedButton
          icon="arrow-forward-outline"
          onPress={onRegister}
          disabled={isPosting}
        >
          Crear cuenta
        </ThemedButton>

        <ThemedText style={{ color: "black" }}>¿Ya tienes cuenta?</ThemedText>
        <ThemedLink href="/auth/login" style={{ marginHorizontal: 5 }}>
          Ingresar
        </ThemedLink>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
