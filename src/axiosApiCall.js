import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';


const AxiosApiCall = () => {
    let [quote, setQuote] = useState('')
    let [source, setSource] = useState('')

    const axiosCall = () => {
        axios({
            "method": "GET",
            "url": "https://quotes15.p.rapidapi.com/quotes/random/",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-key": "82af55c343msh5729f626973a215p123484jsn727491cd208f",
                "x-rapidapi-host": "quotes15.p.rapidapi.com",
                "useQueryString": true
            }, "params": {
                "language_code": "en"
            }
        })
            .then((res) => {
                setQuote(res.data.content);
                setSource(res.data.originator.name)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={axiosCall}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Use Axios Call</Text>
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
        marginTop: 10
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
        justifyContent: 'center',
        alignItems: 'center',
        width: 110,
        padding: 10,
        marginVertical: 30,
        backgroundColor: '#ff8836'
    },
    buttonText: {
        color: '#fff'
    },
    apiCallText: {
        fontSize: 16,
        color: 'brown',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    }
});

export default AxiosApiCall;
