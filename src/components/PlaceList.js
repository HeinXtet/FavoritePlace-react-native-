import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PlaceList = (props) => {

    _renderItem = (item) => {
        return (
            <TouchableOpacity onPress={()=>props.itemPress(item)} style={styles.rowItem}>
                <Text style={styles.rowTxt}>{item.value}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.key}
            renderItem={({ item }) => this._renderItem(item)}
            data={props.places} />
    )
}


const styles = StyleSheet.create({
    rowItem: {
        padding: 16,
        marginBottom: 8,
        backgroundColor: '#eee'
    },
    rowTxt: {
        color: 'grey'
    }
})



export default PlaceList;