import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';


const PlaceInput = (props) => {
    return (
        <TextInput
            style={styles.inputStyle}
            placeholder='Enter your favorite Place'
            value={props.value}
            onChangeText={props.onChangeText} />
    )
}


const styles = StyleSheet.create({
    inputStyle : {
        borderRadius : 8,
        margin:8,
        borderWidth : 1 ,
        borderColor : 'grey',
        width  : "70%",
        padding : 8
    }
})

export default PlaceInput;
