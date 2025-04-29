import { View, Text } from "react-native";

export function Score({ score, maxScore, size }) {
    const getColors = () => {
        const percentage = (score / maxScore) * 100;
        if (percentage < 40) return "bg-red-500";
        if (percentage < 80) return "bg-yellow-500";
        return "bg-green-500";
    }

    const getSize = () => {
        if(size == "big") {
            return "w-16 h-16"
        }
        return "w-8 h-8";
    }

    const scoreColorClassName = getColors();
    const scoreSizeClassName = getSize();

    return (
        <View className={`${scoreColorClassName} ${scoreSizeClassName} rounded-full justify-center items-center m-1`}>
            <Text className="text-lg text-white font-bold">{score}</Text>
        </View>
    )
}