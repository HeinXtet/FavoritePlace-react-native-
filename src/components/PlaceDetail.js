import React, { Component } from 'react';
import { Modal, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'


const PlaceDetail = (props) => {

    _placeBody = (place) => {
        if (place != null) {
            return (
                <View>
                    <Image style={styles.image} source={place.image} />
                    <Text style={{ textAlign: 'center', color: 'black', padding: 8, fontSize: 16, fontWeight: 'bold' }} >{place.value}</Text>
                </View>

            )
        }

    }

    return (
        <Modal onBackButtonPress={props.closePlaceHandler} visible={props.selectedPlace != null} animationType='slide'>
            {_placeBody(props.selectedPlace)}
            <View style={styles.detailContainer}>
                <TouchableOpacity style={styles.deleteBtn} onPress={props.deletePlaceHandler}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>DELETE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeBtn} onPress={props.closePlaceHandler}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>CLOSE</Text>
                </TouchableOpacity>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({

    detailContainer: {
        width: '100%',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 8
    },
    deleteBtn: {
        marginTop: 16,
        width: 80,
        borderRadius: 8,
        padding: 8,
        alignContent: 'center',
        backgroundColor: 'red'
    },
    closeBtn: {
        marginTop: 8,
        width: 80,
        borderRadius: 8,
        padding: 8,
        alignContent: 'center',
        backgroundColor: 'green'
    },

})
export default PlaceDetail;