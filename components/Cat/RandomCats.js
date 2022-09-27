import React, {useEffect, useState} from "react";
import {Button, Image, StatusBar, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function RandomCats({result}) {

    const [cat, setCat] = useState("https://cataas.com/cat/says/" + result );
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Votre resultat : {result} / 10</Text>
            <Image
                source={{ uri: cat }}
                style={styles.img}
            />
            <StatusBar hidden={true} />
            <Button
                title="Voulez vous rejouer ?"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    img: {
        width: 400,
        height: 400,

    }
})