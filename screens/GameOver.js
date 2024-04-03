import { View, Image, StyleSheet, Text} from 'react-native';
import '@fontsource/open-sans';
import '@fontsource/open-sans/700.css';

import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOver = ({roundsNumber, userNumber, onStartNewGame}) => {
    return (
        <View style={styles.rootContainer}>
            <Title>Game over</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')}/>
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds
                to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
};

export default GameOver;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: "center",
        justifyContent: "center"
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        margin: 36,
        overflow: "hidden"
    },
    image: {
        height: '100%',
        width: '100%'
    },
    summaryText: {
        fontFamily: 'monospace',
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: Colors.primary500
    }
});