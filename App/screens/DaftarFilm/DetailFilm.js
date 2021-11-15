import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'react-native-axios';
import CardDetail from '../../component/CardDetail';

// const data = [
//     {
//         "id": "tt0371746",
//         "resultType": "Title",
//         "image": "https://imdb-api.com/images/original/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_Ratio0.7273_AL_.jpg",
//         "title": "Iron Man",
//         "description": "(2008) aka \"Ironman\" disebuah desa terdapat  serigala yag bisa memakan manussia lewat ja;anitu di bisa memnakan dan juha"
//     },
// ]




export default function DetailFilm({ navigation, route }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({
        plot: ""
    });

    const id = route.params.data[0];


    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: (route.params.data[2]),
        });
    }, [navigation]);



    useEffect(() => {
        const getData = () => {
            axios
                .get('https://imdb-api.com/id/API/Title/', {
                    params: {
                        lang: 'id',
                        id: id,
                        apiKey: 'k_w8v32u4d',
                    },
                })
                .then((response) => {
                    setData(response?.data);
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
            <ScrollView>
                {isLoading ? <ActivityIndicator size={60} color="#00ff00" style={styles.loading} /> : (
                    <CardDetail
                        image={{ uri: route.params.data[1] }}
                        title={route.params.data[2]}
                        description={route.params.data[3]}
                        plot={data.plot} />
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },

    loading: {
        marginTop: 300,
    },

});
