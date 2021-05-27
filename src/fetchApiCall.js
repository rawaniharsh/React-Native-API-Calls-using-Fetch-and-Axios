import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const FetchApiCall = () => {
    let [quote, setQuote] = useState('')
    let [source, setSource] = useState('')

    const FetchCall = () => {
        fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "82af55c343msh5729f626973a215p123484jsn727491cd208f",
                "x-rapidapi-host": "quotes15.p.rapidapi.com",
            }
        }).then(res => res.json())
            .then(res => {
                setQuote(res.content)
                setSource(res.originator.name)

            }).catch(e => {
                console.log(e)
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>React Native API Calls</Text>
            <Text style={styles.text}>Let's see example with Fetch and Axios</Text>

            <TouchableOpacity onPress={FetchCall}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Use Fetch Call</Text>
                </View>
            </TouchableOpacity>

            <View>
                <Text style={styles.apiCallText}>{quote}</Text>
                <Text style={styles.apiCallText}>~{source}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 80
    },
    text: {
        fontSize: 18,
        color: 'blue'
    },
    header: {
        fontSize: 22,
        color: 'orange'
    },
    button: {
        padding: 10,
        marginVertical: 30,
        backgroundColor: '#ff8836',
    },
    buttonText: {
        color: '#fff'
    },
    apiCallText: {
        fontSize: 16,
        color: 'brown',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    }
});

export default FetchApiCall;
