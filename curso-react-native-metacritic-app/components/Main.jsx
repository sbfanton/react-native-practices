import { ActivityIndicator, FlatList, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
//import Constants from 'expo-constants';
import { getLatestGames, getGameDetails } from '../lib/MetacriticService';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard, GameCard } from './GameCard';
import { Logo } from './Logo';
import { CircleInfoIcon } from './Icons';
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

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

        <Link asChild href="/about">
          <StyledPressable className={`active:opacity-20`}>
            <CircleInfoIcon />
          </StyledPressable>
        </Link>

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
