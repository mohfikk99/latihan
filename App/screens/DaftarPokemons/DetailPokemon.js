import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import CardDetail from '../../component/CardDetail';

export default function DetailPokemon({ navigation, route }) {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: (route.params.data[2]),
        });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <CardDetail
                    image={{ uri: route.params.data[1] }}
                    title={route.params.data[2]}
                    description={route.params.data[3]} />
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
