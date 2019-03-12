import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const PlaceList = (props) => {

    _renderItem = (item) => {
        return (
            <TouchableOpacity onPress={() => props.itemPress(item)} style={styles.rowItem}>
                <View style={styles.listItem}>
                    <Image style={styles.image} source={item.image} />
                    <Text style={styles.rowTxt}>{item.value}</Text>
                </View>
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
    listItem: {
        alignContent : 'center',
        flexDirection: 'row'
    },
    image: {
        width: 80,
        height: 50,
    },
    rowItem: {
        padding: 16,
        marginBottom: 8,
        fontSize: 16,
            },
    rowTxt: {
        marginLeft : 16,
        color: 'grey'
    }
})



export default PlaceList;