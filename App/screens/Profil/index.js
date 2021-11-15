import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profil() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(null);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };



    const save = async () => {

        const USER = {
            email: email,
            age: age,

        }

        try {
            await AsyncStorage.setItem('user', JSON.stringify(USER))

            const currentUser = await AsyncStorage.getItem('user')

            console.log(currentUser)

            toggleModal();

        } catch {

        }
    }


    const remove = async () => {
        try {
            await AsyncStorage.removeItem('user')
            alert('Berhasil Menghapus Data')
        } catch (e) {
            console.log(e)
        }

        console.log('Done.')
    }

    return (
        <View style={styles.container}>
            <Button title="Tampilkan" onPress={toggleModal} />

            <View>
                <Text>{email}</Text>
                <Text>{age}</Text>

                <Button title="hapus" onPress={remove} />
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
});
