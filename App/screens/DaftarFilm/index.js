import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Card from '../../component/Card';
import axios from 'react-native-axios';

export default function DaftarFilm({ navigation }) {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const getData = () => {
            axios
                .get('https://imdb-api.com/API/Search/k_w8v32u4d/ironman')
                .then((response) => {
                    setData(response?.data?.results);

                    // console.warn(response)
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => setLoading(false));
        };
        getData()

    }, [])


    return (
        <SafeAreaView style={styles.container}>


            {isLoading ? <ActivityIndicator size={60} color="#00ff00" style={styles.loading} /> : (
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('DetailFilm', { data: [item.id, item.image, item.title, item.description] })}>
                            <Card
                                image={{ uri: item.image }}
                                title={item.title}
                                description={item.description} />
                        </TouchableOpacity>

                    )}
                />

            )}



        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },

    card: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#aaa',
        borderWidth: 5,
        borderRadius: 5,
        height: 250,

    },
    imagecard: {
        width: 'auto',
        height: 180,
        borderRadius: 5,
    },

    cardText: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 5,
    },

    loading: {
        marginTop: 300,
    },

});
