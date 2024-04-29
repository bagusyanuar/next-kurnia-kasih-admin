import { combineReducers } from 'redux'
import login from './login/slice'

const rootReducer = combineReducers({
    login,
    // categories,
    // vendor,
    // navbar
})

export default rootReducer