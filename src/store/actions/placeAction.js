

import { ACTION_ADD, ACTION_CHANGE_PLACE, PLACE_NAME_CLEAR, ACTION_SELECT } from './actionType'


export const addPlace = (placeName) => {
    return {
        type: ACTION_ADD,
        payload: placeName
    }
}

export const changePlace = (placeName) => {
    return {
        type: ACTION_CHANGE_PLACE,
        payload: placeName
    }
}

export const clearPlace = () => {
    return {
        type: PLACE_NAME_CLEAR
    }
}

export const selectPlace = (key) => {
    return {
        type: ACTION_SELECT,
        payload: key
    }
}