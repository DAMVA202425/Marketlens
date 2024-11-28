import React from "react";
import { Link, LinkProps } from "expo-router";
import { useThemeColor } from "../hooks/useThemeColor";

interface Props extends LinkProps {}

const ThemedLink = ({ style, ...res }: Props) => {
  const primaryColor = useThemeColor({}, "primary2");

  return (
    <Link
      style={[
        {
          color: primaryColor,
        },
        style,
      ]}
      {...res}
    />
  );
};

export default ThemedLink;
