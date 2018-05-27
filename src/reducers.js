import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import {reducer as form} from 'redux-form'

import authDucks from 'attainia-web-components/auth/ducks'

export default combineReducers({
    form,
    auth: authDucks.reducer,
    routing
})
