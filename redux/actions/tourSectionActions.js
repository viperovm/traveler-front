import * as t from '../types'

export const setTourId = (id) => dispatch => {
    dispatch({
      type: t.SET_TOUR_ID,
      payload: id,
    })
}

export const setCurrentSection = (str) => dispatch => {
    dispatch({
      type: t.SET_CURRENT_SECTION,
      payload: str,
    })
}

export const setActiveSections = (status, str) => async dispatch => {
  let type = status ? t.SET_ACTIVE_SECTION : t.DELETE_ACTIVE_SECTION
  dispatch({
    type: type,
    payload: str,
  })
}

export const setSecondaryNav = (data) => async dispatch => {
  dispatch({
    type: t.SET_SECONDARY_NAV,
    payload: data,
  })
}

export const zeroingData = () => async dispatch => {
  dispatch({
    type: t.ZEROING_DATA,
  })
}

export const openSecondaryMenu = (bool) => async dispatch => {
  dispatch({
    type: t.OPEN_SECONDARY_MENU,
    payload: bool,
  })
}

export const setLocal = (bool) => async dispatch => {
  dispatch({
    type: t.OPEN_SECONDARY_MENU,
    payload: bool,
  })
}

export const getRemoteData =
  (data_type, filter) =>
  async dispatch => {
    const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

    const REMOTE_API_URL = 'http://geohelper.info/api/v1'

    // const request = `?country=${country_id}${
    //   russian_region ? '&russian_region=' + russian_region : ''
    // }`

    try {
      const res = await axios.get(`${REMOTE_API_URL}/${data_type}?apiKey=9meFXHPzNrE5ht16GGPx6oCJTayk2gLb`, config)

      dispatch({
        type: t.GET_REMOTE_DATA_SUCCESS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: t.GET_REMOTE_DATA_FAIL,
      })
    }
  }
