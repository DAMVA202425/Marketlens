import { Pressable, PressableProps, Text, View } from "react-native";
import React, { Component } from "react";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";

  variant?: "contained" | "text-only";
  className?: string;
}

const CustomButton = React.forwardRef(
  (
    {
      children,
      color = "primary",
      onPress,
      onLongPress,
      variant = "contained",
      className,
    }: Props,
    ref: React.Ref<View>
  ) => {
    const btnColor = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
    }[color];

    const textColor = {
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
    }[color];

    if (variant === "text-only") {
      return (
        <Pressable
          className={`p-3 ${className}`}
          onPress={onPress}
          onLongPress={onLongPress}
          ref={ref}
        >
          <Text className={`text-center ${textColor} font-work-medium text-lg`}>
            {children}
          </Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        className={`py-2 px-6 rounded-full ${btnColor} shadow-md active:opacity-80 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text className="text-white text-center font-work-medium text-lg">
          {children}
        </Text>
      </Pressable>
    );
  }
);

export default CustomButton;
