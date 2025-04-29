import { View, Text, Pressable, ActivityIndicator, ScrollView, Image } from "react-native";
import { styled } from "nativewind";
import { Link, Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/MetacriticService";

const StyledPressable = styled(Pressable);

export default function Detail() {
    // gameslug de aca abajo debe coindidir con el nombre del archivo [gameslug].js
    const { gameslug } = useLocalSearchParams();
    const [ gameInfo, setGameInfo ] = useState(null);

    useEffect(() => {
        const fetchGameDetails = async () => {
            if(gameslug) {
                const gameDetails = await getGameDetails(gameslug);
                setGameInfo(gameDetails);
            }
        }
        fetchGameDetails();
    }, [gameslug])

    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'yellow' },
                    headerTintColor: 'black',
                    headerLeft: () => {},
                    headerRight: () => {},
                    headerTitle: "Detalles de juego",
                }}
            />
            <View>
                {
                    gameInfo ? 
                    (<GameDetails game={gameInfo}/>) 
                    : 
                    (<ActivityIndicator color={"#fff"} size={"large"} />)
                }
            </View>
        </Screen>
    )
}

function GameDetails({ game }) {
    return (
        <ScrollView>
            <View className="justify-center items-center text-center">
                <Image 
                    className="mb-4 rounded"
                    source={{ uri: game.img }}
                    style={{ width: 380, height: 214 }}
                />
                <Text className="text-white font-bold mb-8 text-2xl">
                    {game.title}
                </Text>
            </View>
        </ScrollView>
    )
}