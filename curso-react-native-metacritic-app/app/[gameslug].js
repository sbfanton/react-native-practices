import { View, Text, Pressable } from "react-native";
import { styled } from "nativewind";
import { Link } from "expo-router";
import { HomeIcon } from "../components/Icons";
import { useLocalSearchParams } from "expo-router";

const StyledPressable = styled(Pressable);

export default function Detail() {
    const { gameslug } = useLocalSearchParams();

    return (
        <View className="flex-1 justify-center items-center bg-black">
            <View>
                <Text className="text-white font-bold mb-8 text-2xl">
                    Detalle del juego: {gameslug}
                </Text>

                <Link asChild href="/">
                    <StyledPressable className={`active:opacity-20`}>
                        <HomeIcon />
                    </StyledPressable>
                </Link>
            </View>
        </View>
    )
}