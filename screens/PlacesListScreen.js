import React from 'react';
import { View, Text, FlatList, StyleSheet, Platform } from 'react-native';

import { useSelector } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';

const PlacesListScreen = props => {

    const places = useSelector(state => state.places.places);

    return (
        <FlatList data={places} keyExtractor={item => item.id}
            renderItem={itemData => <PlaceItem
                onSelect={() => {
                    props.navigation.navigate('PlaceDetail', {
                        placeTitle: itemData.item.title,
                        placeId: itemData.item.id
                    });
                }}
                title={itemData.item.title}
                image={itemData.item.image} address={null} />}
        >
        </FlatList >
    )
}

PlacesListScreen.navigationOptions = navData => {
    return {
        title: 'All Places',
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Add Place' iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                onPress={() => {
                    navData.navigation.navigate('NewPlace');
                }} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({});

export default PlacesListScreen;
