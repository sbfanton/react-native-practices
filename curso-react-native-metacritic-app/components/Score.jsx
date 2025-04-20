import { View, Text } from "react-native";

export function Score({ score, maxScore }) {
    const getColors = () => {
        const percentage = (score / maxScore) * 100;
        if (percentage < 40) return "bg-red-500";
        if (percentage < 80) return "bg-yellow-500";
        return "bg-green-500";
    }

    const scoreColorClassName = getColors();

    return (
        <View className={`${scoreColorClassName} w-8 h-8 rounded-full justify-center items-center m-1`}>
            <Text className="text-lg text-white font-bold">{score}</Text>
        </View>
    )
}