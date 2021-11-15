import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Home({ navigation: { navigate } }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.jumbotron}>
                <Image source={require('../../assets/mobile1.png')} style={styles.jumbotronImg} />
            </View>

            <View style={styles.section}>

                <TouchableOpacity onPress={() => navigate('DaftarFilm')}>
                    <View style={styles.sectionCard}>
                        <Icon name="map-marker-alt" size={50} />
                        <Text style={styles.sectionCardText}>Cek Daftar Film</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('DaftarPokemons')}>
                    <View style={styles.sectionCard}>
                        <Icon name="store" size={50} />
                        <Text style={styles.sectionCardText}>Cek Daftar Pokemon</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.section}>

                <TouchableOpacity onPress={() => navigate('CekStatus')}>
                    <View style={styles.sectionCard}>
                        <Icon name="plane" size={50} />
                        <Text style={styles.sectionCardText}>Cek Status</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('Profil')}>
                    <View style={styles.sectionCard}>
                        <Icon name="user-alt" size={50} />
                        <Text style={styles.sectionCardText}>Profil</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5A5A5A',
    },

    jumbotron: {
        borderWidth: 5,
        borderColor: '#5A5A5A',
    },

    jumbotronImg: {
        width: 'auto',
        height: 290,
        borderRadius: 5,
    },

    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20,
    },

    sectionCard: {
        width: 160,
        height: 200,
        borderWidth: 3,
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 35,
    },

    sectionCardText: {
        marginTop: 50,
        fontSize: 20,
        textAlign: 'center',
    },


});
