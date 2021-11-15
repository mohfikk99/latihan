import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import CekStatus from '../screens/CekStatus';
import Profil from '../screens/Profil';

import DaftarFilm from '../screens/DaftarFilm';
import DetailFilm from '../screens/DaftarFilm/DetailFilm';

import DaftarPokemons from '../screens/DaftarPokemons';
import DetailPokemon from '../screens/DaftarPokemons/DetailPokemon';


const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

                <Stack.Screen name="DaftarFilm" component={DaftarFilm} options={{ title: "Daftar Film", headerShown: true }} />
                <Stack.Screen name="DetailFilm" component={DetailFilm} options={{ headerShown: true }} />

                <Stack.Screen name="DaftarPokemons" component={DaftarPokemons} options={{ title: "Daftar Pokemon", headerShown: true }} />
                <Stack.Screen name="DetailPokemon" component={DetailPokemon} options={{ headerShown: true }} />


                <Stack.Screen name="CekStatus" component={CekStatus} options={{ title: "Cek Status", headerShown: true }} />
                <Stack.Screen name="Profil" component={Profil} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;