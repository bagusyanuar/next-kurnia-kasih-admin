import { combineReducers } from 'redux'
import login from './login/slice'
import category from './category/slice'
import motorbikeCategory from './motorbike-category/slice'

const rootReducer = combineReducers({
    login,
    category,
    motorbikeCategory,
})

export default rootReducer