import { FC, ReactElement, Component } from "react";
import { View, Text } from "react-native";

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

  return (
    <View
      style={{
        width: 240,
        height: 140,
        backgroundColor: props.item.background || colors.blue,
        borderRadius: 12,
        marginHorizontal: 8,
        paddingHorizontal: 18,
        paddingVertical: 8,
        shadowColor: "#171717",
        shadowOffset: { width: -1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          height: "50%",
        }}
      >
        <View
          style={{
            height: "100%",
            marginRight: 18,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.item.iconTop as any}
        </View>
        <View
          style={{
            flex: 3,
            height: "100%",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: colors.white,
            }}
          >
            {props.item.title}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          height: "50%",
        }}
      >
        <View
          style={{
            flex: 3,
            height: "100%",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: colors.white,
            }}
          >
            {props.item.description}
          </Text>
        </View>

        <View
          style={{
            marginLeft: 18,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.item.iconBottom as any}
        </View>
      </View>
    </View>
  );
};
