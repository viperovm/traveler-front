import { combineReducers } from 'redux'
import authReducer from './authReducer'
import toursReducer from './toursReducer'
import tourSectionReducer from './tourSectionReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  tours: toursReducer,
  tourSection: tourSectionReducer,
})

export default rootReducer
