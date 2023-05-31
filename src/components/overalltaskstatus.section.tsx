import { FC, ReactElement } from "react";
import { Text, View, Platform } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { useColors, Colors } from "../hooks/useColors";
import { H1 } from ".";
import { getMonthName } from "../utils/date";

export interface OverallTaskStatusProps {
  progress: number;
  date: Date | string;
}
export const OverallTaskStatus: FC<OverallTaskStatusProps> = ({
  progress,
  date,
}: OverallTaskStatusProps): ReactElement => {
  const colors: Colors = useColors();

  return (
    <View
      style={{
        height: 120,
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: colors.blue,
        marginHorizontal: 8,
        flexDirection: "row",
        padding: 14,
        marginTop: 14,
        shadowColor: "#171717",
        shadowOffset: { width: -1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          maxWidth: 80,
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatedCircularProgress
          size={75}
          width={6}
          fill={progress}
          tintColor={colors.white}
          lineCap={"round"}
          rotation={0}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          duration={1500}
        >
          {(fill: any) => (
            <H1
              style={{
                fontWeight: "300",
                color: colors.white,
              }}
            >
              {Math.round((100 * fill) / 100)}%
            </H1>
          )}
        </AnimatedCircularProgress>
      </View>
      <View
        style={{
          height: "100%",
          flex: 2,
          justifyContent: "center",
          marginLeft: 14,
        }}
      >
        <H1
          style={{
            fontWeight: Platform.OS == "web" ? "700" : "500",
            color: colors.white,
            width: "100%",
            marginBottom: 4,
          }}
        >
          Overall Task Completion
        </H1>
        <Text style={{ fontSize: 14, fontWeight: "200", color: colors.white }}>
          Achievement against total calls targeted for the month of
          {getMonthName(
            typeof date == "string"
              ? new Date(date).getMonth()
              : (date as Date).getMonth()
          )}
        </Text>
      </View>
    </View>
  );
};
