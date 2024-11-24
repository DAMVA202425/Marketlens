import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { login } from "../../utils/authMethods";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
      console.log("Usuario logueado:", user);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <View>
      <Text>Inicio de Sesión</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text>{error}</Text> : null}
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
