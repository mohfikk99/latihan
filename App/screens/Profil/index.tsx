import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TextInput, FlatList } from 'react-native';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import "react-native-get-random-values";
import { nanoid } from "nanoid";

export default function Profil() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [data, setData] = useState<any>([]);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const getAllKeys = async () => {
        setData([]);
        AsyncStorage.getAllKeys()
            .then((keys) => {
                keys.forEach((key) => {
                    getData(key);
                });
            })
    };

    const save = async () => {
        try {
            await AsyncStorage.setItem(nanoid(), JSON.stringify({ email, age }))
            getAllKeys();
            toggleModal();

        } catch (error) {
            console.log(error);
        }
    }

    const getData = async (key: string) => {
        const data = await AsyncStorage.getItem(key);
        if (data) {
            const newItem = { key, data: JSON.parse(data) };
            setData((prevState: any) => [...prevState, newItem]);
        }
    };


    const remove = async (key: string) => {
        try {
            await AsyncStorage.removeItem(key)
            getAllKeys();
            alert('Berhasil Menghapus Data')
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAllKeys();
    }, [])

    return (
        <View style={styles.container}>
            <Button title="Tampilkan" onPress={toggleModal} />

            <View>
                <FlatList

                    data={data}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <View key={item.id} style={styles.section}>
                            <Text> Email : {item.data.email}</Text>
                            <Text>Age : {item.data.age}</Text>
                            <Button title="hapus" onPress={() => remove(item.key)} />
                        </View>


                    )}
                />


            </View>



            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                    <View style={styles.modalText}>
                        <TextInput
                            style={styles.input}
                            placeholder="email..."
                            onChangeText={setEmail}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setAge}
                            placeholder="age..."
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.modalButton}>
                        <Button title="Simpan" onPress={save} />
                        <Button title="Keluar" onPress={toggleModal} />
                    </View>

                </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    modal: {
        backgroundColor: 'gray',
        borderRadius: 10,
        flexDirection: 'column',
        padding: 10,
    },

    modalText: {
        alignSelf: 'center',
        marginVertical: 20,
    },

    modalButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    input: {
        width: 150,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },

    section: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});
