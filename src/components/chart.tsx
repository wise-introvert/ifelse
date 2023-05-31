import { FC, ReactElement } from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { useColors, Colors } from "../hooks/useColors";

export const Chart: FC<{}> = (): ReactElement => {
  const colors: Colors = useColors();

  return (
    <LineChart
      height={120}
      style={{
        marginLeft: -76,
      }}
      width={Dimensions.get("screen").width + 150}
      chartConfig={{
        color: () => colors.darkpurple,
        fillShadowGradientFrom: "rgba(0, 0, 0, 0.25)",
        fillShadowGradientTo: "rgba(0, 0, 0, 0.25)",
        height: 120,
        width: Dimensions.get("window").width + 150,
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
      }}
      withVerticalLines={false}
      withVerticalLabels={false}
      withHorizontalLabels={false}
      fromZero
      data={{
        labels: ["", "", "", "", "", ""],
        datasets: [
          {
            color: () => colors.darkpurple,
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
          {
            color: () => colors.mintgreen,
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
        ],
      }}
      bezier
    />
  );
};
