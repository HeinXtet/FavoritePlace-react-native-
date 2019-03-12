/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import PlaceInput from './src/components/PlaceInput';
import PlaceAddBtn from './src/components/PlaceAddBtn';
import PlaceList from './src/components/PlaceList';
import { connect } from 'react-redux';
import PlaceDetail from './src/components/PlaceDetail';
import { addPlace, deSelectedPlace,deletePlace , selectPlace, changePlace, clearPlace } from './src/store/actions/placeAction';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {

  _onChangedText = (place) => {

    this.props.changePlace(place)
  }

  _addPlace = () => {
    if (this.props.placeName.length === 0) {
      return;
    }
    this.props.add(this.props.placeName)
    this.props.clearPlace()
  }

  _itemPress = (item) => {
    this.props.selectPlace(item.key)
  }

  _itemClose = () => {
    this.props.deSelectedPlace()
  }

  _itemDelete = () => {
      this.props.deletePlace()
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PlaceDetail deletePlaceHandler={this._itemDelete} closePlaceHandler={this._itemClose} selectedPlace={this.props.selectedPlace} />
        <Text style={styles.welcome}>Do you have Favorite Place in world?</Text>
        <View style={styles.inputContainer}>
          <PlaceInput value={this.props.placeName} onChangeText={this._onChangedText} />
          <PlaceAddBtn addPlace={this._addPlace} />
        </View>
        <PlaceList itemPress={this._itemPress} places={this.props.places} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputContainer: {
    backgroundColor: 'white',
    flexDirection: "row",
    alignItems: 'center',
  }
});


const mapStateToProps = (state) => {
  return {
    places: state.reducer.places,
    placeName: state.reducer.placeName,
    selectedPlace: state.reducer.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (placeName) => {
      dispatch(addPlace(placeName))
    },
    changePlace: (placeName) => {
      dispatch(changePlace(placeName))
    },
    clearPlace: () => {
      dispatch(clearPlace())
    },
    selectPlace: (key) => {
      dispatch(selectPlace(key))
    },
    deSelectedPlace: () => {
      dispatch(deSelectedPlace())
    },
    deletePlace : (key) => {
      dispatch(deletePlace())
    }
  }
}



// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)