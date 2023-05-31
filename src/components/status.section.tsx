import { FC, ReactElement, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { useColors, Colors } from "../hooks/useColors";
import { Status, StatusCard } from "./statuslist";

interface StatusSectionProps {
  statuses: Status[];
}
export const StatusSection: FC<StatusSectionProps> = ({
  statuses,
}: StatusSectionProps): ReactElement<StatusSectionProps> => {
  const colors: Colors = useColors();
  const [activeTab, setActiveTab] = useState<string>("recent");

  return (
    <View>
      <View
        style={{
          height: 48,
          marginTop: 20,
          marginHorizontal: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          onPress={(e: GestureResponderEvent): void => {
            e.preventDefault();
            setActiveTab("recent");
          }}
          style={{
            flex: 1,
            marginHorizontal: 4,
            height: "100%",
            ...(activeTab == "recent" && {
              borderRadius: Platform.OS == "web" ? 80 : ("50%" as any),
              backgroundColor: colors.blue,
            }),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: activeTab == "recent" ? colors.white : colors.bluegray,
            }}
          >
            Recent
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e: GestureResponderEvent): void => {
            e.preventDefault();
            setActiveTab("all_groups");
          }}
          style={{
            flex: 1,
            marginHorizontal: 4,
            height: "100%",
            ...(activeTab == "all_groups" && {
              borderRadius: Platform.OS == "web" ? 80 : ("50%" as any),
              backgroundColor: colors.blue,
            }),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: activeTab == "all_groups" ? colors.white : colors.bluegray,
            }}
          >
            All Groups
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e: GestureResponderEvent): void => {
            e.preventDefault();
            setActiveTab("archived");
          }}
          style={{
            flex: 1,
            marginHorizontal: 4,
            height: "100%",
            ...(activeTab == "archived" && {
              borderRadius: Platform.OS == "web" ? 80 : ("50%" as any),
              backgroundColor: colors.blue,
            }),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: activeTab == "archived" ? colors.white : colors.bluegray,
            }}
          >
            Archived
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 0.5,
            marginHorizontal: 4,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name={"filter"} color={colors.bluegray} size={18} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 12,
          marginHorizontal: 8,
          justifyContent: "space-between",
        }}
      >
        {statuses.map(
          (item: Status): ReactElement => (
            <StatusCard key={item.title} item={item} />
          )
        )}
      </View>
    </View>
  );
};
