import { FC, ReactElement, Component } from "react";
import { View, Text } from "react-native";
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

  return (
    <View
      style={{
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
      }}
    >
      <View
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <H1 style={{ fontSize: 15, fontWeight: "bold" }}>
          Activites this {props.item.duration}
        </H1>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text
            style={{
              fontSize: 20,
              color: props.item.deltaValue >= 0 ? colors.green : colors.crimson,
              marginRight: 4,
              fontWeight: "bold",
            }}
          >
            {props.item.calls}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: props.item.deltaValue >= 0 ? colors.green : colors.crimson,
              paddingBottom: 3,
            }}
          >
            Calls
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            marginLeft: 12,
          }}
        >
          <MaterialCommunityIcons
            name={`arrow-${
              props.item.deltaValue >= 0 ? "top-right" : "bottom-left"
            }-thin-circle-outline`}
            style={{ paddingBottom: 2 }}
            size={18}
            color={props.item.deltaValue >= 0 ? colors.green : colors.crimson}
          />
          <Text
            style={{
              fontSize: 14,
              color: props.item.deltaValue >= 0 ? colors.green : colors.crimson,
              paddingBottom: 3,
              marginLeft: 2,
            }}
          >
            {props.item.deltaValue}%
          </Text>
        </View>
      </View>
      <View style={{ width: "100%", justifyContent: "flex-start", flex: 1 }}>
        <Text style={{ fontSize: 11, color: colors.bluegray }}>
          Avg. {props.item.average.value} calls per{" "}
          {props.item.average.timePeriod}
        </Text>
      </View>
    </View>
  );
};
