import { combineReducers } from 'redux'
import login from './login/slice'
import motorbikeCategory from './motorbike-category/slice'

const rootReducer = combineReducers({
    login,
    motorbikeCategory,
    // vendor,
    // navbar
})

export default rootReducer