import React, { useState } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { NetworkConsumer } from 'react-native-offline';

export default function CekStatus() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <NetworkConsumer>
            {({ isConnected }) => isConnected ? (
                <View style={styles.container}>
                    <Button title="Klik Untuk Melihat Tanggal" onPress={showDatePicker} style={styles.button} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
            ) : (
                <Text style={styles.textOffline}>Maaf anda sedang offline, silahkan perikasa koneksi internet anda</Text>
            )
            }
        </NetworkConsumer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    button: {
        marginTop: 50,
    },
});
