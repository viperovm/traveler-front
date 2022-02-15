import * as t from '../types'

export const update_tour = (name, value) => dispatch => {
    const data = {name: name, value: value}
    dispatch({
        type: t.UPDATE_CURRENT_TOUR,
        payload: data,
    })
}