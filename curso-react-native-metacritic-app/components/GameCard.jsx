import { View, Image, Text, StyleSheet, Animated } from "react-native"
import { useEffect, useRef } from "react"
import { Score } from "./Score";

export function GameCard({ game }) {
    return (
    <View 
    className="flex-row bg-gray-500/10 p-4 rounded-xl gap-4 mb-10"
    key={game.slug}>
        <Image 
            source={{ uri: game.image }}
            style={styles.image}
        />
        <View style={styles.textContent}>
            <Text style={styles.title}>{game.title}</Text>
            <Score score={game.score} maxScore={5}/>
            <Text style={styles.released}>Lanzamiento: {game.release}</Text>
        </View>
    </View>)
}

export function AnimatedGameCard({ game, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 200,
            delay: index * 100,
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
      textContent: {
        flexShrink:1
      },
      title: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 5,
        color: '#fff'
      },
      score: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#c7c7c7'
      },
      released: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#bdbdbd',
        marginBottom: 5
      }
})