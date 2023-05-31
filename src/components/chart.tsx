import { FC, ReactElement } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { useColors, Colors } from "../hooks/useColors";

interface ChartProps {
  data: {
    labels: string[];
    datasets: Array<any>;
  };
}
export const Chart: FC<ChartProps> = (props: ChartProps): ReactElement => {
  const colors: Colors = useColors();
  const styles = StyleSheet.create({
    chart: {
      marginLeft: -76,
    },
  });
  const chartConfig = {
    color: () => colors.darkpurple,
    fillShadowGradientFrom: "rgba(0, 0, 0, 0.25)",
    fillShadowGradientTo: "rgba(0, 0, 0, 0.25)",
    height: 120,
    width: Dimensions.get("window").width + 150,
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
  };

  return (
    <LineChart
      height={120}
      style={styles.chart}
      width={Dimensions.get("screen").width + 150}
      chartConfig={chartConfig}
      withVerticalLines={false}
      withVerticalLabels={false}
      withHorizontalLabels={false}
      fromZero
      data={props.data}
      bezier
    />
  );
};
