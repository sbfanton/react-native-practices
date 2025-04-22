import { ActivityIndicator, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { getLatestGames } from '../lib/MetacriticService';
import { AnimatedGameCard } from './GameCard';
import { Screen } from './Screen';

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
        {games.lenght == 0 ? 
        ( <ActivityIndicator color={'#fff'} size={'large'} /> ) :
        (<FlatList
            data={games}
            keyStractor={game => game.slug}
            renderItem={
                ({ item, index }) => 
                <AnimatedGameCard game={item} index={index}/>
            }
        />)}
    </Screen>
  );
}
