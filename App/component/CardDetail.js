import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image'


export default function CardDetail(props) {

    return (
        <View>
            <FastImage source={props.image} style={styles.imagecard} resizeMode={FastImage.resizeMode.contain} />
            <View style={styles.card}>
                <View style={styles.cardOne}>
                    <Text style={styles.cardText}>{props.title}</Text>
                    <Text style={styles.cardTextOne}>Nomor : </Text>
                    <Text style={styles.cardTextTwo}>{props.description}</Text>
                </View>
            </View>
        </View>

    );
}



const styles = StyleSheet.create({

    card: {
        marginVertical: 5,
        backgroundColor: '#aaa',
        borderWidth: 1,
        borderRadius: 30,
        height: 700,
    },

    imagecard: {
        alignSelf: 'center',
        width: 230,
        height: 350,
        borderRadius: 5,
        marginVertical: 5,
    },

    cardOne: {
        marginHorizontal: 15,
    },

    cardText: {
        textAlign: 'center',
        fontSize: 30,
        marginVertical: 10,
    },

    cardTextOne: {
        marginVertical: 10,
    },

    cardTextTwo: {
        fontSize: 20,
        textAlign: 'justify',
    },


});
