import { ScrollView, ActivityIndicator, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
//import Constants from 'expo-constants';
import { getLatestGames, getGameDetails } from '../lib/MetacriticService';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard, GameCard } from './GameCard';
import { Logo } from './Logo';

export function Main() {

  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const fetchGamesData = async () => {
      const games = await getLatestGames();
      setGames(games);
    };

    fetchGamesData();
  }, []);

  return (
    <View style={{ 
        paddingTop: insets.top, 
        paddingBottom: insets.bottom 
    }}>
        <View style={{ marginBottom: 20 }}>
            <Logo />
        </View>
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
    </View>
  );
}
