import { FC, ReactElement } from "react";
import { View } from "react-native";

import { Activity, ActivityCard } from ".";

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
