import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Button } from 'react-native';
import Colors from '../constants/Colors';

const NewPlaceScreen = () => {
    const [titleValue, setTitleValue] = useState('');

    const titleChangeHandler = text => setTitleValue(text);

    const savePlaceHandler = () => { }
    
    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.textInput}
                    onChangeText={titleChangeHandler}
                    value={titleValue} />
                <Button title="Save Place"
                    color={Colors.primary}
                    onPress={savePlaceHandler} />
            </View>
        </ScrollView>
    )
}

NewPlaceScreen.navigationOptions = navData => {
    return {
        title: 'Add Place'
    }
}

const styles = StyleSheet.create({
    form: {
        margin: 40
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default NewPlaceScreen;
