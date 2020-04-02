import React from 'react';
import { StyleSheet } from 'react-native';

import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import PlacesNavigator from './navigation/PlacesNavigator';


import placeReducer from './store/places.reducer';
import { init } from './helpers/db';

init()
  .then(() => {
    console.log('Initialised database');
  })
  .catch(err => {
    console.log('Initialising db failed');
    console.log(err);
  })

const rootReducer = combineReducers({
  places: placeReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


