import * as t from '../types'

export const set_tour = (data) => dispatch => {
    console.log(data)
    dispatch({
        type: t.SET_CURRENT_TOUR,
        payload: data,
    })
}
export const update_tour = (name, value) => dispatch => {
    const data = {name: name, value: value}
    console.log(data)
    dispatch({
        type: t.UPDATE_CURRENT_TOUR,
        payload: data,
    })
}
export const clear_tour = () => dispatch => {
    
    dispatch({
        type: t.CLEAR_TOUR,
        
    })
}