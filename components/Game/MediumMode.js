import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {fetch} from "react-native/Libraries/Network/fetch";
import RandomCats from "../Cat/RandomCats";

export default function MediumModeComponent() {
    const [viewCat, setViewCat] = useState(false);
    const [operationText, setOperationText] = useState("");
    //const [operationTimer, setoperationTimer] = useState(15);
    const [number, onChangeNumber] = useState(null);
    const [operationResult, setOperationResult] = useState(null);


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let generateOperation = () => {
        let number1 = getRandomInt(50);
        let number2 = getRandomInt(50);

        let ops = {
            '+': function(a, b) { return a + b },
            '*': function(a, b) { return a * b },
            '-': function(a, b) { return a - b },
            '/': function(a, b) { return a / b }
        };

        let switchOperator=['+','-','*','/'];
        const random = Math.floor(Math.random() * switchOperator.length);
        let randomOperator = switchOperator[random];
        //console.log(randomOperator)
        //console.log(ops[randomOperator])
        //console.log(ops[randomOperator](number1, number2));

        setOperationText(number1 + randomOperator + number2 + " = ?")
        setOperationResult(ops[randomOperator](number1, number2).toFixed(2));


    }



    //let interval = setInterval(function(){
    //    let count = operationTimer;
    //    document.getElementById('count').innerHTML=count;
    //    setoperationTimer(count--);
    //    if (count === 0){
    //        clearInterval(interval);
    //        document.getElementById('count').innerHTML='Done';
            // or...
            //alert("You're out of time!");
      //  }
    //}, 1000);





    useEffect(() => {
        generateOperation()
    }, [])

    let onSubmitClick = () => {
        if (number == operationResult) {
            setViewCat(true)
            //alert("Gagne")
        }
        else {
            alert("Perdu")
        }
    }

    return (
        <View style={styles.container}>
            <Text nativeID='count'></Text>
            <Text style={styles.text}>{operationText}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={parseInt(number)}
                placeholder={`Type result here: ${operationResult}`}
                keyboardType="numeric"
            />
            <Button
                onPress={onSubmitClick}
                title="Submit"
                color='#000000'
            ></Button>
            {viewCat && <RandomCats result={operationResult} />}
        </View>
    );
}

const styles = StyleSheet.create({
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