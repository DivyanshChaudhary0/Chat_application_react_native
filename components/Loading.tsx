import { colors } from "@/constants/theme";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";

const Loading = ({size, color = colors.primary}: ActivityIndicatorProps) => {
    return (
        <ActivityIndicator size={size} color={color} />
    )
}

export default Loading;