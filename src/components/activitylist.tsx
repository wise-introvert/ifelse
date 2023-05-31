import { FC, ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useColors, Colors } from "../hooks/useColors";
import { H1 } from ".";

export interface Activity {
  duration: string;
  calls: number;
  deltaValue: number; // change
  average: Average;
}
export interface Average {
  value: number;
  timePeriod: string;
}
export interface ActivityCardProps {
  item: Activity;
}
export const ActivityCard: FC<ActivityCardProps> = (
  props: ActivityCardProps
): ReactElement => {
  const colors: Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      height: 140,
      flex: 1,
      backgroundColor: colors.white,
      borderRadius: 12,
      shadowColor: "#171717",
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1,
      maxWidth: "48%",
      overflow: "hidden",
      paddingHorizontal: 14,
      justifyContent: "space-evenly",
    },
    titleContainer: {
      width: "100%",
      flex: 1,
      justifyContent: "flex-end",
    },
    titleText: {
      fontSize: 15,
      fontWeight: "bold",
    },
    activityContainer: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
    },
    callsContainer: {
      flexDirection: "row",
      alignItems: "flex-end",
    },
    callsValue: {
      fontSize: 20,
      marginRight: 4,
      fontWeight: "bold",
    },
    callsLabel: {
      fontSize: 14,
      paddingBottom: 3,
    },
    deltaContainer: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      marginLeft: 12,
    },
    deltaIcon: {
      paddingBottom: 2,
    },
    deltaValue: {
      fontSize: 14,
      paddingBottom: 3,
      marginLeft: 2,
    },
    averageContainer: {
      width: "100%",
      justifyContent: "flex-start",
      flex: 1,
    },
    averageText: {
      fontSize: 11,
      color: colors.bluegray,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <H1 style={styles.titleText}>Activites this {props.item.duration}</H1>
      </View>
      <View style={styles.activityContainer}>
        <View style={styles.callsContainer}>
          <Text
            style={[
              styles.callsValue,
              {
                color:
                  props.item.deltaValue >= 0 ? colors.green : colors.crimson,
              },
            ]}
          >
            {props.item.calls}
          </Text>
          <Text
            style={[
              styles.callsLabel,
              {
                color:
                  props.item.deltaValue >= 0 ? colors.green : colors.crimson,
              },
            ]}
          >
            Calls
          </Text>
        </View>
        <View style={styles.deltaContainer}>
          <MaterialCommunityIcons
            name={`arrow-${
              props.item.deltaValue >= 0 ? "top-right" : "bottom-left"
            }-thin-circle-outline`}
            style={styles.deltaIcon}
            size={18}
            color={props.item.deltaValue >= 0 ? colors.green : colors.crimson}
          />
          <Text
            style={[
              styles.deltaValue,
              {
                color:
                  props.item.deltaValue >= 0 ? colors.green : colors.crimson,
              },
            ]}
          >
            {props.item.deltaValue}%
          </Text>
        </View>
      </View>
      <View style={styles.averageContainer}>
        <Text style={styles.averageText}>
          Avg. {props.item.average.value} calls per{" "}
          {props.item.average.timePeriod}
        </Text>
      </View>
    </View>
  );
};
