import {
  View,
  Text,
  TextInputProps,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "../hooks/useThemeColor";

interface Props extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
}

const ThemedTextInput = ({ icon, ...rest }: Props) => {
  const primaryColor = useThemeColor({}, "primary2");
  //const textColor = useThemeColor({ light: "black" }, "text");
  const textColor = useThemeColor({ light: "black", dark: "black" }, "text");

  const inputRef = useRef<TextInput>(null);
  const [isActive, setIsActive] = useState(false);
  return (
    <View
      style={{
        ...styles.border,
        borderColor: isActive ? primaryColor : "#ccc",
      }}
      onTouchStart={() => inputRef.current?.focus}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={24}
          color={textColor}
          style={{ marginRight: 10 }}
        />
      )}
      <TextInput
        ref={inputRef}
        placeholder="#5c5c5c"
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        style={{
          color: textColor,
          marginRight: 10,
          flex: 1,
        }}
        {...rest}
      />
    </View>
  );
};

export default ThemedTextInput;

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
