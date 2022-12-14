import {Button, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";
import RandomCats from "../Cat/RandomCats";

export default function HardMode() {
    const [viewCat, setViewCat] = useState(false);
    const [operationText, setOperationText] = useState("");
    const [number, onChangeNumber] = useState(null);
    const [operator, onChangeOperator] = useState(null);
    const [operationResult, setOperationResult] = useState(null);
    const [operatorSelected, setOperatorSelected] = useState(null);


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    const generateOperation = () => {
        const number1 = getRandomInt(50);
        const number2 = getRandomInt(50);


        const operationCase =[number1 + number2, number1 - number2, number1 * number2, number1 / number2 ]

        const operatorCase=['+','-','*','/'];

        // Take a random Operator in arrayOperator
        const randomId = Math.floor(Math.random() * operatorCase.length);



        //random operator in variable
        const operation  = Math.round(operationCase[randomId]).toFixed(3);
        const myOperatorSelected  = operatorCase[randomId];


        // Set the operation
        setOperationText(number1 + " ? " + number2 + " = " + operation);
        setOperatorSelected(myOperatorSelected);
    }

    useEffect(() => {
        generateOperation();
        // why multiple fetch ? console.log('OperatorSelected: ',{operatorSelected})
    }, [operatorSelected])

    const handleControl = () => {
        if (operator == operatorSelected) {
            setViewCat(true)
            //alert("Gagne")
        }
        else {
            alert("Perdu")
        }
    }
    const newGame = () => {
        if (viewCat === true) {
            setViewCat(false)
            generateOperation();
        }
        else {
            console.log('coucou')
        }
        console.log({viewCat})
    }


    return (
        <View style={styles.container}>
            <Text nativeID='count'></Text>
            <Text style={styles.text}>{operationText}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeOperator}
                value={parseInt(operator)}
                placeholder={`Type result here: ${operatorSelected}`}
                keyboardType="numeric"
            />
            <Button
                onPress={handleControl}
                title="Submit"
                color='#000000'
            ></Button>
            <Pressable style={styles.buttonGame} onPress={newGame}>
                <Text>New Game</Text>
            </Pressable>

            {viewCat && <RandomCats result={operatorSelected} />}

        </View>
    );
}

const styles = StyleSheet.create({
    buttonGame: {
        margin: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#70BB24',
        fontWeight: "bold",
        textTransform:'uppercase',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 30
    },
    input: {
        height: 60,
        width: 300,
        margin: 30,
        borderWidth: 1,
        padding: 10,
    },
});