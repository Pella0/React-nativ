import {StatusBar, StyleSheet, Text, View} from "react-native";
import SelectLevel from "./SelectLevel";

export default function Home() {
    return (

        <View style={styles.container}>
            <View>
                <Text>Welcome to CalculaCat 2022 !!</Text>
                <StatusBar hidden={true}/>
            </View>
            <View>
                <SelectLevel/>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})