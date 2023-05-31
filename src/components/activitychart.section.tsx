import { FC, ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useColors, Colors } from "../hooks/useColors";
import { Chart } from ".";

export const ActivityChartSection: FC<{}> = (): ReactElement => {
  const colors: Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      height: 180,
      backgroundColor: colors.white,
      marginHorizontal: 8,
      marginTop: 12,
      borderRadius: 12,
      shadowColor: "#171717",
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1,
      overflow: "hidden",
      paddingHorizontal: "5%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    header: {
      flexDirection: "row",
      height: 70,
      width: "100%",
      alignItems: "center",
    },
    titleContainer: {
      flex: 2,
    },
    title: { fontSize: 24, color: colors.blue, marginBottom: 3 },
    legendContainer: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    legendItemContainer: {
      flex: 1,
      flexDirection: "row",
    },
    legendIndicator: {
      height: 14,
      width: 14,
      marginRight: 6,
      borderRadius: 80,
    },
    legendTitle: {
      fontSize: 12,
      color: colors.bluegray,
      fontWeight: "300",
    },
    headerIconContainer: {
      flex: 0.4,
      height: "100%",
      alignItems: "flex-end",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>September Activites</Text>
          <View style={styles.legendContainer}>
            <View style={styles.legendItemContainer}>
              <View
                style={[
                  styles.legendIndicator,
                  { backgroundColor: colors.darkpurple },
                ]}
              ></View>
              <Text style={styles.legendTitle}>Current Month</Text>
            </View>
            <View style={styles.legendItemContainer}>
              <View
                style={[
                  styles.legendIndicator,
                  { backgroundColor: colors.mintgreen },
                ]}
              ></View>
              <Text style={styles.legendTitle}>Previous Month</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerIconContainer}>
          <Feather
            color={colors.bluegray}
            size={28}
            name={"arrow-right-circle"}
          />
        </View>
      </View>
      <Chart
        data={{
          labels: ["", "", "", "", ""],
          datasets: [
            {
              color: () => colors.mintgreen,
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
            {
              color: () => colors.darkpurple,
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
      />
    </View>
  );
};
