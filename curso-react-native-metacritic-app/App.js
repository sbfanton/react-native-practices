import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, Pressable } from 'react-native';
import { useEffect } from 'react';
import { getLatestGames, getGameDetails } from './lib/MetacriticService';

const icon = require("./assets/icon.png");

export default function App() {

  useEffect(() => {
    const fetchData = async () => {
      const games = await getLatestGames();
      const game = await getGameDetails(25097);
      return {games, game}
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/*<Image 
        source={icon} 
        style={styles.image1} 
        blurRadius={1}/>
      <Image 
        source={ { uri: "https://images.squarespace-cdn.com/content/v1/55c8073fe4b02a74ffe18e48/1553024761304-6IN74LYQBK5I8E0J9K10/brush+test+2+post.jpg?format=1500w" } } 
        style={styles.image1}
      />
      <Text>Tenemos aquí la app! :)</Text>
      <Button title='Pulsa aquí' onPress={() => alert("Hola!")}/>
      <TouchableHighlight 
        underlayColor={"#09f"}
        onPress={() => alert("Hola!")}
        style={styles.button}
      >
        <Text style={{color: '#09f', fontWeight: 'bold'}}>Pulsa aquí</Text>
      </TouchableHighlight>
      <Pressable
        onPress={() => {}}
        style={ ({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom
        ]}>
          { ({pressed}) => (
            <Text styles={{
              color: 'white',
              fontWeight: pressed ? 'bold' : 'normal'
            }}>
              {pressed ? 'Pressed!' : 'Press Me'}
            </Text>
          )}
      </Pressable>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image1: { 
    width: 450, 
    height: 600, 
    resizeMode: 'contain'
  },
  button: {
    width: 120,
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  wrapperCustom: {
    marginTop: 10,
    padding: 15,
    borderRadius: 25
  }
});
