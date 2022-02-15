import { combineReducers } from 'redux'
import authReducer from './authReducer'
import toursReducer from './toursReducer'
import tourSectionReducer from './tourSectionReducer'
import currentTourReducer from './currentTourReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  tours: toursReducer,
  tourSection: tourSectionReducer,
  local_tour: currentTourReducer,
})

export default rootReducer
