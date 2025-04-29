import { ActivityIndicator, FlatList } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { getLatestGames } from '../lib/MetacriticService';
import { AnimatedGameCard, GameCard } from './GameCard';
import { Screen } from './Screen';
import { useFocusEffect } from 'expo-router';

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGamesData = async () => {
      const games = await getLatestGames();
      setGames(games);
    };

    fetchGamesData();
  }, []);

  return (
    <Screen>
        {games.length == 0 ? 
        ( <ActivityIndicator color={'#fff'} size={'large'} /> ) :
        (<FlatList
            data={games}
            keyExtractor={(item) => item.slug}
            renderItem={
                ({ item, index }) => 
                <AnimatedGameCard game={item} index={index}/>
            }
            removeClippedSubviews={false}
        />)}
    </Screen>
  );
}
