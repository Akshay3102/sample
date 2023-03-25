import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { dataReducer ,listReducer} from './reducer'

const reducers=combineReducers({
    dataReducer:dataReducer,
    listReducer:listReducer
})
 const middleware=[thunk]
 const InitialState={

 }

 const store = createStore(reducers,InitialState, composeWithDevTools(applyMiddleware(...middleware)))

 export default store;