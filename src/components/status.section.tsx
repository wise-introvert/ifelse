import { FC, ReactElement, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
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
  const styles = StyleSheet.create({
    container: {
      height: 48,
      marginTop: 20,
      marginHorizontal: 8,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    tabButton: {
      flex: 1,
      marginHorizontal: 4,
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    tabButtonText: {
      fontSize: 16,
      fontWeight: "400",
    },
    filterButton: {
      flex: 0.5,
      marginHorizontal: 4,
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    statusCardsContainer: {
      flexDirection: "row",
      marginTop: 12,
      marginHorizontal: 8,
      justifyContent: "space-between",
    },
  });

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={(e: GestureResponderEvent): void => {
            e.preventDefault();
            setActiveTab("recent");
          }}
          style={[
            styles.tabButton,
            activeTab === "recent" && {
              borderRadius: 80,
              backgroundColor: colors.blue,
            },
          ]}
        >
          <Text
            style={[
              styles.tabButtonText,
              {
                color: activeTab === "recent" ? colors.white : colors.bluegray,
              },
            ]}
          >
            Recent
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e: GestureResponderEvent): void => {
            e.preventDefault();
            setActiveTab("all_groups");
          }}
          style={[
            styles.tabButton,
            activeTab === "all_groups" && {
              borderRadius: 80,
              backgroundColor: colors.blue,
            },
          ]}
        >
          <Text
            style={[
              styles.tabButtonText,
              {
                color:
                  activeTab === "all_groups" ? colors.white : colors.bluegray,
              },
            ]}
          >
            All Groups
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e: GestureResponderEvent): void => {
            e.preventDefault();
            setActiveTab("archived");
          }}
          style={[
            styles.tabButton,
            activeTab === "archived" && {
              borderRadius: 80,
              backgroundColor: colors.blue,
            },
          ]}
        >
          <Text
            style={[
              styles.tabButtonText,
              {
                color:
                  activeTab === "archived" ? colors.white : colors.bluegray,
              },
            ]}
          >
            Archived
          </Text>
        </TouchableOpacity>
        <View style={styles.filterButton}>
          <Feather name={"filter"} color={colors.bluegray} size={18} />
        </View>
      </View>
      <View style={styles.statusCardsContainer}>
        {statuses.map(
          (item: Status): ReactElement => (
            <StatusCard key={item.title} item={item} />
          )
        )}
      </View>
    </View>
  );
};
