import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FastImage from 'react-native-fast-image'

export default function Card(props) {

    return (
        <View style={styles.card}>

            <FastImage source={props.image} style={styles.imagecard} resizeMode={FastImage.resizeMode.contain} />

            <View style={styles.cardOne}>
                <Text style={styles.cardText}>{props.title}</Text>
                <Text style={styles.cardTextOne}>Tahun Rilis : </Text>
                <Text style={styles.cardTextTwo}>{props.description}</Text>
                <View style={styles.cardTwo}>
                    <Icon name="heart" size={25} />
                    <Icon name="share-square" size={25} />
                    <Icon name="comment-dots" size={25} />
                </View>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({

    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#aaa',
        borderWidth: 3,
        borderRadius: 5,
        height: 250,
    },

    imagecard: {
        width: 170,
        height: 'auto',
        borderRadius: 3,
    },

    cardOne: {
        flex: 1,
        marginHorizontal: 10,
    },

    cardText: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 25,
    },

    cardTextOne: {
        fontSize: 12,
    },

    cardTextTwo: {
        fontSize: 20,
        textAlign: 'left',
        // marginBottom: 55,
    },

    cardTwo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 60,

    },





});
