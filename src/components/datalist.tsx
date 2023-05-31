import { FC, ReactElement, Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { useColors, Colors } from "../hooks/useColors";

export interface IDataListItem {
  iconTop: FC | ReactElement | Component;
  iconBottom: FC | ReactElement | Component;
  title: string;
  description?: string;
  background?: string;
}

export interface DataListItemProps {
  item: IDataListItem;
}
export const DataListItem: FC<DataListItemProps> = (
  props: DataListItemProps
): ReactElement => {
  const colors: Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      width: 240,
      height: 140,
      borderRadius: 12,
      paddingHorizontal: 18,
      marginRight: 8,
      paddingVertical: 8,
      shadowColor: "#171717",
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1,
    },
    topRowContainer: {
      flex: 1,
      flexDirection: "row",
      height: "50%",
    },
    topRowLeftContainer: {
      height: "100%",
      marginRight: 18,
      alignItems: "center",
      justifyContent: "center",
    },
    topRowRightContainer: {
      flex: 3,
      height: "100%",
      flexWrap: "wrap",
      alignItems: "flex-start",
      justifyContent: "center",
    },
    titleText: {
      fontSize: 18,
    },
    bottomRowContainer: {
      flex: 1,
      flexDirection: "row",
      height: "50%",
    },
    bottomRowLeftContainer: {
      flex: 3,
      height: "100%",
      flexWrap: "wrap",
      alignItems: "flex-start",
      justifyContent: "center",
    },
    descriptionText: {
      fontSize: 14,
    },
    bottomRowRightContainer: {
      marginLeft: 18,
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: props.item.background || colors.blue },
      ]}
    >
      <View style={styles.topRowContainer}>
        <View style={styles.topRowLeftContainer}>
          {props.item.iconTop as any}
        </View>
        <View style={styles.topRowRightContainer}>
          <Text style={[styles.titleText, { color: colors.white }]}>
            {props.item.title}
          </Text>
        </View>
      </View>
      <View style={styles.bottomRowContainer}>
        <View style={styles.bottomRowLeftContainer}>
          <Text style={[styles.descriptionText, { color: colors.white }]}>
            {props.item.description}
          </Text>
        </View>
        <View style={styles.bottomRowRightContainer}>
          {props.item.iconBottom as any}
        </View>
      </View>
    </View>
  );
};
