import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const PlaceAddBtn = (props) => {
    return (
        <TouchableOpacity onPress={props.addPlace} style={styles.button}>
            <Text style={{ color: 'white', textAlign: 'center' }}>ADD PLACE</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems :'center',
        padding : 8,
        borderRadius : 8,
        backgroundColor: 'green',
        width: "25%"
    }
})

export default PlaceAddBtn;  