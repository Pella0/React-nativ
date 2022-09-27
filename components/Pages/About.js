import { StyleSheet, Text, View } from 'react-native';

export default function About() {
    return (
        <View style={styles.container}>
            <Text>
                Ceci est l'infos du composant About.js !!!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'flex-start',
        }
    }
)