import { ReactElement, FC } from "react";
import { Text, View } from "react-native";

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

  return (
    <View
      style={{
        height: 184,
        maxWidth: "45%",
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
      }}
    >
      <View
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <H1>{props.item.title}</H1>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: colors.bluegray,
            fontWeight: "300",
            paddingBottom: 3,
          }}
        >
          {props.item.description}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "flex-start",
          flex: 1,
        }}
      >
        <View
          style={{
            height: 10,
            borderRadius: 80,
            width: "100%",
            backgroundColor: colors.lightgray,
          }}
        >
          <View
            style={{
              height: "100%",
              borderRadius: 80,
              width: `${
                (props.item.completed /
                  (props.item.completed + props.item.pending)) *
                100
              }%`,
              backgroundColor: colors.blue,
            }}
          ></View>
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "row",
            paddingTop: 8,
          }}
        >
          <View
            style={{
              height: "100%",
              flex: 1,
            }}
          >
            <H1>{props.item.completed}</H1>
            <Text
              style={{
                fontSize: 12,
                color: colors.bluegray,
                fontWeight: "300",
              }}
            >
              Completed
            </Text>
          </View>
          <View
            style={{
              height: "100%",
              flex: 1,
            }}
          >
            <H1>{props.item.pending}</H1>
            <Text
              style={{
                fontSize: 12,
                color: colors.bluegray,
                fontWeight: "300",
              }}
            >
              Pending
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
