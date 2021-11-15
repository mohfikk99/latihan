import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FastImage from 'react-native-fast-image'

export default function CardPokemon({ image, title }) {

    return (
        <View style={styles.card}>
            <FastImage source={{ uri: image }} style={styles.cardImage} resizeMode={FastImage.resizeMode.contain} />
            <Text style={styles.cardText}>{title}</Text>
        </View>
    );
}



const styles = StyleSheet.create({

    card: {
        padding: 5,
        marginHorizontal: 11,
        marginVertical: 10,
        width: 173,
        borderRadius: 7,
        height: 200,
        backgroundColor: '#5A5A5A',
    },

    cardImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
    },

    cardText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },


});
