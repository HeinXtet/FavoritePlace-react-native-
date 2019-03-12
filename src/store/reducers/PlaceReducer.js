
import React from 'react';
import { ACTION_ADD, ACTION_DELETE, ACTION_SELECT, ACTION_DESELECT, PLACE_NAME_CLEAR, ACTION_CHANGE_PLACE } from '../actions/actionType.js'

const initState = {
    placeName: '',
    places: [],
    selectedPlace: null
}

const PlaceReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_ADD:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(),
                    value: action.payload,
                    image: {
                        uri: 'https://cdn.techinasia.com/wp-content/uploads/2016/12/singapore-skyline-with-merlion.jpg'
                    }
                })
            }
        case ACTION_DELETE:

            return {
                ...state,
                places: state.places.filter((place, i) => {
                    return place.key != state.selectedPlace.key
                }),
                selectedPlace : null

            }
        case ACTION_SELECT:
            return {
                ...state,
                selectedPlace: state.places.find((place, i) => {
                    return place.key === action.payload
                })
            }
        case ACTION_DESELECT:
            return {
                ...state,
                selectedPlace: null
            }
            break
        case ACTION_CHANGE_PLACE:
            return {
                ...state,
                placeName: action.payload
            }
        case PLACE_NAME_CLEAR:
            return {
                ...state,
                placeName: ''
            }
        default:
            return state
    }
}

export default PlaceReducer;