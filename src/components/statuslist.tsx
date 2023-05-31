import { ReactElement, FC } from "react";
import { Text, View, StyleSheet } from "react-native";

import { H1 } from ".";
import { useColors, Colors } from "../hooks/useColors";

export interface Status {
  title: string;
  description: string;
  completed: number;
  pending: number;
}
interface StatusCardProps {
  item: Status;
}
export const StatusCard: FC<StatusCardProps> = (
  props: StatusCardProps
): ReactElement => {
  const colors: Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      height: 184,
      maxWidth: "47%",
      flex: 1,
      backgroundColor: colors.white,
      borderRadius: 12,
      shadowColor: "#171717",
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1,
      overflow: "hidden",
      paddingHorizontal: 14,
      justifyContent: "space-evenly",
    },
    titleContainer: {
      width: "100%",
      flex: 1,
      justifyContent: "flex-end",
    },
    descriptionContainer: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
    },
    descriptionText: {
      fontSize: 14,
      color: colors.bluegray,
      fontWeight: "300",
      paddingBottom: 3,
    },
    progressBar: {
      height: 10,
      borderRadius: 80,
      width: "100%",
      backgroundColor: colors.lightgray,
    },
    progressFill: {
      height: "100%",
      borderRadius: 80,
      backgroundColor: colors.blue,
    },
    progressInfoContainer: {
      flex: 1,
      width: "100%",
      flexDirection: "row",
      paddingTop: 8,
    },
    progressDetailContainer: {
      height: "100%",
      flex: 1,
    },
    progressDetailTitle: {
      fontSize: 12,
      color: colors.bluegray,
      fontWeight: "300",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <H1>{props.item.title}</H1>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{props.item.description}</Text>
      </View>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${
                (props.item.completed /
                  (props.item.completed + props.item.pending)) *
                100
              }%`,
            },
          ]}
        ></View>
      </View>
      <View style={styles.progressInfoContainer}>
        <View style={styles.progressDetailContainer}>
          <H1>{props.item.completed}</H1>
          <Text style={styles.progressDetailTitle}>Completed</Text>
        </View>
        <View style={styles.progressDetailContainer}>
          <H1>{props.item.pending}</H1>
          <Text style={styles.progressDetailTitle}>Pending</Text>
        </View>
      </View>
    </View>
  );
};
