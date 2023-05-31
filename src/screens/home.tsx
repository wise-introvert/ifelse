import "react-native-reanimated";
import { FC, ReactElement, useState, useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import isEmpty from "lodash.isempty";

import {
  Wallet,
  WalletSection,
  IDataListItem,
  DataListSection,
  Status,
  StatusSection,
  Activity,
  ActivityCard,
  ActivityChartSection,
  OverallTaskStatus,
  Header,
} from "../components";
import { useColors, Colors } from "../hooks/useColors";

const styles: StyleSheet.NamedStyles<{ container: CSSRuleList }> =
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 12,
      margin: 0,
      backgroundColor: useColors().lightgray,
    },
  });

export const HomeScreen: FC<{}> = (): ReactElement => {
  const colors: Colors = useColors();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [dataListItems, setDataListItems] = useState<IDataListItem[]>([]);
  const [walletInfo, setWalletInfo] = useState<Wallet>();

  useEffect(() => {
    const fetchWalletInfo = async (): Promise<void> => {
      const response: Response = await fetch(
        "https://3.api.fy23ey01.careers.ifelsecloud.com/"
      );
      const data: Wallet = await response.json();
      setWalletInfo(data);
    };

    fetchWalletInfo().catch((error: any): void => {
      console.error(error);
    });
    setStatuses([
      {
        title: "Lead Generation Campaign",
        description: "Lorem ipsum dolor sit amet, consectetur",
        completed: 343,
        pending: 368,
      },
      {
        title: "Product Launch Marketing",
        description: "Lorem ipsum dolor sit amet, consectetur",
        completed: 488,
        pending: 105,
      },
    ]);

    setActivities([
      {
        duration: "week",
        average: {
          value: 26,
          timePeriod: "day",
        },
        deltaValue: -7.6,
        calls: 136,
      },
      {
        duration: "month",
        average: {
          value: 146,
          timePeriod: "week",
        },
        deltaValue: 10.6,
        calls: 986,
      },
    ]);

    setDataListItems([
      {
        iconTop: <Feather name={"bell"} size={24} color={colors.white} />,
        iconBottom: <AntDesign name={"play"} size={38} color={colors.white} />,
        title: "Tips on increasing your go forward",
        description: "lorem ipsum dolor sit amet, consectetur",
        background: colors.blue,
      },
      {
        iconTop: (
          <Feather name={"check-square"} size={24} color={colors.white} />
        ),
        iconBottom: (
          <AntDesign name={"checkcircle"} size={38} color={colors.white} />
        ),
        title: "Weekly task has been completed!",
        description: "lorem ipsum dolor sit amet, consectetur",
        background: colors.mintgreen,
      },
    ]);
  }, []);

  if (
    isEmpty(dataListItems) ||
    isEmpty(activities) ||
    isEmpty(walletInfo) ||
    isEmpty(statuses)
  ) {
    return (
      <View
        style={[
          styles.container,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <DataListSection items={dataListItems} />
        <WalletSection wallet={walletInfo} />
        <ActivityStatsSection activities={activities} />
        <OverallTaskStatus progress={76} date={new Date()} />
        <StatusSection statuses={statuses} />
        <ActivityChartSection />
      </ScrollView>
    </SafeAreaView>
  );
};

interface ActivityStatsSectionProps {
  activities: Activity[];
}
export const ActivityStatsSection: FC<ActivityStatsSectionProps> = ({
  activities,
}: ActivityStatsSectionProps): ReactElement => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 12,
        marginHorizontal: 8,
        justifyContent: "space-between",
      }}
    >
      {activities.map(
        (activity: Activity): ReactElement => (
          <ActivityCard key={activity.calls} item={activity} />
        )
      )}
    </View>
  );
};
