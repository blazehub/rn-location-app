import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceDetailScreen = () => {
    return (
        <View>

        </View>
    )
}

PlaceDetailScreen.navigationOptions = navData => {
    return {
        title: navData.navigation.getParam('placeTitle')
    }
}

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
