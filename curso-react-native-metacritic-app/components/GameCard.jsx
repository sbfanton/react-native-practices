import { View, Image, Text, StyleSheet, Animated } from "react-native"
import { useEffect, useRef } from "react"

export function GameCard({ game }) {
    return (
    <View key={game.slug} style={styles.card}>
        <Image 
            source={{ uri: game.image }}
            style={styles.image}
        />
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.score}>{game.score}</Text>
    </View>)
}

export function AnimatedGameCard({ game, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 500,
            useNativeDriver: true
        }).start()
    }, [opacity, index]);

    return (
        <Animated.View style={{ opacity }}>
            <GameCard game={game} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 48,
        marginLeft: 20
      },
      image: {
        width: 200,
        height: 157,
        borderRadius: 10
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 5,
        color: '#fff'
      },
      score: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#a2a2a8'
      }
})