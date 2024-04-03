import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";

export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);


    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true)
        setGuessRounds(numberOfRounds)
    }

    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if(userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
    }

    if(gameIsOver && userNumber) {
        screen = <GameOver userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
    }



      return (
          <LinearGradient style={styles.rootScreen} colors={[Colors.primary700, Colors.accent500]}>
              <ImageBackground
                  style={styles.rootScreen}
                  source={require('./assets/images/background.png')}
                  resizeMode={'cover'} imageStyle={styles.backgroundImage}>
                  <SafeAreaView style={styles.rootScreen}>
                      {screen}
                      {/*{userNumber ? <GameScreen userNumber={userNumber}/> : <StartGameScreen onPickNumber={pickedNumberHandler} />}*/}
                  </SafeAreaView>
              </ImageBackground>
          </LinearGradient>
      );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
    backgroundImage: {
      opacity: 0.15
    }
});
