import { combineReducers } from 'redux'
import authReducer from './authReducer'
import toursReducer from './toursReducer'
import tourSectionReducer from './tourSectionReducer'
import currentTourReducer from './currentTourReducer'
import addTourSectionsReducer from './addTourSectionsReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  tours: toursReducer,
  tourSection: tourSectionReducer,
  local_tour: currentTourReducer,
  add_section: addTourSectionsReducer,
})

export default rootReducer
