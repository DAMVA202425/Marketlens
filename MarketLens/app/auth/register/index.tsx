import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { register } from "../../utils/authMethods";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const user = await register(email, password);
      console.log("Usuario registrado:", user);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <View>
      <Text>Registro</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text>{error}</Text> : null}
      <Button title="Registrarse" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
