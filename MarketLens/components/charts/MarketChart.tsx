import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundColor: "#1E2923",
  backgroundGradientFrom: "#08130D",
  backgroundGradientTo: "#1F3A93",
  decimalPlaces: 2, // Opcional
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726",
  },
};

const MarketChart = ({
  labels,
  data,
}: {
  labels: string[];
  data: number[];
}) => {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          marginBottom: 10,
          color: "white",
        }}
      >
        Market Overview
      </Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [{ data: data }],
        }}
        width={screenWidth * 0.9} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix=""
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default MarketChart;
