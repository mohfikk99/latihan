import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Text } from 'react-native';
import CardPokemon from '../../component/CardPokemon';
import { useLazyQuery } from '@apollo/client';
import GET_POKEMONS from '../../config/api/query/pokemon';
import { NetworkConsumer } from 'react-native-offline';


export default function DaftarPokemons({ navigation }) {
    const [data, setData] = useState({})

    const [getPokemons] = useLazyQuery(
        GET_POKEMONS,
        {
            onCompleted: async (response) => {
                setData(response?.pokemons);
                // console.log(response?.pokemons);
            },
            onError: async (error) => {
                console.log(error);
            },


        }
    )



    useEffect(() => {
        getPokemons({
            variables: {
                first: 15,
            },
        });
    }, [])

    return (

        <SafeAreaView style={styles.container}>

            <NetworkConsumer>
                {({ isConnected }) => isConnected ? (
                    <FlatList
                        horizontal={false}
                        numColumns={2}
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('DetailPokemon', { data: [item.id, item.image, item.name, item.number] })}>
                                <CardPokemon
                                    image={item.image}
                                    title={item.name} />
                            </TouchableOpacity>

                        )}
                    />
                ) : (
                    <Text style={styles.textOffline}>Maaf anda sedang offline, silahkan perikasa koneksi internet anda</Text>
                )
                }
            </NetworkConsumer>







        </SafeAreaView>

    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },

    textOffline: {
        marginVertical: 50,
        alignSelf: 'center',
    },
});
